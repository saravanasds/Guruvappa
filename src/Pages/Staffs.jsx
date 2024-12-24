import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import StaffHero from '../Staffs-Components/StaffHero';
import StaffDetails from '../Staffs-Components/StaffDetails';

const Staffs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>Staff - Guruvappa School</title>
        <meta name="description" content="Meet the dedicated staff of Guruvappa School who are committed to nurturing and educating our students with passion and care." />
        <meta name="keywords" content="Guruvappa School staff, school teachers, education professionals, Guruvappa School faculty" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Staff - Guruvappa School" />
        <meta property="og:description" content="Meet the dedicated staff of Guruvappa School who are committed to nurturing and educating our students with passion and care." />
        <meta property="og:image" content="https://guruvappaschool.in/staff-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/staffs" />
        <meta property="og:type" content="website" />
      </Helmet>
      <StaffHero />
      <StaffDetails />
    </div>
  );
}

export default Staffs;
