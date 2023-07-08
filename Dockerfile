# Base image
FROM node:lts-alpine3.18

RUN mkdir -p /var/www/blog-fe
WORKDIR /var/www/blog-fe
COPY . ./

RUN npm install
RUN npm run build
EXPOSE 9006
ENTRYPOINT [ "npm","start","9006"]