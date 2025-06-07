####* Base img ####
FROM oven/bun:1-alpine AS base

####* Deps ENV ####
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

####* Build ENV ####
FROM base AS build
WORKDIR /app
COPY . .
COPY ./docker/node/next.config.js ./
COPY --from=deps /app/node_modules ./node_modules
RUN bun run build


####* Build App ####
FROM base AS app
LABEL maintainer="Jason Behnke <contact@jasonbehnke.io>"
WORKDIR /app
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production
ENV TINI_VERSION=v0.19.0
RUN apk add --no-cache tini \
    && apk cache clean
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:bun .next
COPY --chown=nextjs:bun --from=build /app/public ./public
COPY --chown=nextjs:bun --from=build /app/.next/standalone ./
COPY --chown=nextjs:bun --from=build /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
HEALTHCHECK --interval=12s --timeout=12s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/api/status || exit 1
CMD ["bun", "server.js"]