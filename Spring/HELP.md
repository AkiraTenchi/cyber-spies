# Getting Started

### Reference Documentation

For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.5.2/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.5.2/gradle-plugin/reference/html/#build-image)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/2.5.2/reference/htmlsingle/#using-boot-devtools)

### Additional Links

These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)
 
### API Request Formats
GET http://localhost:8080/users/ -> get all users
GET http://localhost:8080/users/{id} -> get user with id
POST http://localhost:8080/users/ Content-Type "application/json" {username: "username", pwd: "pwd"} -> create new user
PUT http://localhost:8080/users/{id} Content-Type "application/json" {username: "username", pwd: "pwd"} -> modify user with id
DELETE http://localhost:80890/users/{id} -> Deletes user with ID 