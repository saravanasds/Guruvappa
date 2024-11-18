import React, { useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const GridGallery = () => {
  const images = [
    'https://via.placeholder.com/800x400',
    'https://via.placeholder.com/801x401',
    'https://via.placeholder.com/802x402',
    'https://via.placeholder.com/802x403',
    'https://via.placeholder.com/802x404',
    'https://via.placeholder.com/802x405',
    'https://via.placeholder.com/802x406',
    'https://via.placeholder.com/802x407',
    'https://via.placeholder.com/802x408',
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Add keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isLightboxOpen) {
        if (event.key === 'ArrowLeft') {
          showPrevious();
        } else if (event.key === 'ArrowRight') {
          showNext();
        } else if (event.key === 'Escape') {
          closeLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]); // Dependency on `isLightboxOpen`

  return (
    <div className="w-[80%] grid grid-cols-3 gap-2 my-10">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="cursor-pointer w-full"
          onClick={() => openLightbox(index)}
        />
      ))}

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute -top-10 -right-10 text-white p-1 px-3 text-2xl"
            >
              ✕
            </button>
            <button
              onClick={showPrevious}
              className="absolute -left-9 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
              <MdArrowBackIos />
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={showNext}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
