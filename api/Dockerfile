FROM node:10-alpine

RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*

RUN mkdir -p /srv/app/api
WORKDIR /srv/app/api

COPY package*.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]
