import React from 'react'
import ReactGA from 'react-ga'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import Rollbar from "rollbar"
import 'normalize.css'
import './styles/App.css'
import './styles/index.css'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.GA_CODE, {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  })
  Rollbar.init({
    accessToken: process.env.ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true
  });
}

ReactDOM.render(<AppRouter id="page-wrap" />, document.getElementById('app'))
