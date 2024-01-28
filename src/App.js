import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import video from './assets2/bg-v9.mp4';
import Tech from './components/Tech';
import Cursur from './components/cursur';

const App = () => {
  return (
     <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Cursur />

{/* <div className='relative bg-no-repeat bg-cover overflow-hidden'>
      <video
        src={video}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1 }} // Ensure the video is behind other content
      /> */}
      <div className="relative z-10">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Tech />
        <Services />
        <Work />
        <Contact />        
        

      </div>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
