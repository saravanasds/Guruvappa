import React from 'react'
import bgImage from "../assets/home-about.jpg"
import bgWay from "../assets/way.jpg"

const HomeAbout = () => {
    return (
        <div className='w-full min-h-[70vh] bg-slate-200 xs:-mt-[95px] flex flex-col md:flex-row mb-8'>
            <div className='w-full md:w-[50%] min-h-[50vh] md:min-h-[70vh] '>
                <img src={bgImage} alt="" className='w-full min-h-[50vh] md:min-h-[70vh] object-cover' />
            </div>
            <div className='relative w-full md:w-[50%] min-h-[50vh] md:min-h-[70vh] overflow-hidden' >
                <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgWay})`, backgroundSize: "cover" }}></div>
                <div className="absolute inset-0 flex items-center justify-start bg-secondary bg-opacity-70 backdrop-blur-[1px]"></div>
                <div className='w-full relative min-h-[50vh] md:min-h-[70vh] text-white flex flex-col justify-center items-start px-4 sm:px-10 py-10 md:py-0'>
                    <h2 className='w-full text-2xl lg:text-3xl text-left pb-2 mb-4 border-b-2 border-primary font-bold'>About School</h2>
                    <p className='text-justify font-normal tracking-wider mb-4 text-base lg:text-xl italic'>
                        Guruvappa Higher Secondary School was established in 1960 and is managed as a private-aided (government-supported) school. It is situated in a rural area, specifically in Neikkarapatti, within the Palani block of the Dindigul district, Tamil Nadu. The school is renowned for its commitment to providing quality education and fostering a strong foundation in moral values. It has been a cornerstone of learning for the local community, shaping the future of countless students.
                    </p>
                    <button
                        className='bg-primary text-secondary px-6 py-2 rounded-md font-bold hover:bg-secondary hover:text-primary transform transition-all duration-1000'
                    >
                        More details
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HomeAbout