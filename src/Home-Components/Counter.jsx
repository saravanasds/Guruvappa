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

            <div className='w-[95%] md:w-[90%] mx-auto bg-white min-h-screen text-black '>

                <div className='bg-white px-4 py-8 flex justify-between lg:justify-evenly gap-8 flex-col xs:flex-row xs:-translate-y-[50%] border-secondary' >
                    <div ref={clientsRef} className='w-full flex flex-col justify-center items-center '>
                        <GiLaurelsTrophy className='text-4xl sm:text-5xl text-secondary mb-2' />
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>
                            {clientsInView && <CountUp end={60} duration={3} />}+
                        </h2>
                        <h3 className='text-md md:text-xl font-semibold text-center tracking-wider'>Years Of History</h3>
                        <p className='text-center'></p>
                    </div>
                    <div ref={projectsRef} className='w-full flex flex-col justify-center items-center' >
                        <GiTeacher className='text-4xl sm:text-5xl text-secondary mb-2' />
                        <h2 className='text-2xl sm:text-3xl md:text-4xll font-bold text-center'>
                            {projectsInView && <CountUp end={70} duration={3} />}+
                        </h2>
                        <h3 className='text-md md:text-xl font-semibold text-center tracking-wider'>Certified Teachers</h3>
                        <p className='text-center'></p>
                    </div>
                    <div ref={peopleRef} className='w-full flex flex-col justify-center items-center' >
                        <FaPeopleGroup className='text-4xl sm:text-5xl text-secondary mb-2' />
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center  '>
                            {peopleInView && <CountUp end={100} duration={3} />}K+
                        </h2>
                        <h3 className='text-md md:text-xl font-semibold text-center tracking-wider'>Completed Students</h3>
                        <p className='text-center'></p>
                    </div>
                    <div ref={developersRef} className='w-full flex flex-col justify-center items-center' >
                        <SiTicktick className='text-4xl sm:text-5xl text-secondary mb-2' />
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center  '>
                            {developersInView && <CountUp end={100} duration={3} />}%
                        </h2>
                        <h3 className='text-md md:text-xl font-semibold text-center tracking-wider'>Statisfied Parents</h3>
                        <p className='text-center'></p>
                    </div>
                </div>
                <HomeAbout />
            </div>


        </>

    );
};

export default Counter;
