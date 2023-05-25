## API
# Build spring boot api
# run this if there is no local image
# cd api; mvn clean package -DskipTests; cd ..
# ON WSL -> cd api && docker build --tag=jpcabana1/northwind-api:latest . && docker push jpcabana1/northwind-api:latest && cd ..

## APP
# cd app && docker build --tag=jpcabana1/northwind-app:latest . && docker push jpcabana1/northwind-app:latest && cd ..

docker compose --file ./docker/docker-compose.yml up -d --build
Write-Host "Starting database migration..."
Start-Sleep -Seconds 8
docker cp ./Database/Northwind.sql  "northwind-db:/var/opt/mssql/data/"
docker cp ./Database/create-database.sh  "northwind-db:/var/opt/mssql/data/"
Start-Sleep -Seconds 4
docker exec -it northwind-db "bash" /var/opt/mssql/data/create-database.sh
Write-Host "Migration completed!"