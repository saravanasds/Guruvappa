import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SportsHero from '../Sports-Components/SportsHero';
import SportsList from '../Sports-Components/SportsList';
import SportsIntro from '../Sports-Components/SportsIntro';

const Sports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative w-full min-h-[60vh] flex flex-col justify-start items-end'>
      <Helmet>
        <title>Sports - Guruvappa School</title>
        <meta name="description" content="Explore the sports programs at Guruvappa School. We offer various sports activities to promote physical fitness, teamwork, and discipline." />
        <meta name="keywords" content="Guruvappa School sports, school sports activities, physical fitness, school athletics, sports programs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sports - Guruvappa School" />
        <meta property="og:description" content="Discover the sports programs at Guruvappa School, designed to encourage physical fitness, teamwork, and healthy competition among students." />
        <meta property="og:image" content="https://guruvappaschool.in/sports-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/sports" />
        <meta property="og:type" content="website" />
      </Helmet>
      <SportsHero />
      <SportsIntro />
      <SportsList />
    </div>
  );
}

export default Sports;
