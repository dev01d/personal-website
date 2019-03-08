import React from 'react'
import ReactGA from 'react-ga'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import AppRouter from './router/AppRouter'
import './styles/App.css'
import './styles/index.css'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_DSN
  })
  ReactGA.initialize(process.env.GA_CODE)
}

ReactDOM.render(<AppRouter id="page-wrap" />, document.getElementById('app'))
