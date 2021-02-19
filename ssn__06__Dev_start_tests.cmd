
rem 02/19/2021 05:25 am - SSN

cd %~dp0

set scriptKey_20210219_0525=%~1-20210219-0525

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%scriptKey_20210219_0525%*"

start %1 npm test