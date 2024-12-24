import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CalenderHero from '../Calender-Components/CalenderHero';
import EventCalendar from '../Calender-Components/EventCalender';

const Calender = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>Event Calendar - Guruvappa School</title>
        <meta name="description" content="Stay updated with the upcoming events at Guruvappa School. Check out the full calendar of events and never miss an important school activity!" />
        <meta name="keywords" content="Guruvappa School calendar, school events, school activities, event schedule, Guruvappa School calendar events" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Event Calendar - Guruvappa School" />
        <meta property="og:description" content="Browse through Guruvappa School’s event calendar to stay informed about upcoming activities and events." />
        <meta property="og:image" content="https://guruvappaschool.in/event-calendar-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/calendar" />
        <meta property="og:type" content="website" />
      </Helmet>
      <CalenderHero />
      <EventCalendar />
    </div>
  );
}

export default Calender;
