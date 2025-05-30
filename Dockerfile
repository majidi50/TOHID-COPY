FROM node:lts-buster
RUN git clone https://github.com/Mselachui03/MSELA-CHUI-BOT/root/Mr 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐓EACH
WORKDIR /root/Mr 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐓EACH
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
