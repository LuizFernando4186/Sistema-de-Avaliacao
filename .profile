docker network create canais-usp-cloudnetwork

cd api
mvn clean install

cd ..
cd db
docker compose up

export PATH = ./angular/