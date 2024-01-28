import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Tilt } from 'react-tilt';

import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-0 '>
        <motion.div
        variants={fadeIn('up',0.5)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.5}}
         className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0 lg:mx-20'>
          {/* text */}
          <div>
            <h2 className='font1 lg:text-[45px] leading-[1] text-accent'>
              MY Previous Work.
            </h2>
            <p className='mb-5'>
            Accomplished projects include a face recognition system demonstrating advanced image processing, a dynamic personal portfolio showcasing technical proficiency, and a UI/UX design project emphasizing user-centric and visually appealing interfaces.            </p>
            <button className='btn btn-sm'><a href='https://github.com/Razeen23'>View All Projects</a></button>
          </div>
          {/* img  */}
          <Tilt className="xs:w-[250px] w-full">

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transiton-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500'
              src={img1} />
            {/* pro title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all during-500 z-50'>
              <span className='text-gradient'>Python</span>
            </div>
            {/* title  */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all during-700 z-50'>
              <span className='text-3xl text-white'>Face Recognition</span>
            </div>
          </div>
          </Tilt>

          
        </motion.div>
        <motion.div
        variants={fadeIn('up',0.5)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.5}} 
        className='flex-1 flex flex-col gap-y-6 mb-10 lg:mb-10'>
           <Tilt className="xs:w-[250px] w-full">

            {/* img  */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transiton-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500'
              src={img2} />
            {/* pro title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all during-500 z-50'>
              <span className='text-gradient'>React JS</span>
            </div>
            {/* title  */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all during-700 z-50'>
              <span className='text-3xl text-white'>Personal Portfolio</span>
            </div>
          </div>
          </Tilt>

          <Tilt className="xs:w-[250px] w-full">

            {/* img  */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transiton-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500'
              src={img3} />
            {/* pro title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all during-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            {/* title  */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all during-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
          </Tilt>

        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
