import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import App from '../components/App'
import About from '../components/AboutPage'
import Gallery from '../components/GalleryPage'
import '../styles/Sidebar.css'

export default class AppRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  render() {
    return (
      <BrowserRouter>
        <div id="outer-container">
          <Menu
            width={140}
            isOpen={false}
            pageWrapId={'page-wrap'}
            outerContainerId={'App'}
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <Link className="menu-item" to="/">
              <a onClick={() => this.closeMenu()}>Home</a>
            </Link>
            <Link className="menu-item" to="/about">
              <a onClick={() => this.closeMenu()}>About</a>
            </Link>
            <Link className="menu-item" to="/gallery">
              <a onClick={() => this.closeMenu()}>Gallery</a>
            </Link>
          </Menu>
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
