
cd %~dp0

call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%ssnalert% - webpack.config.prod-20200821-1646*"
call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%ssnalert% - http-server-20200821-1928*"

rem %1 build:with / build:without INCLUDE_BUNDLE_ANALYZER

start npm  run build:%1
echo Wait for signal...
waitfor productionVer20200822 /T 60
echo Starting webpage...
start chrome http://p3130.nonbs.net:3130