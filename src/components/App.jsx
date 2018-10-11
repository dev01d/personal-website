import React from 'react'
import Logo from './Logo'
import Social from './Social'
import '../styles/App'

class App extends React.Component {
  render() {
    return (
      <div id="home">
        <Logo />
        <Social />
      </div>
    )
  }
}

export default App
