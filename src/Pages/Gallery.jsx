import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import GalleryHero from '../Gallery-Components/GalleryHero';
import GalleryEvent from '../Gallery-Components/GalleryEvent';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>Gallery - Guruvappa School</title>
        <meta name="description" content="Browse through the vibrant gallery of Guruvappa School, showcasing various events, activities, and memorable moments." />
        <meta name="keywords" content="Guruvappa School gallery, school events, Guruvappa School activities, school photos, gallery" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Gallery - Guruvappa School" />
        <meta property="og:description" content="Explore the photo gallery of Guruvappa School, featuring a collection of school events, activities, and student moments." />
        <meta property="og:image" content="https://guruvappaschool.in/gallery-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/gallery" />
        <meta property="og:type" content="website" />
      </Helmet>
      <GalleryHero />
      {/* <GridGallery /> */}
      <GalleryEvent />
    </div>
  );
}

export default Gallery;
