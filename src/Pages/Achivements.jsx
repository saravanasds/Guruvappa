import React, { useEffect } from 'react'
import AchiveHero from '../Achivements-Components/AchiveHero'

const Achivements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <AchiveHero />
    </div>
  )
}

export default Achivements