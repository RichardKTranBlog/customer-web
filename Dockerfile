# Base image
FROM node:lts

RUN mkdir -p /var/www/customer-web
WORKDIR /var/www/customer-web
COPY . ./

RUN npm install
RUN npm run build
EXPOSE 9006
ENTRYPOINT [ "npm","start","9006"]