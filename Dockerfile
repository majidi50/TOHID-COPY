FROM node:lts-buster
RUN git clone https://https://github.com/majidi50/TOHID-COPY/root/Mr Bot_md
WORKDIR /root/mr Bot_md
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
