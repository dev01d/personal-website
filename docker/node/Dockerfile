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
COPY ./docker/node/next.config.js ./
COPY --from=deps /app/node_modules ./node_modules
RUN corepack enable pnpm && pnpm run build
RUN pnpm prune --prod

####* Build App ####
FROM base AS app
LABEL maintainer="Jason Behnke <contact@jasonbehnke.io>"
WORKDIR /app
ENV PORT 3000
ENV NODE_ENV production
ENV TINI_VERSION v0.19.0
RUN apk add --no-cache tini \
    && apk cache clean
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --chown=nextjs:nodejs --from=build /app/public ./public
COPY --chown=nextjs:nodejs --from=build /app/.next/standalone ./
COPY --chown=nextjs:nodejs --from=build /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
HEALTHCHECK --interval=12s --timeout=12s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/api/status || exit 1
CMD HOSTNAME="0.0.0.0" node server.js