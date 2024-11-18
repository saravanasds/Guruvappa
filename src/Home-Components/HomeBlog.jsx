import React from 'react'
import bgImage from "../assets/gh3.jpg"
import blog1 from "../assets/academic.jpg"
import blog2 from "../assets/sports.jpg"
import blog3 from "../assets/plant.jpg"
import { FaLink } from "react-icons/fa";

const HomeBlog = () => {
    return (
        <div className='w-full min-h-[100vh]'>
            <div className='w-full flex min-h-[80vh]'>
                <div className='w-[65%] min-h-[80vh] p-16 px-20'>

                    <div className='w-full flex justify-start items-center gap-6'>
                        <h2 className='text-2xl font-bold tracking-wider text-secondary uppercase'>Blogs & Updates</h2>
                        <div className='w-[60%] h-[2px] bg-gray-300 rounded-md mt-2'></div>
                    </div>
                    <span className='text-base text-prime'>Read all blogs</span>


                    <div className='w-full h-[80%] mt-8 flex gap-2 py-2'>
                        <div className='w-[50%] h-full bg-white'>
                            <img src={bgImage} alt="" className='w-[90%] h-60 object-cover' />
                            <p className='py-3 font-semibold text-gray-400'>June 6, 2024/ Admission, Student</p>
                            <p className='text-xl font-semibold'>Professor Albert joint research on mobile money in Tanzania</p>
                        </div>
                        <div className='w-[50%] h-full '>
                            <div className='w-full flex items-center gap-6 mb-6'>
                                <div className='w-[20%]'>
                                    <img src={blog1} alt="" className='w-[100%] h-20 object-cover' />
                                </div>
                                <div className='w-[80%]'>
                                    <p className='font-semibold text-gray-400'>June 6, 2024/ Admission, Student</p>
                                    <p className='text-base font-bold'>Professor Albert joint research on mobile money in Tanzania</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-6 mb-6'>
                                <div className='w-[20%]'>
                                    <img src={blog2} alt="" className='w-[100%] h-20 object-cover' />
                                </div>
                                <div className='w-[80%]'>
                                    <p className='font-semibold text-gray-400'>June 6, 2024/ Admission, Student</p>
                                    <p className='text-base font-bold'>Professor Albert joint research on mobile money in Tanzania</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-6 mb-6'>
                                <div className='w-[20%]'>
                                    <img src={blog3} alt="" className='w-[100%] h-20 object-cover' />
                                </div>
                                <div className='w-[80%]'>
                                    <p className='font-semibold text-gray-400'>June 6, 2024/ Admission, Student</p>
                                    <p className='text-base font-bold'>Professor Albert joint research on mobile money in Tanzania</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
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
            </div>

            <div className='w-full h-36 bg-gray-200 flex'>
                <div className='w-[65%] h-full'>

                </div>
                <div className='w-[35%] h-full bg-prime'>

                </div>
            </div>
        </div>
    )
}

export default HomeBlog