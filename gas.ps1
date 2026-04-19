# 1. Jalankan ETL Python
Write-Host "------------------------------------------" -ForegroundColor Cyan
Write-Host " 1. Menjalankan ETL Spasial (PostGIS)..."
Write-Host "------------------------------------------" -ForegroundColor Cyan
python etl_coastline.py

# 2. Build & Deploy Web
Write-Host ""
Write-Host "------------------------------------------" -ForegroundColor Green
Write-Host " 2. Melakukan Build & Deploy Web..."
Write-Host "------------------------------------------" -ForegroundColor Green
npm run deploy

# 3. Git Push
Write-Host ""
Write-Host "------------------------------------------" -ForegroundColor Yellow
Write-Host " 3. Push Source Code ke GitHub..."
Write-Host "------------------------------------------" -ForegroundColor Yellow
git add .
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Update data otomatis pada $timestamp"
git push origin main

Write-Host ""
Write-Host "------------------------------------------" -ForegroundColor White -BackgroundColor Blue
Write-Host " NAISSSS !               "
Write-Host "------------------------------------------"
Pause