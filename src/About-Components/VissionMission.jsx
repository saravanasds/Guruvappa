import React from 'react'
import vission from "../assets/academic.jpg"
import mission from "../assets/sports.jpg"
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
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
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
                        <p className='text-lg text-black tracking-wider '>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VissionMission