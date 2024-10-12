// @ts-check
const { withSentryConfig } = require('@sentry/nextjs')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  sentryBuildOptions: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
