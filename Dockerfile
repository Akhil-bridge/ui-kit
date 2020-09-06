FROM node:14-alpine as builder

WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app

RUN echo "npm start" > cmd.sh

ENTRYPOINT ["sh", "cmd.sh"]