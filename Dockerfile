# wybor obrazu
FROM node AS build1
# autor Dockerfile
LABEL author="Rostyslav Mysiuha"
# stworz katalog /var/node
RUN mkdir -p /var/node
# ustawic go jako przestrzen robocza
WORKDIR /var/node
# dodac do projektu folder src
ADD src ./

# wybor obrazu alpine
FROM node:alpine
# skopijuj pliki z pierwszego builda do odpowiadajacego katalogu
COPY --from=build1 /var/node /var/node
# ustawic go jako przestrzen robocza
WORKDIR /var/node
# ustawienie portu 1500
EXPOSE 1500
CMD ["node", "main.js"]
