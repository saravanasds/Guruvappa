import React, { useEffect } from 'react'
import SportsHero from '../Sports-Components/SportsHero'
import SportsList from '../Sports-Components/SportsList'
import SportsIntro from '../Sports-Components/SportsIntro';

const Sports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative w-full min-h-[60vh] flex flex-col justify-start items-end '>
      <SportsHero />
      <SportsIntro />
      <SportsList />
    </div>
  )
}

export default Sports