import React, { useEffect } from 'react'
import SubjectHero from '../Subjects-Components/SubjectHero'

const Subjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <SubjectHero />
    </div>
  )
}

export default Subjects