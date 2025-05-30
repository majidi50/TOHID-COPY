FROM node:lts-buster
RUN git clone https://github.com/Mselachui03/MSELA-CHUI-BOT/root/Mr Mselachui
WORKDIR /root/Mr Mselachui 
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
