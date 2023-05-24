# build spring boot api
# run this if there is no image local
# cd api; mvn clean package -DskipTests; cd ..
# ON WSL -> cd api && docker build --tag=northwind-api:1.1  . && cd ..

docker compose --file ./docker/docker-compose.yml up -d --build
Write-Host "Starting database migration..."
Start-Sleep -Seconds 6
docker cp ./Database/Northwind.sql  "northwind-db:/var/opt/mssql/data/"
docker cp ./Database/create-database.sh  "northwind-db:/var/opt/mssql/data/" 
docker exec -it northwind-db "bash" /var/opt/mssql/data/create-database.sh
Write-Host "Migration completed!"