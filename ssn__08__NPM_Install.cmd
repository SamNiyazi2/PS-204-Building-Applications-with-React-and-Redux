@echo off

title  %~1

set currentCD=%cd%

cd %~dp0

if not exist node_modules goto startInstall


set ask=
set /p ask=Are you usre you want to run npm install? (YES)

if "%ask%" == "YES" goto yes

goto theEnd

:yes

echo:
echo Removing node-modules...
echo:


rd node_modules /s/q

if exist node_modules goto failedToDelete

:startInstall

echo:
echo Running npm install...
echo:

npm i

goto theEnd

:failedToDelete
echo:
echo Failed to delete node_modules
echo:

:theEnd


cd %currentCD%
