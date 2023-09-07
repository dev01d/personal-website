import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  replaysSessionSampleRate: 1,
  replaysOnErrorSampleRate: 1,
})
