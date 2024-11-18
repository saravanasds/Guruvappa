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

        <div className='w-[90%] mx-auto bg-white h-auto text-black mb-16 '>

            <div className='bg-white py-8 flex justify-between lg:justify-evenly gap-8 sm:flex-row -translate-y-[50%] border-secondary' >
                <div ref={clientsRef} className='w-full flex flex-col justify-center items-center ' data-aos="fade-up" data-aos-delay="100">
                    <GiLaurelsTrophy className='text-5xl text-secondary mb-2' />
                    <h2 className='text-4xl md:text-4xl font-bold text-center  '>
                        {clientsInView && <CountUp end={60} duration={3} />}+
                    </h2>

                    <h3 className='text-xl font-semibold text-center tracking-wider'>Years Of History</h3>
                    <p className='text-center'></p>
                </div>
                <div ref={projectsRef} className='w-full flex flex-col justify-center items-center' data-aos="fade-up" data-aos-delay="100">
                    <GiTeacher className='text-5xl text-secondary mb-2' />
                    <h2 className='text-4xl md:text-4xl font-bold text-center  '>
                        {projectsInView && <CountUp end={70} duration={3} />}+
                    </h2>
                    <h3 className='text-xl font-semibold text-center tracking-wider'>Certified Teachers</h3>
                    <p className='text-center'></p>
                </div>
                <div ref={peopleRef} className='w-full flex flex-col justify-center items-center' data-aos="fade-up" data-aos-delay="100">
                    <FaPeopleGroup className='text-5xl text-secondary mb-2' />
                    <h2 className='text-4xl md:text-4xl font-bold text-center  '>
                        {peopleInView && <CountUp end={100} duration={3} />}K+
                    </h2>
                    <h3 className='text-xl font-semibold text-center tracking-wider'>Completed Students</h3>
                    <p className='text-center'></p>
                </div>
                <div ref={developersRef} className='w-full flex flex-col justify-center items-center' data-aos="fade-up" data-aos-delay="100">
                    <SiTicktick className='text-5xl text-secondary mb-2' />
                    <h2 className='text-4xl md:text-4xl font-bold text-center  '>
                        {developersInView && <CountUp end={100} duration={3} />}%
                    </h2>
                    <h3 className='text-xl font-semibold text-center tracking-wider'>Statisfied Parents</h3>
                    <p className='text-center'></p>
                </div>
            </div>
            <HomeAbout />
        </div>



    );
};

export default Counter;
