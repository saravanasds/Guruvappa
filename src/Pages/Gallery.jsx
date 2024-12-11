import React, { useEffect } from 'react'
import GalleryHero from '../Gallery-Components/GalleryHero'
import GridGallery from '../Gallery-Components/GridGallery'
import GalleryEvent from '../Gallery-Components/GalleryEvent'

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <GalleryHero />
      {/* <GridGallery /> */}
      <GalleryEvent />
    </div>
  )
}

export default Gallery