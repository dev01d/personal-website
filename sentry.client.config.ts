import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: '@sentry_dsn',
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
})
