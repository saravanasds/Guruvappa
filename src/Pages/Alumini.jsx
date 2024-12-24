import React, { useEffect } from 'react'
import AlumniHero from '../Alumni-Components/AlumniHero'
import AlumniDetails from '../Alumni-Components/AlumniDetails';

const Alumini = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <AlumniHero />
      <AlumniDetails />
    </div>
  )
}

export default Alumini