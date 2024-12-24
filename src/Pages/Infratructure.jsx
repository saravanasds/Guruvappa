import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import InfraHero from '../Infrastructure-Components/InfraHero';
import Welcome from '../Infrastructure-Components/Welcome';

const Infratructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>Infrastructure - Guruvappa School</title>
        <meta name="description" content="Explore the state-of-the-art infrastructure of Guruvappa School, featuring modern facilities, spacious classrooms, and cutting-edge technology." />
        <meta name="keywords" content="Guruvappa School infrastructure, school facilities, modern classrooms, Guruvappa School campus, state-of-the-art facilities" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Infrastructure - Guruvappa School" />
        <meta property="og:description" content="Discover the exceptional infrastructure of Guruvappa School, designed to provide a comfortable and productive learning environment for students." />
        <meta property="og:image" content="https://guruvappaschool.in/infrastructure-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/infrastructure" />
        <meta property="og:type" content="website" />
      </Helmet>
      <InfraHero />
      <Welcome />
    </div>
  );
}

export default Infratructure;
