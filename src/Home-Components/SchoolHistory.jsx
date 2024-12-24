import React from 'react'
import bgImage from "../assets/stage.jpg"
import logo from "../assets/g-white.png"
import { BsForwardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SchoolHistory = () => {
    return (
        <div className='relative w-full min-h-[70vh] '>
            <div className='absolute inset-0 w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="absolute inset-0 flex items-center justify-start bg-[#0e1522] bg-opacity-80 "></div>
            <div className='w-full min-h-[70vh] relative flex flex-col md:flex-row md:p-10 mt-16 gap-8 md:gap-2'>
                <div className='w-full md:w-[30%] flex flex-col justify-start items-center'>
                    <div className='flex flex-col items-center'>
                        <p className='text-2xl text-primary tracking-wider font-semibold text-center mb-4'>Our History of</p>
                        <div className='flex flex-row sm:flex-col justify-center items-center'>
                            <img src={logo} alt="" className='w-16 h-16 sm:w-60 sm:h-60 sm:mb-2' />
                            <div className='text-center'>
                                <h2 className='text-3xl font-bold text-white tracking-wider uppercase'>Guruvappa </h2>
                                <h2 className='text-sm md:text-lg text-gray-300  tracking-wider uppercase text-center'>Higher Secondary School </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[70%] flex flex-col justify-start items-start text-white text-xl lg:text-2xl tracking-wide px-4 xs:px-6 md:px-10 mb-6'>
                    <h2 className='sm:text-2xl text-center xs:text-left font-bold mb-8 text-primary'>Honoring a Legacy: The Founding of Guruvappa School</h2>
                    <p className='font-light mb-3 md:mb-6 text-base xs:text-lg lg:text-2xl text-justify'>
                        The Honorable <span className='font-bold italic tracking-wide'>S.K. Chinnachamy Nayakkar</span> founded <span className=' font-semibold italic '>Guruvappa High School</span> in his father's name. The foundation stone of this institution was laid on <span className='font-semibold '>July 1, 1960,</span> by the then <span className='font-semibold italic '>Chief Minister of Tamil Nadu, the esteemed <span className='font-semibold tracking-wide'>Karmaveerar Kamaraj</span></span>.

                        S.K. Chinnachami Nayakkar devoted his life and efforts to the progress of this school. He constructed a magnificent school building at great personal expense and ensured it was equipped with all the necessary facilities.
                    </p>
                    <div className='w-full xs:w-auto'>
                        <Link to={"/about"}>
                            <button className='w-full md:w-auto text-sm sm:text-xl flex items-center justify-center gap-3 px-6 py-2 border rounded-md hover:scale-[1.03] transform transition-all duration-500 '>Read more <BsForwardFill className='mt-1' /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolHistory