import React from 'react'
import Academic from "../assets/academic.jpg"
import Sports from "../assets/sports.jpg"
import Ncc from "../assets/ncc.jpg"
import Plant from "../assets/plant.jpg"

const Services = () => {
    return (
        <div className='w-full min-h-[50vh] bg-secondary'>
            <div className='bg-secondary p-8 flex justify-between lg:justify-evenly gap-8 sm:flex-row  border-secondary' >
                <div  className='w-full flex flex-col justify-center items-center cursor-pointer ' data-aos="fade-up" data-aos-delay="100">
                    <img src={Academic} alt="" className='w-80 border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500'/>
                    <button className='w-80 text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Academics</button>
                    <p className='text-center'></p>
                </div>
                <div className='w-full flex flex-col justify-center items-center cursor-pointer' data-aos="fade-up" data-aos-delay="100">
                    <img src={Sports} alt="" className='w-80 border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500'/>
                    <button className='w-80  text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Sports</button>
                    <p className='text-center'></p>
                </div>
                <div className='w-full flex flex-col justify-center items-center cursor-pointer' data-aos="fade-up" data-aos-delay="100">
                    <img src={Ncc} alt="" className='w-80 border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500'/>
                    <button className='w-80  text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Co-Curriculam</button>
                    <p className='text-center'></p>
                </div>
                <div className='w-full flex flex-col justify-center items-center cursor-pointer' data-aos="fade-up" data-aos-delay="100">
                    <img src={Plant} alt="" className='w-80 border border-gray-400 p-1 rounded-md mb-2 hover:scale-[1.02] transform transition-all duration-500' />
                    <button className='w-80  text-lg font-bold text-center tracking-wider bg-gradient-to-t from-slate-300 to-white py-3 rounded-md hover:bg-gradient-to-t hover:from-white hover:to-slate-100 hover:text-secondary uppercase hover:scale-[1.02] transform transition-all duration-500'>Hobbies</button>
                    <p className='text-center'></p>
                </div>
            </div>
        </div>
    )
}

export default Services