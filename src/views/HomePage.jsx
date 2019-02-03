import React from 'react'
import Logo from '../components/Logo'
import Social from '../components/Social'

export default () => (
  <div id="home">
    <Logo
      style={{
        borderRadius: '60%',
        WebkitAppearance: 'none',
        WebkitBoxShadow: '0 10px 10px rgba(0, 0, 0, 0.7)',
        MozBoxShadow: '0 10px 10px rgba(0, 0, 0, 0.7)',
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.7)'
      }}
    />
    <Social />
  </div>
)
