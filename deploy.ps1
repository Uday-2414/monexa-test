Param(
    [string]$Message = "deploy: rebuild docs"
)

Write-Host "Running deploy script..."

# Ensure dependencies are installed
if (-not (Test-Path node_modules)) {
    Write-Host "node_modules not found — running npm install..."
    npm install
}

# Build the project
Write-Host "Building production bundle (npm run build)..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed. Aborting deploy."
    exit 1
}

# Replace docs with dist
if (Test-Path docs) {
    Write-Host "Removing existing docs/ folder..."
    Remove-Item -Recurse -Force docs
}

Write-Host "Copying dist/ -> docs/"
Copy-Item -Path dist -Destination docs -Recurse

Write-Host "Staging docs and dist for commit..."
git add docs/ dist/

# Only commit if there are staged changes
$status = git status --porcelain
if (-not [string]::IsNullOrWhiteSpace($status)) {
    $ts = Get-Date -Format o
    $msg = "$Message - $ts"
    git commit -m $msg
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Git commit failed. Aborting deploy."
        exit 1
    }
    Write-Host "Pushing to origin main..."
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Git push failed. Please check your credentials and network."
        exit 1
    }
    Write-Host "Deploy successful — pushed to origin/main."
} else {
    Write-Host "No changes to commit (docs up-to-date). Skipping push."
}
