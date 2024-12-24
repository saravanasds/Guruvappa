import React from 'react'
import bgImage from "../assets/way.jpg"
import { GiBookAura } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Philosophy = () => {
    return (
        <div className='relative w-full min-h-[60vh]'>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-[#0e1522] bg-opacity-80 "></div>

            <div className="w-full sm:w-[90%] mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-8 gap-4 sm:gap-8 my-10 text-justify lg:text-left">
                <div className='h-full p-4'>
                    <GiBookAura className='text-5xl sm:text-7xl text-primary mb-4' />
                    <h3 className='text-2xl font-semibold text-primary tracking-wider mb-2 sm:mb-6'>Our Philosophy</h3>
                    <p className='text-lg text-white tracking-wider font-light '>
                        We believe that education is the foundation of personal and societal growth. Our philosophy emphasizes fostering knowledge, discipline, and responsible citizens.
                    </p>
                </div>
                <div className='h-full p-4'>
                    <MdOutlineVerifiedUser className='text-5xl sm:text-7xl text-primary mb-4' />
                    <h3 className='text-2xl font-semibold text-primary tracking-wider mb-2 sm:mb-6'>Guruvappa's Principle</h3>
                    <p className='text-lg text-white tracking-wider font-light '>
                        Our guiding principle is "Education for Empowerment," aiming to provide every student with the tools to achieve excellence and contribute positively to society.
                    </p>
                </div>
                <div className='h-full p-4'>
                    <GiTimeTrap className='text-5xl sm:text-7xl text-primary mb-4' />
                    <h3 className='text-2xl font-semibold text-primary tracking-wider mb-2 sm:mb-6'>Key of Success</h3>
                    <p className='text-lg text-white tracking-wider font-light '>
                        The key to our success lies in a holistic approach—combining quality teaching, state-of-the-art facilities, and unwavering dedication to nurturing students' potential.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Philosophy