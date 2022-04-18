FROM node:14.16.0-alpine3.13

WORKDIR /app
RUN npm install -g nodemon
COPY package.json ./
RUN npm install
COPY . /app
EXPOSE 3000 
CMD ["nodemon","server.js"]