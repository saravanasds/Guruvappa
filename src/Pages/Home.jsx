import React from "react";
import { useEffect } from "react";
import Hero from "../Home-Components/Hero";
import Counter from "../Home-Components/Counter"
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
    <div
      className="w-full flex flex-col justify-center items-center overflow-hidden" >
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
