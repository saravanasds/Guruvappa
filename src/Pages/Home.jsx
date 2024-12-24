import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../Home-Components/Hero";
import Counter from "../Home-Components/Counter";
import SchoolHistory from "../Home-Components/SchoolHistory";
import Services from "../Home-Components/Services";
import HomeBlog from "../Home-Components/HomeBlog";
import Video from "../Home-Components/Video";
import Events from "../Home-Components/Events";
import Choose from "../Home-Components/Choose";
import HomeContact from "../Home-Components/HomeContact";

const Home = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      {/* SEO Helmet Tags */}
      <Helmet>
        <title>Guruvappa School - Empowering Quality Education</title>
        <meta
          name="description"
          content="Discover Guruvappa School's dedication to providing quality education, fostering student growth, and building strong foundations for a bright future."
        />
        <meta
          name="keywords"
          content="Guruvappa School, quality education, holistic development, academic excellence, schools in India"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Guruvappa School" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="Guruvappa School - Empowering Quality Education" />
        <meta
          property="og:description"
          content="Join Guruvappa School for a transformative learning experience, promoting both academic and personal growth for students."
        />
        <meta property="og:image" content="https://guruvappaschool.in/cover.jpg" />
        <meta property="og:url" content="https://guruvappaschool.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Your Components */}
      <Hero />
      <Counter />
      <SchoolHistory />
      <Services />
      <HomeBlog />
      <Video />
      <Events />
      <Choose />
      <HomeContact />
    </div>
  );
};

export default Home;
