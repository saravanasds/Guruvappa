import React, { useEffect } from 'react'
import AboutHero from '../About-Components/AboutHero';
import History from '../About-Components/History';
import Philosophy from '../About-Components/Philosophy';
import VissionMission from '../About-Components/VissionMission';
import Legacy from '../About-Components/Legacy';
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>About Guruvappa School</title>
        <meta name="description" content="Learn about Guruvappa School, our values, history, and vision for providing the best education." />
        <meta name="keywords" content="Guruvappa School, education, school history, about us" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Guruvappa School" />
        <meta property="og:description" content="Get to know the vision and history of Guruvappa School, dedicated to providing high-quality education." />
        <meta property="og:image" content="https://guruvappaschool.in/about-image.jpg" />
      </Helmet>

      <AboutHero />
      <History />
      <Philosophy />
      <VissionMission />
      <Legacy />
    </div>
  )
}

export default About