import React from 'react'
import bgImage from "../assets/video.jpg"

const AboutHero = () => {
    return (
        <div className='relative w-full min-h-[60vh] flex justify-start items-end'>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className='relative my-20 mx-20'>
                <h2 className='text-white text-5xl font-semibold tracking-wider mb-4'>About Us </h2>
                <p className='text-2xl text-primary font-semibold tracking-wider'>Know Us Better</p>
            </div>
        </div>
    )
}

export default AboutHero