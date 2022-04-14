FROM node:10.16.0-alpine
LABEL Maintainer="David Cao"
ENV APP_DIR cli-mate-api
ENV TZ=America/Buenos_Aires
WORKDIR /usr/app/${APP_DIR}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test
RUN npm prune --production
EXPOSE 1337
CMD [ "npm" , "start" ]