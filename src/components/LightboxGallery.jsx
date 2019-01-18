import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import lightboxImages from './res/lightbox'

export default class LightboxGallery extends Component {
  constructor() {
    super()
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  openLightbox = (event, obj) =>
    this.setState({ currentImage: obj.index, lightboxIsOpen: true })
  closeLightbox = () =>
    this.setState({ currentImage: 0, lightboxIsOpen: false })
  gotoPrevious = () =>
    this.setState({ currentImage: this.state.currentImage - 1 })
  gotoNext = () => this.setState({ currentImage: this.state.currentImage + 1 })
  render() {
    return (
      <div>
        <Gallery
          photos={lightboxImages}
          margin={4}
          onClick={this.openLightbox}
        />
        <Lightbox
          images={lightboxImages}
          backdropClosesModal={true}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          isOpen={this.state.lightboxIsOpen}
          currentImage={this.state.currentImage}
        />
      </div>
    )
  }
}
