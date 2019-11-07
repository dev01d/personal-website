import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import lightboxImages from './res/lightbox'
import galleryImages from './res/gallery'

export default function LightboxGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])
  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const style = {
    blanket: base => ({
      ...base,
      zIndex: 1100
    }),
    positioner: base => ({
      ...base,
      zIndex: 1100
    }),
    dialog: (base, state) => ({
      ...base,
      zIndex: 1100,
      maxWidth: state.isFullscreen ? 1280 : 840
    }),
    view: base => ({
      ...base,
      overflow: 'hidden'
    })
  }

  return (
    <div>
      <Gallery
        photos={galleryImages}
        margin={4}
        direction={'column'}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} styles={style}>
            <Carousel
              closeOnBackdropClick={true}
              currentIndex={currentImage}
              views={lightboxImages.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
