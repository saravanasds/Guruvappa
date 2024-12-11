import React from 'react'
import img from "../assets/solo.jpg"

const Choose = () => {
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='w-[90%] h-[60vh] bg-white flex'>
                <div className='w-[40%] h-[60vh] border'>
                    <img src={img} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-[60%] h-[60vh] flex flex-col justify-center px-10 text-gray-600'>
                    <h3 className='text-secondary text-3xl font-bold tracking-wider mb-8'>Why Choose Guruvappa?</h3>
                    <p className='mb-4 tracking-wider text-xl'>
                        Guruvappa School is where academic excellence meets holistic development, offering state-of-the-art facilities, dedicated faculty, a values-driven curriculum, and diverse extracurricular opportunities in a safe and inclusive environment—empowering students to thrive and succeed in every aspect of life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Choose