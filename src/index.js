import React from 'react'
import ReactGA from 'react-ga'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import * as Sentry from '@sentry/browser'
import 'normalize.css'
import './styles/App.css'
import './styles/index.css'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.GA_CODE, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  })
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  })
}
// Test Sentry error in prod
Sentry.captureException(new Error('This is my fake error message'))

ReactDOM.render(<AppRouter id="page-wrap" />, document.getElementById('app'))
