import React from 'react'
import bgImage from "../assets/stage.jpg"
import logo from "../assets/g-white.png"
import { BsForwardFill } from "react-icons/bs";

const SchoolHistory = () => {
    return (
        <div className='relative w-full min-h-[70vh] '>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-[#0e1522] bg-opacity-80 "></div>
            <div className='w-full min-h-[70vh] relative flex flex-col md:flex-row md:p-10 mt-16 gap-8 md:gap-2'>
                <div className='w-full md:w-[30%] flex flex-col justify-start items-center'>
                    <div className='flex flex-col items-center'>
                        <p className='text-xl text-primary tracking-wider font-semibold text-center mb-4'>About Our History of</p>
                        <img src={logo} alt="" className='w-60 h-60 mb-2' />
                        <h2 className='text-3xl font-bold text-white tracking-wider uppercase'>Guruvappa </h2>
                        <h2 className='text-sm md:text-lg text-gray-300  tracking-wider uppercase text-center'>Higher Secondary School </h2>
                    </div>
                </div>
                <div className='w-full md:w-[70%] flex flex-col justify-start items-start text-white text-xl lg:text-2xl tracking-wide px-6 md:px-10 mb-6'>
                    <p className='mb-8 text-[#D8E3F6] italic text-justify'>
                        Guruvappa Higher Secondary School Neikkarapatti was established in 1960 and it is managed by the Pvt. Aided. It is located in Rural area. It is located in PALANI block of DINDIGUL district of Tamil Nadu.
                    </p>
                    <p className='font-light mb-3 md:mb-6 text-lg lg:text-2xl text-justify'>
                        The school consists of Grades from 6 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. Tamil is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April. The school has Private building.
                    </p>
                    <button className='w-full md:w-auto text-xl flex items-center justify-center gap-3 px-6 py-2 border rounded-md hover:scale-[1.03] transform transition-all duration-500 '>Read more <BsForwardFill className='mt-1' /></button>
                </div>
            </div>
        </div>
    )
}

export default SchoolHistory