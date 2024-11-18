import React from 'react'
import SportsHero from '../Sports-Components/SportsHero'
import SportsList from '../Sports-Components/SportsList'

const Sports = () => {
  return (
    <div className='relative w-full min-h-[60vh] flex flex-col justify-start items-end'>
      <SportsHero />
      <SportsList />
    </div>
  )
}

export default Sports