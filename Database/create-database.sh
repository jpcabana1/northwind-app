#!/bin/bash\r

cd var/opt/mssql/data/
/opt/mssql-tools/bin/sqlcmd  -S localhost -U SA -P '!Passw0rd' -i Northwind.sql