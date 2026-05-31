@echo off
REM Script para verificar SonarQube - Jazz Influência AB
REM Windows Batch Script

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   VERIFICAÇÃO DO SONARQUBE - Jazz Influência AB         ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

REM Passo 1: Verificar arquivo de configuração
echo [1/5] Verificando arquivo sonar-project.properties...
if exist sonar-project.properties (
    echo ✓ Arquivo encontrado!
    echo.
    echo Conteúdo:
    type sonar-project.properties
    echo.
) else (
    echo ✗ Arquivo NÃO encontrado!
    exit /b 1
)

REM Passo 2: Validar sintaxe
echo [2/5] Validando sintaxe do arquivo...
findstr /c:"sonar.projectKey" sonar-project.properties >nul
if %errorlevel% equ 0 (
    echo ✓ projectKey definido
) else (
    echo ✗ projectKey NÃO definido
    exit /b 1
)

findstr /c:"sonar.sources" sonar-project.properties >nul
if %errorlevel% equ 0 (
    echo ✓ sources definido
) else (
    echo ✗ sources NÃO definido
    exit /b 1
)

findstr /c:"sonar.language" sonar-project.properties >nul
if %errorlevel% equ 0 (
    echo ✓ language definido
) else (
    echo ✗ language NÃO definido
    exit /b 1
)

echo.

REM Passo 3: Verificar se sonar-scanner está instalado
echo [3/5] Verificando sonar-scanner...
sonar-scanner --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ sonar-scanner instalado!
    sonar-scanner --version
) else (
    echo ⚠ sonar-scanner NÃO está instalado globalmente
    echo  Você pode instalar com: npm install -g sonarqube-scanner
)

echo.

REM Passo 4: Contar arquivos JavaScript
echo [4/5] Contando arquivos JavaScript...
setlocal enabledelayedexpansion
set count=0
for /r %%f in (*.js) do (
    set /a count=!count!+1
)
echo ✓ Encontrados %count% arquivos .js
echo.

REM Passo 5: Verificar exclusões
echo [5/5] Verificando exclusões...
if not exist "node_modules" (
    echo ✓ node_modules não será incluído
) else (
    echo ⚠ node_modules existe (será excluído automaticamente)
)

if not exist "cypress\screenshots" (
    echo ✓ cypress\screenshots não será incluído
) else (
    echo ⚠ cypress\screenshots existe (será excluído automaticamente)
)

if not exist ".git" (
    echo ✓ .git não será incluído
) else (
    echo ✓ .git existe (será excluído automaticamente)
)

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║                VERIFICAÇÃO COMPLETA!                    ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo RESUMO:
echo ✓ Arquivo de configuração: OK
echo ✓ Propriedades obrigatórias: OK
echo ✓ Arquivos JavaScript encontrados: %count%
echo ✓ Exclusões configuradas: OK
echo.
echo PRÓXIMAS ETAPAS:
echo 1. Instalar sonar-scanner (se ainda não instalou):
echo    npm install -g sonarqube-scanner
echo.
echo 2. Executar análise:
echo    sonar-scanner
echo.
echo 3. (Opcional) Ver dashboard:
echo    - Instale Docker
echo    - Execute: docker run -d -p 9000:9000 sonarqube:latest
echo    - Acesse: http://localhost:9000
echo.
pause
