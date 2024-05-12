####* Base img ####
FROM node:current-alpine3.18 AS base

####* Deps ENV ####
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

####* Build ENV ####
FROM base AS build
WORKDIR /app
COPY . .
COPY ./docker/static/next.config.js .
COPY --from=deps /app/node_modules ./node_modules
RUN corepack enable pnpm && pnpm run build
RUN pnpm prune --prod

####* Build App ####
FROM nginx:alpine as app
LABEL maintainer="Jason Behnke <contact@jasonbehnke.io>"
COPY ./docker/static/default.conf /etc/nginx/conf.d/
COPY --from=build /app/out /var/www/
EXPOSE 3000