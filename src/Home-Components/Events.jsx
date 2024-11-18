import React from 'react'
import bgImage from "../assets/ncc.jpg"
import { FaLink } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

const Events = () => {
    return (
        <div className='w-full min-h-[80vh]'>
            <div className='w-full flex min-h-[80vh]'>

                <div className='relative w-[35%] min-h-[80vh] bg-secondary flex justify-center items-center'>
                    <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                    <div className="absolute inset-0 flex items-center justify-start bg-secondary bg-opacity-90 "></div>
                    <div className='relative w-[80%] mx-auto flex flex-col p-10 text-primary'>
                        <h3 className='text-white text-2xl font-semibold mb-8 flex items-center gap-4'><FaLink />Quick Links</h3>
                        <p className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold'>Blog</p>
                        <p className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold'>Sports</p>
                        <p className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold'>Achivements</p>
                        <p className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold'>Alumni</p>
                        <p className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold'>Gallery</p>
                        <p className='mb-4 border-b border-gray-500 pb-3 tracking-wider font-bold'>Calender</p>
                    </div>
                </div>
                <div className='w-[35%] min-h-[80vh] p-16 '>

                    <div className='w-full flex justify-start items-center gap-6'>
                        <h2 className='text-2xl font-bold tracking-wider text-secondary uppercase'>Upcoming Events</h2>
                        <div className='w-[30%] h-[2px] bg-gray-300 rounded-md mt-2'></div>
                    </div>

                    <div className='w-full h-[80%] mt-8 flex gap-2 py-2'>

                        <div className='w-full h-full'>
                            <div className='w-full flex items-center gap-6 mb-6'>
                                <div className='flex flex-col items-center font-bold border-b-4 border-prime pb-2'>
                                    <span className='text-3xl font-extrabold text-prime'>17</span>
                                    <span className='text-lg'>DEC</span>
                                </div>
                                <div className=''>
                                    <p className='text-xl font-bold mb-2'>Professor Albert joint research on mobile money in Tanzania</p>
                                    <p className='font-semibold flex items-center gap-2 text-prime'><MdOutlineAccessTime /> 1:00 PM - 2:00 PM</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-6 mb-6'>
                                <div className='flex flex-col items-center font-bold border-b-4 border-prime pb-2'>
                                    <span className='text-3xl font-extrabold text-prime'>17</span>
                                    <span className='text-lg'>DEC</span>
                                </div>
                                <div className=''>
                                    <p className='text-xl font-bold mb-2'>Professor Albert joint research on mobile money in Tanzania</p>
                                    <p className='font-semibold flex items-center gap-2 text-prime'><MdOutlineAccessTime /> 1:00 PM - 2:00 PM</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-6 mb-6'>
                                <div className='flex flex-col items-center font-bold border-b-4 border-prime pb-2'>
                                    <span className='text-3xl font-extrabold text-prime'>17</span>
                                    <span className='text-lg'>DEC</span>
                                </div>
                                <div className=''>
                                    <p className='text-xl font-bold mb-2'>Professor Albert joint research on mobile money in Tanzania</p>
                                    <p className='font-semibold flex items-center gap-2 text-prime'><MdOutlineAccessTime /> 1:00 PM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-[30%] min-h-[80vh] bg-white flex flex-col justify-center items-start pr-8 '>
                    <img src={bgImage} alt="" className='w-[90%] h-80 object-cover' />
                    <p className='w-[90%] py-3 font-semibold text-gray-400'>June 6, 2024/ Admission, Student</p>
                    <p className='w-[90%] text-xl font-semibold'>Professor Albert joint research on mobile money in Tanzania</p>
                </div>

            </div>
        </div>
    )
}

export default Events