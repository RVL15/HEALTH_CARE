@echo off
echo ===================================================
echo   MediMind AI - Git Repository Cleanup Utility
echo ===================================================
echo.

:: Step 1: Remove node_modules from tracking
echo [1/4] Removing node_modules from Git tracking...
git rm -r --cached node_modules >nul 2>&1
if %errorlevel% equ 0 (
    echo   - node_modules successfully untracked.
) else (
    echo   - node_modules was not tracked or already removed.
)

:: Step 2: Remove .env from tracking
echo [2/4] Removing .env from Git tracking...
git rm --cached .env >nul 2>&1
if %errorlevel% equ 0 (
    echo   - .env successfully untracked.
) else (
    echo   - .env was not tracked or already removed.
)

:: Step 3: Stage and commit new configurations
echo [3/4] Staging .gitignore and LICENSE, and committing...
git add .gitignore LICENSE
git commit -m "chore: prepare repository for GitHub push" >nul 2>&1
if %errorlevel% equ 0 (
    echo   - Commit successfully created.
) else (
    echo   - Nothing to commit or commit failed.
)

:: Step 4: Show Git Status
echo.
echo [4/4] Verifying Git Status:
echo ---------------------------------------------------
git status
echo ---------------------------------------------------
echo.
echo Repo is clean and ready! You can now run:
echo   git push -u origin main
echo.
pause
