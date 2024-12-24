import React, { useEffect } from 'react'
import CurriculamHero from '../Curriculam-Components/CurriculamHero'
import CurricularActivities from '../Curriculam-Components/CurricularActivities';
import Academic from '../Curriculam-Components/Academic';

const Curriculam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <CurriculamHero />
      <Academic />
      <CurricularActivities />
    </div>
  )
}

export default Curriculam