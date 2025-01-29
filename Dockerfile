FROM node:lts-buster

WORKDIR /app

RUN git clone https://github.com/Toxic1239/Queen-RiasV3_ .

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]