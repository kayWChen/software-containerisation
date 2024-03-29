FROM java:openjdk-8u111


EXPOSE 8081

# copy and rename
ADD springboottest-0.0.1-SNAPSHOT.jar app.jar
RUN bash -c 'touch /app.jar'

ENTRYPOINT ["java", "-jar", "/app.jar", "--spring.profiles.active=pro"]
