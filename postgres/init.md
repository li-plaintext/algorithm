
## get from home grew
brew install postgresql

## if it is fisrt time
initdb /usr/local/var/postgres

## start/stop/restart/status
pg_ctl -D /usr/local/var/postgres [start/stop/restart/status]

## create your DB
createdb lixudb

## kill process
ps -ef | grep postmaster | awk '{print $2}'

kill <the_pid_you_just_got>
