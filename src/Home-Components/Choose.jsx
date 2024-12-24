import React from 'react'
import img from "../assets/solo.jpg"

const Choose = () => {
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center bg-slate-200 py-8 p-2 sm:p-4 md:p-10'>
            <div className='w-full md:min-h-[60vh] bg-white flex flex-col lg:flex-row '>
                <div className='w-full lg:w-[40%] md:min-h-[60vh] border'>
                    <img src={img} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-full lg:w-[60%] md:min-h-[60vh] flex flex-col justify-center p-4 sm:p-6 md:p-10 text-gray-600'>
                    <h3 className='text-secondary text-xl xs:text-2xl sm:text-3xl font-bold tracking-wider mb-4 md:mb-8'>Why Choose Guruvappa?</h3>
                    <p className='mb-4 tracking-wider text-lg sm:text-xl text-justify'>
                        Guruvappa School is where academic excellence meets holistic development, offering state-of-the-art facilities, dedicated faculty, a values-driven curriculum, and diverse extracurricular opportunities in a safe and inclusive environment—empowering students to thrive and succeed in every aspect of life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Choose