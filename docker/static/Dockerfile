####* Base img ####
FROM oven/bun:1-alpine AS base

####* Deps ENV ####
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun i --frozen-lockfile

####* Build ENV ####
FROM base AS build
WORKDIR /app
COPY . .
COPY ./docker/static/next.config.js .
COPY --from=deps /app/node_modules ./node_modules
RUN bun run build


####* Build App ####
FROM nginx:alpine as app
LABEL maintainer="Jason Behnke <contact@jasonbehnke.io>"
COPY ./docker/static/default.conf /etc/nginx/conf.d/
COPY --from=build /app/out /var/www/
EXPOSE 3000