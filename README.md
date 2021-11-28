# Zad. 3
## a. docker build -f Dockerfile -t local .

Zbuduj obraz local za pomocą Dockerfile

## b. docker run -p 2000:1500 -d --rm --name project local

Utworz obraz local w kontenerze project w trybie w tle, gdzie port systemu macierzystego - 2000, port kontenera - 1500

## c. docker logs project

Wyswietla logi z kontenera project

## d. docker image inspect local | jq ".[] .RootFS"

Wyswietla liczbe warstw

# Zad. 4
#Zbudowac obraz z githuba:
## 1. docker build linkDoRepozytoriumGit
#Żeby zapisać obraz na dockerHub trzeba stworzyć konto
#Tworzymy repozytorium
#Logujemy się w terminalu
## docker login
#Budujemy nasz obraz
## 2. docker build -t username/nazwaRepozytorium .
#Pushujemy nasz obraz
## docker push username/nazwaRepozytorium
