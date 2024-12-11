import React, { useEffect } from 'react'
import CalenderHero from '../Calender-Components/CalenderHero'
import EventCalendar from '../Calender-Components/EventCalender'

const Calender = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <CalenderHero />
      <EventCalendar />
    </div>
  )
}

export default Calender