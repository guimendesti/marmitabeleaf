FROM node:10-alpine

RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*

RUN npm install -g grunt && npm install -g grunt-cli

RUN mkdir -p /srv/app/cardapio
WORKDIR /srv/app/cardapio

COPY package*.json .
COPY Gruntfile.js .

RUN npm install

COPY . .

CMD ["grunt", "server"]
