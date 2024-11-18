import React from 'react'
import bgImage from "../assets/gh1.jpg"
import logo from "../assets/gh.png"
import { BsForwardFill } from "react-icons/bs";

const SchoolHistory = () => {
    return (
        <div className='relative w-full min-h-[70vh] '>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-secondary bg-opacity-90 "></div>
            <div className='w-full min-h-[70vh] relative flex p-10 mt-16'>
                <div className=' w-[30%] flex flex-col justify-start items-center'>
                    <div className='flex items-center gap-3'>
                        <img src={logo} alt="" className='w-12 h-12' />
                        <h2 className='text-3xl font-normal text-white tracking-wider'>Guruvappa School</h2>
                    </div>
                    <p className='text-2xl text-primary tracking-wider font-semibold'>About Our History</p>
                </div>
                <div className='w-[70%] flex flex-col justify-start items-start text-white text-2xl tracking-wide px-10'>
                    <p className='mb-8 text-[#D8E3F6] italic'>
                        GURUVAPPA HIGHER SECONDARY SCHOOL Neikkarapatti was established in 1960 and it is managed by the Pvt. Aided. It is located in Rural area. It is located in PALANI block of DINDIGUL district of Tamil Nadu.
                    </p>
                    <p className='font-light mb-6'>
                        The school consists of Grades from 6 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. Tamil is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April. The school has Private building.
                    </p>
                    <button className='text-xl flex items-center justify-center gap-3 px-6 py-2 border rounded-md hover:scale-[1.03] transform transition-all duration-500'>Read more <BsForwardFill className='mt-1' /></button>
                </div>
            </div>
        </div>
    )
}

export default SchoolHistory