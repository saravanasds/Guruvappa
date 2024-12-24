import React from 'react'
import vission from "../assets/vision.jpg"
import mission from "../assets/mission.jpg"
import { TbBrandVisualStudio } from "react-icons/tb";
import { GoGoal } from "react-icons/go";

const VissionMission = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>

            <div className='w-full min-h-[70vh] flex flex-col md:flex-row justify-center items-center'>

                <div className='w-full md:w-[50%] md:min-h-[70vh] flex justify-center items-center px-4 lg:px-10 py-6'>
                    <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                        <TbBrandVisualStudio className='hidden md:block text-5xl lg:text-7xl text-secondary ' />
                        <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary tracking-wider mb-3'>Our Vision</h3>
                        <p className='text-lg text-black tracking-wider text-justify sm:text-left'>
                            To empower every student with quality education, strong moral values, and lifelong learning skills, fostering responsible citizens who contribute positively to society and create a better future for all.
                        </p>
                    </div>
                </div>

                <div className='w-full md:w-[50%] md:min-h-[70vh]'>
                    <img src={vission} alt="" className='w-full md:min-h-[70vh] object-cover' />
                </div>

            </div>

            <div className='w-full min-h-[70vh] flex flex-col-reverse md:flex-row justify-center items-center'>

                <div className='w-full md:w-[50%] md:min-h-[70vh]'>
                    <img src={mission} alt="" className='w-full md:min-h-[70vh] object-cover'/>
                </div>

                <div className='w-full md:w-[50%] md:min-h-[70vh] flex justify-center items-center px-4 lg:px-10 py-6'>
                    <div className='w-full sm:w-[80%] mx-auto flex flex-col'>
                        <GoGoal className='hidden md:block text-5xl lg:text-7xl text-secondary ' />
                        <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary tracking-wider mb-3'>Our Mission</h3>
                        <ul className="list-disc text-lg text-black space-y-2 marker:text-prime px-6 md:px-0">
                            <li>
                                Integrate modern technology and teaching methods to enhance learning outcomes.
                            </li>
                            <li>
                                Promote values of discipline, integrity, and compassion in students.
                            </li>
                            <li>
                                Ensure inclusive education that reaches every child, regardless of background.
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default VissionMission