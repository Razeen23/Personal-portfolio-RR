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
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-24 lg:gap-y-0'>
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
          <h2 className='font1 text-text mb-6'>
              About Me
          </h2>
          <h3 className='h3 mb-6 text-text'>React.js Developer with 2+ years of experience</h3>
            <p className='font2 lg:mb-8 md:mb-6 sm:mb-4'>React.js Developer with 2+ years of experience building high-performance, scalable web applications. Expertise in React.js, JavaScript, and modern UI/UX development for interactive dashboards and gaming/media platforms. Proven ability to optimize cross-browser compatibility, rendering performance, and state management in fast-paced environments.</p>
            <p className='font2 lg:mb-8 md:mb-6 sm:mb-4 sm:hidden md:hidden lg:block'>
              <span className='h3 text-text mb-4 block'>Education</span>
              <span className='text-textLight'>• Bachelor of Computer Applications (BCA) - Mohamed Sathak College of Arts and Science (2019-2022)</span><br />
              <span className='text-textLight'>• Diploma in Counseling Psychology - Sypa IIE (2021-2022)</span>
            </p>
          {/* state */}
          <div className='flex flex-wrap gap-x-6 mt-5 lg:gap-x-10 md:gap-x-6 sm:gap-x-4 mb-5'>
            <div>
              <div className='text-[48px] lg:text-[56px] md:text-[48px] sm:text-[40px] font-primary text-gradient mb-3 font-bold'>
                {inview ?
                  <Countup start={0} end={2} duration={4} />:null}<span className='text-accent'>+</span>
              </div>
              <div className='font-secondary text-sm tracking-wider text-textLight uppercase'>Years of <br /> Experience</div>
            </div>
            <div>
              <div className='text-[48px] lg:text-[56px] md:text-[48px] sm:text-[40px] font-primary text-gradient mb-3 font-bold'>
                {inview ?
                  <Countup start={0} end={6} duration={4} />:null}<span className='text-accent'>+</span>
              </div>
              <div className='font-secondary text-sm tracking-wider text-textLight uppercase'>Projects <br /> Completed</div>
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
