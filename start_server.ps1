Write-Host "유진투자선물 데모 서버를 시작합니다..." -ForegroundColor Green
Write-Host ""
Write-Host "접속 주소:" -ForegroundColor Yellow
Write-Host "http://58.229.223.138:3000" -ForegroundColor Cyan
Write-Host "http://58.229.223.164:3000" -ForegroundColor Cyan
Write-Host "http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "서버를 중지하려면 Ctrl+C를 누르세요." -ForegroundColor Red
Write-Host ""

node server.js
