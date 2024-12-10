import React from 'react'
import vission from "../assets/vision.jpg"
import mission from "../assets/mission.jpg"
import { TbBrandVisualStudio } from "react-icons/tb";
import { GoGoal } from "react-icons/go";

const VissionMission = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>

            <div className='w-full min-h-[70vh] flex justify-center items-center'>

                <div className='w-[50%] min-h-[70vh] flex justify-center items-center px-10'>
                    <div className='w-[80%] mx-auto flex flex-col'>
                        <TbBrandVisualStudio className='text-7xl text-secondary mb-4' />
                        <h3 className='text-4xl font-semibold text-secondary tracking-wider mb-6'>Our Vision</h3>
                        <p className='text-lg text-black tracking-wider '>
                            To empower every student with quality education, strong moral values, and lifelong learning skills, fostering responsible citizens who contribute positively to society and create a better future for all.
                        </p>
                    </div>
                </div>

                <div className='w-[50%] min-h-[70vh]'>
                    <img src={vission} alt="" className='w-full h-[70vh] object-cover' />
                </div>

            </div>

            <div className='w-full min-h-[70vh] flex justify-center items-center'>

                <div className='w-[50%] min-h-[70vh]'>
                    <img src={mission} alt="" className='w-full h-[70vh] object-cover' />
                </div>

                <div className='w-[50%] min-h-[70vh] flex justify-center items-center px-10'>
                    <div className='w-[80%] mx-auto flex flex-col'>
                        <GoGoal className='text-7xl text-secondary mb-4' />
                        <h3 className='text-4xl font-semibold text-secondary tracking-wider mb-6'>Our Mission</h3>
                        <ul className="list-disc text-lg text-black space-y-2 marker:text-prime">
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