import React from 'react'
import kabadi from "../assets/sports.jpg"

const SportsList = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='w-[80%] min-h-screen mx-auto flex flex-col justify-start items-center my-10'>

                <div className='w-full h-[40vh] flex justify-start items-center'>
                    <div className='w-full h-[25vh] bg-secondary rounded-lg text-center flex justify-center items-center'>
                        <h2 className='text-white text-4xl font-bold tracking-wider mr-[200px]'>Kabaddi</h2>
                    </div>
                    <div className='absolute w-[20%] h-[40vh] ml-20 rounded-lg overflow-hidden'>
                        <img src={kabadi} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className='w-full h-[40vh] flex justify-end items-center'>
                    <div className='w-full h-[25vh] bg-secondary rounded-lg flex justify-center items-center'>
                        <h2 className='text-white text-4xl font-bold tracking-wider ml-[200px]'>Kabaddi</h2>
                    </div>
                    <div className='absolute w-[20%] h-[40vh] mr-20 rounded-lg overflow-hidden'>
                        <img src={kabadi} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className='w-full h-[40vh] flex justify-start items-center'>
                    <div className='w-full h-[25vh] bg-secondary rounded-lg flex justify-center items-center'>
                        <h2 className='text-white text-4xl font-bold tracking-wider mr-[200px]'>Kabaddi</h2>
                    </div>
                    <div className='absolute w-[20%] h-[40vh] ml-20 rounded-lg overflow-hidden'>
                        <img src={kabadi} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className='w-full h-[40vh] flex justify-end items-center '>
                    <div className='w-full h-[25vh] bg-secondary rounded-lg flex justify-center items-center'>
                        <h2 className='text-white text-4xl font-bold tracking-wider ml-[200px]'>Kabaddi</h2>
                    </div>
                    <div className='absolute w-[20%] h-[40vh] mr-20 rounded-lg overflow-hidden'>
                        <img src={kabadi} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportsList