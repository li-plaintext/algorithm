
## Get from home grew
brew install postgresql

## If it is fisrt time
initdb /usr/local/var/postgres

## start/stop/restart/status
pg_ctl -D /usr/local/var/postgres [start/stop/restart/status]

## Create your DB
createdb lixudb

## Login "lixudb" database through commandline
psql lixudb

## Kill process
ps -ef | grep postmaster | awk '{print $2}'

kill <the_pid_you_just_got>

## Additional info
\l :List databases

\c database-name :Connect to database

\c :Show the database your are connected to

\d :List tables in database

\d table-name :Describe table

SELECT * FROM table-name :List table contents


## Delete table
drop table YOUR_TABLE_NAME

## Execute .sql file
psql -d lixudb -f YOUR_FILE.sql
