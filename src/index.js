import React from 'react'
import * as Sentry from '@sentry/browser'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/index'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://def76a2b2849416aa29bbcb82c41ed3e@sentry.dev01d.com/2'
  })
}

ReactDOM.render(<App />, document.getElementById('app'))
