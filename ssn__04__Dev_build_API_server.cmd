
cd %~dp0

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%ssnalert% - API Server - 20200818-1651*"

rem Backup in case first line fails (title changed or lost)
call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd 3129

start %1 npm  run start:api

explorer http://p3129.nonbs.net:3129