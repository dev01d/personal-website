import React from 'react'
import * as Sentry from '@sentry/browser'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import './styles/App.css'
import './styles/index.css'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_DSN
  })
}

ReactDOM.render(<AppRouter id="page-wrap" />, document.getElementById('app'))
