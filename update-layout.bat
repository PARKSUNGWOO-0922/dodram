@echo off

echo ==================================================
echo 1
echo ==================================================
if exist "dodram-all" rmdir /s /q "dodram-all"
git clone https://github.com/kahyou22/dodram-all.git

echo.
echo ==================================================
echo 2
echo ==================================================

if not exist "assets\css" mkdir "assets\css"
if not exist "assets\js" mkdir "assets\js"
if not exist "assets\img" mkdir "assets\img"

@REM xcopy "dodram-all\assets" "assets" /E /H /Y /I
xcopy "dodram-all\assets\img\layout" "assets\img\layout" /E /H /Y /I

copy /Y "dodram-all\template.html" .
copy /Y "dodram-all\assets\css\layout.css" "assets\css\"
copy /Y "dodram-all\assets\js\layout.js" "assets\js\"

echo.
echo ==================================================
echo 3
echo ==================================================
rmdir /s /q "dodram-all"

echo.
echo OK.
pause