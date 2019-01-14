import React, { Component } from 'react'
import Logo from '../components/Logo'
import Social from '../components/Social'
import '../styles/App'

export default class App extends Component {
  render() {
    return (
      <div id="home">
        <Logo />
        <Social />
      </div>
    )
  }
}
