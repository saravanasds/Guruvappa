import React from 'react'
import GalleryHero from '../Gallery-Components/GalleryHero'
// import GridGallery from '../Gallery-Components/GridGallery'

const Gallery = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <GalleryHero />
      {/* <GridGallery /> */}
    </div>
  )
}

export default Gallery