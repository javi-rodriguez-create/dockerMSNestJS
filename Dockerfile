FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY .npmrc ./

COPY ./nest-microservice-template/package.json ./
COPY ./nest-microservice-template/package-lock.json ./
RUN npm install

# Instala Nest CLI globalmente
RUN npm install -g @nestjs/cli

COPY ./global.settings.js ./../

RUN npm run prebuild

EXPOSE 3000

# CMD cd mynest; npm run start:dev