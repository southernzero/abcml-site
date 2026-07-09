# auto-sync-metrics.ps1
# 서브 PC(claude-southernzero) 스케줄러 전용 — Google Scholar 인용수를 긁어
# data/scholar.json 을 갱신하고, 변경 시 main 에 push → Vercel 자동 재배포.
#
# 배경: GitHub Actions(데이터센터 IP)는 Google Scholar 에 자주 차단되지만,
#       이 PC(주거/Tailscale IP)는 정상 접근되므로 인용수 동기화는 이 PC가 담당한다.
#       (논문 수 동기화는 ORCID GitHub Actions 가 이미 안정적으로 처리)
#
# 등록 예시(관리자 PowerShell):
#   schtasks /create /tn "AbcmlScholarSync" /sc DAILY /st 09:30 ^
#     /tr "powershell -NoProfile -ExecutionPolicy Bypass -File C:\Users\INHA\automation-hub\abcml-metrics-sync\scripts\auto-sync-metrics.ps1"

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

$log = Join-Path $repo 'scripts\auto-sync-metrics.log'
function Log($m) { "$([DateTime]::Now.ToString('yyyy-MM-dd HH:mm:ss'))  $m" | Tee-Object -FilePath $log -Append }

try {
  Log '--- sync start ---'
  git fetch origin main --quiet
  git checkout main --quiet 2>$null
  git reset --hard origin/main --quiet   # 로컬 잡변경 없이 항상 최신 main 기준
  Log 'main 최신화 완료'

  node scripts/sync-scholar.mjs 2>&1 | ForEach-Object { Log $_ }

  $changed = git status --porcelain data/scholar.json
  if ($changed) {
    git add data/scholar.json
    git commit -m "chore: sync citations from Google Scholar (sub-PC) [skip ci]" --quiet
    git push origin main --quiet
    Log '✅ data/scholar.json 변경 → push 완료 (Vercel 재배포)'
  } else {
    Log '변경 없음 — push skip'
  }
  Log '--- sync done ---'
}
catch {
  Log "❌ 오류: $($_.Exception.Message)"
  exit 1
}
