import React from 'react'
import bgImage from "../assets/staff.jpg"
import { TiArrowForwardOutline } from "react-icons/ti";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const StaffHero = () => {
    return (
        <div className='relative w-full min-h-[40vh] sm:min-h-[60vh] flex justify-start items-end'>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className='relative my-4 sm:my-6 mx-4 sm:mx-20'>
                <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider flex gap-3' style={{ textShadow: "4px 4px 0px black" }}><TiArrowForwardOutline className='mt-2' />Staff Details <RiArrowDownDoubleLine className='mt-2' /></h2>
            </div>
        </div>
    )
}

export default StaffHero