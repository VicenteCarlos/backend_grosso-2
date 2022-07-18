FROM node 
#criação de imagem na linha acima

WORKDIR /usr/app
#linha acima é o diretório de trabalho, onde iremos colocar nossas informações

COPY ./package*.json ./

RUN npm install

COPY . . 
#linha acima copia tudo

EXPOSE 3333

CMD ["npm", "run", "dev"]
#cmd permite rodar comandos extras

#n tem necessidade de usar o Dockerfile pra executar os comandos acima sendo que ja tem o docker-compose
