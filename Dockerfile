FROM node:14 AS frontend

COPY . .

RUN yarn install

RUN yarn run build

EXPOSE 80

CMD ["node", "./dist/main.js"]
