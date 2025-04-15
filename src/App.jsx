import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import Steelfabrication from './components/Steelfabrication';
import Generalmaintenance from "./components/Generalmaintenance";
import Technical from './components/Technical';
import Projectsupport from './components/Projectsupport';
import Steeltrading from './components/Steeltrading';
import Mechanicalpiping from './components/Mechanicalpiping'
import Installation from './components/Installation'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Detail Pages */}
        <Route path="/services/steel-fabrication" element={<Steelfabrication />} />
        <Route path="/services/mechanical-piping" element={<Mechanicalpiping />} />
        <Route path="/services/project-support" element={<Projectsupport />} />
        <Route path="/services/steel-trading" element={<Steeltrading />} />
        <Route path="/services/general-maintenance" element={<Generalmaintenance />} />
        <Route path="/services/technical-service" element={<Technical />} />
        <Route path="/services/installation" element={<Installation />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
