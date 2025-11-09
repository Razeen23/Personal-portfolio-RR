import React from 'react';
import Countup from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import pdf from './resume/Full_stack_Developer_Resume.pdf';


  const handleDownloadResume = () => {
    const resumeUrl = pdf;

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;

    downloadLink.download = 'Developer_Razeen.pdf';
    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
  };



const About = () => {

  const [ref, inview] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref} >
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('up',0.3)}
          initial= 'hidden'
          whileInView={'show'}
          viewport={{once:true,amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat bg-top 
          min-h-[140px] sm:min-h-[150px] md:min-h-[200px] lg:min-h-[500px] '>
          </motion.div>
          {/* text */}
          <div className='flex-1'>
          <h2 className='font1 text-accent leading-[0.8]'>
              About Me
          </h2>
          <h3 className='font2 mb-4 text-[20px] lg:text-[24px] md:text-[20px] sm:text-[18px]'>Junior React.js Developer with 2+ years of experience</h3>
            <p className='font2 text-[17px] lg:text-[17px] md:text-[15px] sm:text-[13px] lg:mb-6 md:mb-3 sm:mb-1'>Junior React.js Developer with 2+ years of experience building high-performance, scalable web applications. Expertise in React.js, JavaScript, and modern UI/UX development for interactive dashboards and gaming/media platforms. Proven ability to optimize cross-browser compatibility, rendering performance, and state management in fast-paced environments.</p>
            <p className='font2 text-[17px] lg:text-[17px] md:text-[15px] sm:text-[13px]  lg:mb-6 md:mb-3 sm:mb-1 sm:hidden md:hidden lg:block'>
              <span className='h3 lg:text-[26px] md:text-[20px] sm:text-[18px]'>Education:</span>
              <br /> • Bachelor of Computer Applications (BCA) - Mohamed Sathak College of Arts and Science (2019-2022)<br />
              • Diploma in Counseling Psychology - Sypa IIE (2021-2022)
            </p>
          {/* state */}
          <div className='flex flex-wrap gap-x-6 mt-5 lg:gap-x-10 md:gap-x-6 sm:gap-x-4 mb-5'>
            <div>
              <div className='text-[40px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-tertiary text-gradient mb-2'>
                {inview ?
                  <Countup start={0} end={2} duration={4} />:null} +
              </div>
              <div className='font-primary text-sm tracking-[2px]'> year of <br /> Experience </div>
            </div>
            <div>
              <div className='text-[40px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-tertiary text-gradient mb-2'>
                {inview ?
                  <Countup start={0} end={6} duration={4} />:null} +
              </div>
              <div className='font-primary text-sm tracking-[2px]'> Projects <br /> Completed </div>
            </div>
            <div className='flex flex-wrap gap-x-4 sm:mt-3 items-center'>
            <button className='btn btn-sm md:h-[35px] sm:h-[35px] px-6 text-sm' onClick={handleDownloadResume}>Download Resume</button>
          </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
