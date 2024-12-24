import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import HomeAbout from './HomeAbout';

const Counter = () => {
    const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true });
    const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
    const { ref: peopleRef, inView: peopleInView } = useInView({ triggerOnce: true });
    const { ref: developersRef, inView: developersInView } = useInView({ triggerOnce: true });

    return (
        <>

            <div className='w-[95%] md:w-[90%] mx-auto bg-white text-black '>

                <div className='bg-white px-4 py-8 flex justify-between lg:justify-evenly gap-2 sm:gap-8 flex-col sm:flex-row sm:-translate-y-[50%] border-secondary ' >
                    <div ref={clientsRef} className='w-full flex flex-row sm:flex-col justify-center items-center gap-2 xs:gap-4 sm:gap-0 p-4 sm:pb-0 shadow-sm sm:shadow-none shadow-gray-500 rounded'>
                        <div className=''>
                            <GiLaurelsTrophy className='text-5xl text-secondary sm:mb-2 ' />
                        </div>
                        <div className=''>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold sm:text-center '>
                                {clientsInView && <CountUp end={60} duration={3} />}+
                            </h2>
                            <h3 className='text-md md:text-xl font-semibold text-center tracking-wider -mt-1 sm:mt-0'>Years Of History</h3>
                            <p className='text-center'></p>
                        </div>
                    </div>
                    <div ref={projectsRef} className='w-full flex flex-row sm:flex-col justify-center items-center gap-2 xs:gap-4 sm:gap-0 p-4 sm:pb-0 shadow-sm sm:shadow-none shadow-gray-500 rounded' >
                        <div>
                            <GiTeacher className='text-5xl text-secondary mb-2' />
                        </div>
                        <div>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold sm:text-center'>
                                {projectsInView && <CountUp end={95} duration={3} />}+
                            </h2>
                            <h3 className='text-md md:text-xl font-semibold text-center tracking-wider -mt-1 sm:mt-0'>Certified Teachers</h3>
                            <p className='text-center'></p>
                        </div>
                    </div>
                    <div ref={peopleRef} className='w-full flex flex-row sm:flex-col justify-center items-center gap-2 xs:gap-4 sm:gap-0 p-4 sm:pb-0 shadow-sm sm:shadow-none shadow-gray-500 rounded' >
                        <div>
                            <FaPeopleGroup className='text-5xl text-secondary mb-2' />
                        </div>
                        <div>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold sm:text-center'>
                                {peopleInView && <CountUp end={60} duration={3} />}+
                            </h2>
                            <h3 className='text-md md:text-xl font-semibold text-center tracking-wider -mt-1 sm:mt-0'>Completed Students</h3>
                            <p className='text-center'></p>
                        </div>
                    </div>
                    <div ref={developersRef} className='hidden  w-full sm:flex flex-row sm:flex-col justify-center items-center gap-2 xs:gap-4 sm:gap-0 p-4 sm:pb-0 shadow-sm sm:shadow-none shadow-gray-500 rounded' >
                        <div>
                            <SiTicktick className='text-5xl text-secondary mb-2' />
                        </div>
                        <div>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold sm:text-center'>
                                {developersInView && <CountUp end={100} duration={3} />}%
                            </h2>
                            <h3 className='text-md md:text-xl font-semibold text-center tracking-wider -mt-1 sm:mt-0'>Satisfied Parents</h3>
                            <p className='text-center'></p>
                        </div>
                    </div>
                </div>
                <HomeAbout />
            </div>


        </>

    );
};

export default Counter;
