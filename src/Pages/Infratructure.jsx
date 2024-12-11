import React, { useEffect } from 'react'
import InfraHero from '../Infrastructure-Components/InfraHero'
import Welcome from '../Infrastructure-Components/Welcome'

const Infratructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <InfraHero />
      <Welcome />
    </div>
  )
}

export default Infratructure