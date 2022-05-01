
rem 02/20/2021 06:51 am - SSN

cd %~dp0

set scriptKey_20210220_0652=%~1-20210220-0652
set port=3178

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%scriptKey_20210220_0652%*"

call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd %port%

rem %1 build:with / build:without INCLUDE_BUNDLE_ANALYZER

echo %1
echo %2 
 

rem start npm  run build:%1
start npm  run build:local

rem echo Wait for signal...
rem waitfor productionVer20200822 /T 60
rem echo Starting webpage...
start chrome http://p3178.nonbs.org:3178