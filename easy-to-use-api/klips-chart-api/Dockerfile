FROM node:18-alpine

WORKDIR /usr/build

COPY ./ ./

RUN npm ci
RUN npm run build

FROM nginx:alpine-slim

COPY --from=0 /usr/build/dist/ /usr/share/nginx/html/klips-chart-api
