# Angular + Spring Boot

<img src="https://angular.gallerycdn.vsassets.io/extensions/angular/ng-template/16.0.0/1683140320423/Microsoft.VisualStudio.Services.Icons.Default" alt="Angular" style="height: 105x; width: 105px;">
<img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-spring-boot-dashboard/0.13.2023051200/1683849854838/Microsoft.VisualStudio.Services.Icons.Default" alt="Spring Boot" style="height: 90px; width: 90px;">
<img src="https://ms-mssql.gallerycdn.vsassets.io/extensions/ms-mssql/sql-bindings-vscode/0.4.0/1684435163379/Microsoft.VisualStudio.Services.Icons.Default"alt="SQLServer" style="height: 90px; width: 90px; margin-left: 10px">
<img src="https://cdn-icons-png.flaticon.com/512/5969/5969059.png"alt="Docker" style="height: 90px; width: 90px; margin-left: 10px">


<br/>

    Example project to display a list of orders by customers from Microsoft's Northwind sample database.   
**Stack:**

* ```Angular, Spring Boot, SQL Server``` and ```Docker``` to containerize the services.



## Oracle 17 JDK + Maven
- Link: [Installation Chocolatey](https://community.chocolatey.org/packages/oracle17jdk#install)
- Link: [Installation Maven](https://community.chocolatey.org/packages/maven)

*PS*: Run Powershell as Administrator
| Command |  Script | 
| --- | --- |
| Install |   choco install oracle17jdk |
| Install |   choco install maven |



Test: 
* refreshenv
* java -version
* mvn -v

Após instalar o Maven é necessário reiniciar o pc.

## VSCode Extensions

**Spring Boot**
* Spring Initializr in VSCode
* Spring Boot Dashboard
* Spring Boot Tools
* Spring Boot Snippets
* Extension Pack for Java
* Lombok Annotations Support for VS Code
* Familiar Java Themes
* Language Support for Java(TM) by Red Hat

**Angular**
* Angular Essentials 
* Angular Files

## SQL Server 
* [Pubs & Northwind Download](https://github.com/Microsoft/sql-server-samples/tree/master/samples/databases/northwind-pubs)
* Connection String: Data Source=172.23.206.211, 1403;Initial Catalog=Master;User ID=sa;Password=!Passw0rd;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False


## Spring Boot
* Biblioteca swagger: **springdoc-openapi-ui**
* Swagger Url: http://localhost:8080/swagger-ui/index.html

## Angular

* ng generate environments

## Docker 

> Execute the command ```cd api; mvn clean package -DskipTests; cd ..``` to build backend image.

### Build
* docker build --tag=jpcabana1/northwind-api:latest  .
* docker run -d -p 8080:8080 jpcabana1/northwind-api:latest 

### Compose
* docker compose --file docker-compose.yml up -d --build
* docker compose --file docker-compose.yml down


## Reference
* [How to Replace Environment Variables Using the envsubst Command](https://linuxhandbook.com/envsubst-command/)
* [Dynamically Set Angular Environment Variables in Docker](https://nkpremices.com/dynamically-set-angular-env-variables-in-docker/)
* [How to quickly replace environment variables in a file](https://skofgar.ch/dev/2020/08/how-to-quickly-replace-environment-variables-in-a-file/)
* [Dockerize Angular Application](https://medium.com/codex/dockerize-angular-application-69e7503d1816)


