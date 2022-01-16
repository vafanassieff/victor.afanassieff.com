FROM node:16.13.2-alpine3.14 as builder

WORKDIR /usr/src

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm config set store-dir .pnpm-store && \
    pnpm install --frozen-lockfile --ignore-scripts

COPY . .

RUN pnpm build

FROM nginx:stable-alpine

COPY --from=builder /usr/src/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
