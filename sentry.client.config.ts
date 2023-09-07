import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration goes in here, for example:
      sessionSampleRate: 1.0,
      errorSampleRate: 1.0,
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
})
