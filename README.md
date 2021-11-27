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
