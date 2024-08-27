import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./css/App.css";
//Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import { Route, Routes, useLocation } from "react-router-dom";
import AllPages from "./pages/AllPages";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

 // Close the navbar when a route changes
  useEffect(() => {
   
    setIsNavbarOpen(false);
  }, [location]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MANOJ K - FRONT-END Developer." />
        <meta name="author" content="MANOJ K" />
        <title>MANOJ K - Portfolio</title>
      </Helmet>
      <Navbar isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <Routes>
      <Route path="/" element={<AllPages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
