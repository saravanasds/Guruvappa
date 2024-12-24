import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CurriculamHero from '../Curriculam-Components/CurriculamHero';
import CurricularActivities from '../Curriculam-Components/CurricularActivities';
import Academic from '../Curriculam-Components/Academic';

const Curriculam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Helmet>
        <title>Curriculum - Guruvappa School</title>
        <meta name="description" content="Explore the academic and extracurricular curriculum at Guruvappa School. Learn about our academic programs, curricular activities, and opportunities for student development." />
        <meta name="keywords" content="Guruvappa School curriculum, academic programs, extracurricular activities, school curriculum, Guruvappa School education" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Curriculum - Guruvappa School" />
        <meta property="og:description" content="Learn more about the curriculum at Guruvappa School, including academic programs and extracurricular activities that promote student development." />
        <meta property="og:image" content="https://guruvappaschool.in/curriculum-cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/curriculum" />
        <meta property="og:type" content="website" />
      </Helmet>
      <CurriculamHero />
      <Academic />
      <CurricularActivities />
    </div>
  );
}

export default Curriculam;
