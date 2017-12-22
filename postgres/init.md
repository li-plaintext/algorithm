
## get from home grew
brew install postgresql

## if it is fisrt time
initdb /usr/local/var/postgres

## start/stop/restart/status
pg_ctl -D /usr/local/var/postgres [start/stop/restart/status]

## create your DB
createdb lixudb
