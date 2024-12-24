import React, { useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import axios from 'axios';

const GridGallery = () => {
  const { eventId } = useParams(); // Get event ID from URL
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchEventImages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/getEventImages/${eventId}`);
        setImages(response.data.event.images); // Images directly from API
        setTitle(response.data.event.title);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event images:', error);
        setLoading(false);
      }
    };

    fetchEventImages();
  }, [eventId]);

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
    <div className='w-full min-h-screen bg-gray-100 py-4 sm:py-10'>

      <h2 className="w-[90%] mx-auto text-lg sm:text-xl flex items-center gap-2 underline underline-offset-2 tracking-wider font-semibold text-gray-900 italic">
        
        <Link to={"/gallery"} className='flex items-center'><RiArrowLeftDoubleFill className="mt-1 "/> Gallery</Link>
        <IoIosArrowForward className="mt-1" />
        <span>{title}</span>
      </h2>


      <div className="w-[90%] mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 my-4 sm:my-8">

        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="cursor-pointer w-full h-full object-cover border-2 md:border-4 border-white shadow-sm shadow-black hover:scale-[1.02] transform transition-all"
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
    </div>
  );
};

export default GridGallery;
