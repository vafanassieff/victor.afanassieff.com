FROM node:14.15.0-alpine3.12 as builder

WORKDIR /usr/src

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:stable-alpine

WORKDIR /

COPY --from=builder /usr/src/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
