import React from 'react'
import stage from "../assets/stage.jpg"
import Sports from "../assets/sport.jpg"
import Curriculum from "../assets/students.jpg"
import cover from "../assets/cover.jpg"
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className='w-full min-h-[50vh] bg-secondary '>
            <div className='w-full  bg-secondary p-4 sm:p-8 flex flex-wrap justify-center gap-4 sm:gap-8 border-secondary' >
                <div className='flex flex-col justify-center items-center cursor-pointer ' >
                    <Link to={"/infrastructure"} ><img src={stage} alt="guruvappa school infrastructure" className='w-[100vw] h-72 sm:w-80 sm:h-80 object-cover border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500' /></Link>
                    <Link to={"/infrastructure"} className='w-full  sm:w-80 text-sm sm:text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-2 sm:py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Infrastructure</Link>
                   
                </div>   
                <div className='flex flex-col justify-center items-center cursor-pointer' >
                    <Link to={"/curriculam"} ><img src={Curriculum} alt="guruvappa school curriculum" className='w-[100vw] h-72 sm:w-80 sm:h-80 border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500 object-cover' /></Link>
                    <Link to={"/curriculam"} className='w-full  sm:w-80 text-sm sm:text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-2 sm:py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Curriculum</Link>
                    
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' >
                    <Link to={"/Sports"} ><img src={Sports} alt="guruvappa school sports" className='w-[100vw] h-72 sm:w-80 sm:h-80 border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500 object-cover' /></Link>
                    <Link to={"/Sports"} className='w-full sm:w-80 text-sm sm:text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-2 sm:py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Sports</Link>
                    
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' >
                    <Link to={"/gallery"} ><img src={cover} alt="guruvappa school gallery" className='w-[100vw] h-72  sm:w-80 sm:h-80 border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500 object-cover' /></Link>
                    <Link to={"/gallery"} className='w-full  sm:w-80  text-sm sm:text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-2 sm:py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Gallery</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Services