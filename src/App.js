import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tech from './components/Tech';
import Startups from './components/Startups';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Cursur from './components/cursur';
import StarsCanvas from './components/canvas/Stars';
import PreLoader from './components/PreLoader';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden min-h-screen' style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(59,130,246,1) 100%)'}}>
      <Router>
        <Cursur />
        {/* <PreLoader /> */}

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Banner />
              <Nav />
              <About />
              <Tech />
              <Services />
              <Experience />
              <Work />
              <Startups />
              <Certifications />
              <div className="relative z-10">
                <Contact />
                {/* <StarsCanvas /> */}
                <Footer />
              </div>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;