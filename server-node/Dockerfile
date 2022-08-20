FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/

COPY ./package.json /usr/src/app/

RUN npm i

COPY . /usr/src/app/

RUN npm run build

CMD ["node", "build/app.js"]