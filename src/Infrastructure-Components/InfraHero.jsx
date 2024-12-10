import React from 'react'
import bgImage from "../assets/infra1-cut.jpg"

const InfraHero = () => {
    return (
        <div className='relative w-full min-h-[60vh] flex justify-start items-end'>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className='relative my-6 mx-20'>
                <h2 className='text-white text-4xl font-semibold tracking-wider mb-4'>Campus Tour</h2>
            </div>
        </div>
    )
}

export default InfraHero