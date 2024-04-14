import React, { useState, useEffect } from 'react';
// components
// import './preloading.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tech from './components/Tech';
import Cursur from './components/cursur';
import StarsCanvas from './components/canvas/Stars';
import PreLoader from './components/PreLoader';

const App = () => {
  


  return (
     <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* {showLoading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50'>
        <div className="text-white text-4xl">Loading...</div>

      </div>
      )} */}
      <Cursur />
      <PreLoader />

        <Header />
        <Banner />
        <Nav />
        <About />
        <Tech />
        <Services />
        <Work />
        <div className="relative z-10">
        <Contact />
        <StarsCanvas /> 
        <Footer />       
        </div>

      {/* )} */}
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
