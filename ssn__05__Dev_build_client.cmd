
cd %~dp0

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%ssnalert% - webpack.config.dev-20200817-1539*"

rem Backup in case first line fails (title changed or lost)
call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd 3128

start %1 npm  run start:dev