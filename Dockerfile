FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm update

COPY . /app

CMD ["npm", "run", "start"]