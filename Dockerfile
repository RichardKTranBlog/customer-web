# Base image
FROM node:lts

RUN mkdir -p /var/www/blog-fe
WORKDIR /var/www/blog-fe
COPY . ./
# Test network connectivity
RUN apt-get update && apt-get install -y curl && \
    curl -sSf https://google.com > /dev/null || (echo "Error: Failed to connect to the Internet"; exit 1)
RUN npm install
RUN npm run build
EXPOSE 9006
ENTRYPOINT [ "npm","start","9006"]