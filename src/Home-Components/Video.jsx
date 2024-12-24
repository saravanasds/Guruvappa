import React, { useState } from 'react';
import thumbnail from "../assets/guruvappa.jpg"
import { HiOutlinePlayCircle } from "react-icons/hi2";

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='relative w-full h-[70vh] sm:h-[90vh] flex items-center justify-center'>

            {!isPlaying ? (
                <div
                    className='relative w-full h-full cursor-pointer'
                    onClick={() => setIsPlaying(true)}
                >
                    <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-70 z-10"></div>
                    {/* Custom Thumbnail Image */}
                    <img
                        src={thumbnail}
                        alt="Custom Thumbnail"
                        className='w-full h-full object-cover'
                    />
                    {/* Play Button (Optional) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-2">
                        <button className="bg-black bg-opacity-50 text-white rounded-full">
                            <HiOutlinePlayCircle className='text-7xl text-gray-400'/>
                        </button>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white tracking-wider mb-8 '>Video Tour in Guruvappa </h2>
                        <p className='w-[90%] md:w-[60%] mx-auto text-center text-base sm:text-xl sm:font-semibold tracking-wider text-slate-300'>Take a tour in Guruvappa and you will find the best school in the palani. The video will take you to every places in this school.</p>
                    </div>
                </div>
            ) : (
                <iframe
                    className='w-full h-full'
                    src="https://www.youtube.com/embed/n8qgFvBTzns?si=ucSrDCQGH9sJ1JNy&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}

export default Video;
