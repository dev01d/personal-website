import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import App from '../views/HomePage'
import About from '../views/AboutPage'
import Gallery from '../views/GalleryPage'
import '../styles/Sidebar.css'

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="outer-container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
