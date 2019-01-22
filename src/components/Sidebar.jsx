import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from 'react-burger-menu/lib/menus/slide'
import '../styles/Sidebar.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange = state => this.setState({ menuOpen: state.isOpen })
  closeMenu = () => this.setState({ menuOpen: false })
  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })
  render() {
    return (
      <Menu
        width={160}
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
    )
  }
}
