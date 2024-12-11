import React, { useEffect } from 'react'
import AdmissionHero from '../Admission-Components/AdmissionHero'

const Admission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <AdmissionHero />
    </div>
  )
}

export default Admission