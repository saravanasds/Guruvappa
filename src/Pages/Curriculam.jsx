import React, { useEffect } from 'react'
import CurriculamHero from '../Curriculam-Components/CurriculamHero'

const Curriculam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'> 
      <CurriculamHero />
    </div>
  )
}

export default Curriculam