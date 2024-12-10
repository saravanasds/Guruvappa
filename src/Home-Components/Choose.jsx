import React from 'react'
import img from "../assets/solo.jpg"

const Choose = () => {
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='w-[90%] h-[60vh] bg-white flex'>
                <div className='w-[40%] h-[60vh] border'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-[60%] h-[60vh] flex flex-col justify-center px-10 text-gray-600'>
                    <h3 className='text-secondary text-3xl font-bold tracking-wider mb-8'>Why Choose Guruvappa?</h3>
                    <p className='mb-4 tracking-wider text-lg'>
                        The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!
                    </p>
                    <p className='tracking-wider text-lg'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Choose