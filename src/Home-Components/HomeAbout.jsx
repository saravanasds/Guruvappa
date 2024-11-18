import React from 'react'
import bgImage from "../assets/gh3.jpg"

const HomeAbout = () => {
    return (
        <div className='w-full min-h-[70vh] bg-slate-200 -mt-[95px] flex'>
            <div className='w-[50%] min-h-[70vh] '>

            </div>
            <div className='relative w-[50%] mi-h-[70vh] overflow-hidden' >
                <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}></div>
                <div className="absolute inset-0 flex items-center justify-start bg-secondary bg-opacity-80 backdrop-blur-[2px]"></div>
                <div className='w-full relative h-full text-white flex flex-col justify-center items-start px-10'>
                    <h2 className='w-full text-3xl text-left pb-2 mb-4 border-b-2 border-primary font-bold'>About School</h2>
                    <p className='text-justify font-normal tracking-wider mb-4 text-xl italic'>
                        GURUVAPPA HSS NEIKKARAPATTI was established in 1960 and it is managed by the Pvt. Aided. It is located in Rural area. It is located in PALANI block of DINDIGUL district of Tamil Nadu. The school consists of Grades from 6 to 12. The school is Co-educational and it doesn't have an attached pre-primary section.
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