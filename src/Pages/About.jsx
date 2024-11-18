import React, { useEffect } from 'react'
import AboutHero from '../About-Components/AboutHero';
import History from '../About-Components/History';
import Philosophy from '../About-Components/Philosophy';
import VissionMission from '../About-Components/VissionMission';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <AboutHero />
      <History />
      <Philosophy />
      <VissionMission />
    </div>
  )
}

export default About