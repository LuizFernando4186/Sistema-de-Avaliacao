FROM amazoncorretto:11.0.15
ADD target/api-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080
#FROM maven:3.6.3-jdk-11
#COPY . .
#ADD /.m2 /root/.m2
#RUN mvn clean install
#ENTRYPOINT ["java","-jar","target/api-0.0.1-SNAPSHOT.jar"]