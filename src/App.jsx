import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Components/Loading';
import Infratructure from './Pages/Infratructure';
import Academics from './Pages/Academics';
import Sports from './Pages/Sports';
import Curriculam from './Pages/Curriculam';
import Subjects from './Pages/Subjects';
import Calender from './Pages/Calender';
import Achivements from './Pages/Achivements';
import Alumini from './Pages/Alumini';
import Gallery from './Pages/Gallery';
import Admission from './Pages/Admission';
import Staffs from './Pages/Staffs';
import Blog from './Pages/Blog';
import GridGallery from './Gallery-Components/GridGallery';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infratructure" element={<Infratructure />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/curriculam" element={<Curriculam />} />
            <Route path="/achivements" element={<Achivements />} />
            <Route path="/alumini" element={<Alumini />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/staffs" element={<Staffs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gridGallery/:eventId" element={<GridGallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
