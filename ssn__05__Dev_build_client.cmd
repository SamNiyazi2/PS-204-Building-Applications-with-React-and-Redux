
rem 02/17/2021 08:52 am - SSN

cd %~dp0

set scriptKey_20210217_0853=%~1-20210217-0853
set port=3176

echo [%ssnalert%]

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*scriptKey_20210217_0853*"

call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd %port%

start %1 npm  run start:dev