import React, { useState } from 'react';
import 'react-awesome-lightbox/build/style.css'; // Import the lightbox styles
import Lightbox from 'react-awesome-lightbox';

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
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="w-[80%] grid grid-cols-3 gap-2 my-10">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="cursor-pointer w-full"
          onClick={() => {
            setCurrentImageIndex(index);
            setIsOpen(true);
          }}
        />
      ))}
      {isOpen && (
        <Lightbox
          images={images.map((src) => ({ url: src }))}
          startIndex={currentImageIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default GridGallery;
