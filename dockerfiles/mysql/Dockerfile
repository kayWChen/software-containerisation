FROM mysql:5.7

WORKDIR /docker-entrypoint-initdb.d
ADD data.sql .

ENV MYSQL_ROOT_PASSWORD=root