import React from 'react'
import bgImage from "../assets/gh3.jpg"
import { GiBookAura } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Philosophy = () => {
    return (
        <div className='relative w-full min-h-[60vh]'>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-secondary bg-opacity-90 "></div>

            <div className="w-[90%] mx-auto relative grid grid-cols-3 p-8 gap-8 my-10">
                <div className='h-full p-4'>
                    <GiBookAura className='text-7xl text-prime mb-4' />
                    <h3 className='text-2xl font-semibold text-prime tracking-wider mb-6'>Our Philosophy</h3>
                    <p className='text-lg text-white tracking-wider font-light '>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                    </p>
                </div>
                <div className='h-full p-4'>
                    <MdOutlineVerifiedUser className='text-7xl text-prime mb-4' />
                    <h3 className='text-2xl font-semibold text-prime tracking-wider mb-6'>Guruvappa's Principle</h3>
                    <p className='text-lg text-white tracking-wider font-light '>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                    </p>
                </div>
                <div className='h-full p-4'>
                    <GiTimeTrap className='text-7xl text-prime mb-4' />
                    <h3 className='text-2xl font-semibold text-prime tracking-wider mb-6'>Key of Success</h3>
                    <p className='text-lg text-white tracking-wider font-light '>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Philosophy