####* Build ENV ####
FROM node:lts-alpine3.11 as build
WORKDIR /app
COPY . .
COPY ./docker/next.config.js .
ARG NEXT_PUBLIC_BUILD_ENV=static
RUN yarn install
RUN yarn docker:export

####* Build App ####
FROM nginx:alpine as app
LABEL maintainer="Jason Behnke <contact@jasonbehnke.io>"
COPY ./docker/default.conf /etc/nginx/conf.d/
COPY --from=build /app/out /usr/share/nginx/html/
EXPOSE 80