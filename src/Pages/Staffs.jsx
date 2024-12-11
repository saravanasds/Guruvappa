import React, { useEffect } from 'react'
import StaffHero from '../Staffs-Components/StaffHero'
import StaffDetails from '../Staffs-Components/StaffDetails'

const Staffs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <StaffHero />
      <StaffDetails />
    </div>
  )
}

export default Staffs