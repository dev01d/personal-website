####* Build ENV ####
FROM node:lts-alpine3.11 as build
WORKDIR /app
COPY package.json package.json
COPY .parcelrc .parcelrc
COPY public public
COPY server server
COPY src src
COPY yarn.lock yarn.lock
RUN yarn install && yarn build

####* Build App ####
FROM nginx:alpine as app
LABEL maintainer="Jason Behnke <contact@jasonbehnke.io>"
COPY ./docker/default.conf /etc/nginx/conf.d/
COPY --from=build /app/dist /usr/share/nginx/html/
