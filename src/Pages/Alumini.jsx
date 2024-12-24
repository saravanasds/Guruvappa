import React, { useEffect } from 'react'
import AlumniHero from '../Alumni-Components/AlumniHero'
import AlumniDetails from '../Alumni-Components/AlumniDetails';
import AlumniMembers from '../Alumni-Components/AlumniMembers';

const Alumini = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <AlumniHero />
      <AlumniDetails />
      <AlumniMembers />
    </div>
  )
}

export default Alumini