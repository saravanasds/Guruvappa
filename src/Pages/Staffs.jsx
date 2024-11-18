import React from 'react'
import StaffHero from '../Staffs-Components/StaffHero'
import StaffDetails from '../Staffs-Components/StaffDetails'

const Staffs = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <StaffHero />
      <StaffDetails />
    </div>
  )
}

export default Staffs