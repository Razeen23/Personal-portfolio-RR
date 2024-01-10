import React from 'react';
// countup
import Countup from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {

  const [ref, inview] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref} >
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('up',0.3)}
          initial= 'hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat min-h-[340px] md:h-[440px] lg:h-[540px] bg-top'>
          </motion.div>
          {/* text */}
          <div className='flex-1'>
            <h2 className='h2 text-accent'>About Me...</h2>
            <h3 className='h3 mb-4'>I'm a Full Stack Developer with 1 year of experience.</h3>
            <p className='mb-6'>bg-about: This is likely a custom class or utility class that is defined elsewhere in the CSS or styling for the application. It is used bg-contain: This class ensures that the background image is scaled to be as large as possible while ensuring that both its width and height are equal to or less than the container's dimensions. This prevents the image from stretching or distorting.</p>
          {/* state */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inview ?
                  <Countup start={0} end={1} duration={4} />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'> year of <br /> Experience </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inview ?
                  <Countup start={0} end={2} duration={4} />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'> Projects <br /> Completed </div>
            </div>
            {/* <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inview ?
                  <Countup start={0} end={1} duration={4} />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'> year of <br /> Experience </div>
            </div> */}
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact Me</button>
            <a className='text-gradient btn-link'>My Protfolio</a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
