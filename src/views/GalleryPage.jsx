import React, { Component } from 'react'
import LightboxGallery from '../components/LightboxGallery'
import Social from '../components/Social'

export default class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <LightboxGallery />
        <Social />
      </div>
    )
  }
}
