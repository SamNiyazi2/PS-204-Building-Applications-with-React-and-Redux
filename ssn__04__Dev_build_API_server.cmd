
rem 02/18/2021 06:48 am - SSN

cd %~dp0

set scriptKey_20210218_0648=%~1-20210218-0648
set port=3177


call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*scriptKey_20210218_0648*"

call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd %port%

start %1 npm  run start:api

