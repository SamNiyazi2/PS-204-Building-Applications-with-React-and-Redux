
rem 04/30/2022 11:57 pm - SSN

cd %~dp0

set scriptKey_20210218_0648=%~1-20210218-0648
set port=3179


call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%scriptKey_20210218_0648%*"

call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd %port%

start %1 npm  run start:api

