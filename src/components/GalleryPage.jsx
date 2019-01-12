import React, { Component } from 'react'
import LightboxGallery from './LightboxGallery'
import Social from './Social'

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
