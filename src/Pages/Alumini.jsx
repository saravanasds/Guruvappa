import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AlumniHero from '../Alumni-Components/AlumniHero';
import AlumniDetails from '../Alumni-Components/AlumniDetails';
import AlumniMembers from '../Alumni-Components/AlumniMembers';

const Alumni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>Alumni - Guruvappa School</title>
        <meta name="description" content="Stay connected with the alumni of Guruvappa School. Explore the inspiring stories, achievements, and contributions of our old students." />
        <meta name="keywords" content="Guruvappa School alumni, alumni network, alumni stories, school alumni, former students" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Alumni - Guruvappa School" />
        <meta property="og:description" content="Join the Guruvappa School alumni network. Discover the journey and achievements of our former students." />
        <meta property="og:image" content="https://guruvappaschool.in/alumni-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/alumni" />
        <meta property="og:type" content="website" />
      </Helmet>
      <AlumniHero />
      <AlumniDetails />
      <AlumniMembers />
    </div>
  );
}

export default Alumni;
