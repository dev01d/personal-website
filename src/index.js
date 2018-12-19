import React from 'react'
import * as Sentry from '@sentry/browser'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/index'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_KEY
  })
}

ReactDOM.render(<App />, document.getElementById('app'))
