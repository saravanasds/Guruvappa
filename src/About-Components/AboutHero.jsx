import React from 'react'
import bgImage from "../assets/arch.jpg"

const AboutHero = () => {
    return (
        <div className='relative w-full min-h-[60vh] flex justify-start items-end'>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className='relative my-6 mx-20'>
                <h2 className='text-white text-4xl font-bold tracking-wider mb-4 ' style={{ textShadow: "4px 4px 0px black" }}>About Us </h2>
            </div>
        </div>
    )
}

export default AboutHero