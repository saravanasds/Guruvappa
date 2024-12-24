import React from 'react'
import kabaddi from "../assets/kabaddi.jpg"
import football from "../assets/football.jpeg"
import hockey from "../assets/hockey.jpg"
import khokho from "../assets/khokho.jpeg"
import vollyball from "../assets/vollyballs.jpg"
import athletics from "../assets/athletics.jpg"
import basketball from "../assets/basketball.jpg"
import carrom from "../assets/carrom.jpg"
import chess from "../assets/chess.jpg"

const SportsList = () => {
    return (
        <div className='w-full min-h-screen'>
            <h2 className='w-full py-4 text-center text-2xl sm:text-3xl font-bold bg-secondary text-primary tracking-wider'>Our Sports Facilities</h2>
            <div className='w-full md:w-[90%] min-h-screen mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-8 px-2 gap-3'>

                <div className='relative w-full flex justify-start items-center'>
                    <div className='w-full rounded-lg overflow-hidden'>
                        <img src={kabaddi} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Kabaddi</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-end items-center'>

                    <div className=' w-full  rounded-lg overflow-hidden'>
                        <img src={football} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Football</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-start items-center'>

                    <div className=' w-full   rounded-lg overflow-hidden'>
                        <img src={hockey} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Hockey</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-end items-center '>

                    <div className=' w-full  rounded-lg overflow-hidden'>
                        <img src={khokho} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Kho Kho</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-start items-center'>

                    <div className=' w-full   rounded-lg overflow-hidden'>
                        <img src={vollyball} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Vollyball</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-end items-center '>

                    <div className=' w-full  rounded-lg overflow-hidden'>
                        <img src={athletics} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Athletics</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-start items-center'>

                    <div className=' w-full   rounded-lg overflow-hidden'>
                        <img src={basketball} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Basketball</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-end items-center '>

                    <div className=' w-full  rounded-lg overflow-hidden'>
                        <img src={carrom} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Carrom</h2>
                    </div>
                </div>

                <div className='relative w-full  flex justify-start items-center'>

                    <div className=' w-full  rounded-lg overflow-hidden'>
                        <img src={chess} alt="" className='w-full h-full object-cover  border-white rounded-lg' />
                    </div>
                    <div className='absolute bottom-0 left-0 bg-black w-full rounded-b-lg bg-opacity-60 p-3'>
                        <h2 className='text-2xl  text-white font-semibold'>Chess</h2>
                    </div>
                </div>


            </div>
            {/* Closing Statement */}
            <div className="w-[90%] mx-auto text-center my-6">
                <p className="text-base sm:text-xl text-gray-800">
                    At our school, sports are not just about winning—it’s about
                    fostering teamwork, discipline, and resilience. We continue to
                    strive for excellence, empowering our students to shine both on and
                    off the field.
                </p>
            </div>
        </div>
    )
}

export default SportsList