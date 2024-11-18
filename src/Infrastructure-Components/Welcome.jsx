import React from 'react'
import img from "../assets/gh.png"

const Welcome = () => {
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center my-10 px-10'>
            <div className='w-full h-[80vh] bg-white flex'>

                <div className='w-[60%] h-[80vh] flex flex-col justify-center px-10 text-gray-600'>
                    <h3 className='text-secondary text-3xl font-bold tracking-wider mb-8'>Welcome to Guruvappa School</h3>
                    <p className='mb-4 tracking-wider text-lg'>
                        The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!
                    </p>
                    <p className='tracking-wider text-lg'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.
                    </p>
                </div>

                <div className='w-[40%] h-[80vh] flex justify-center items-center'>
                    <img src={img} alt="" className='w-[80%] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Welcome