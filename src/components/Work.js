import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/work11.webp';
import img2 from '../assets/sarab-shipping.webp';
import img3 from '../assets/spotcard.webp';

import { Link } from 'react-router-dom';


const Work = () => {
  return (
    <section className='py-9 lg:py-24 flex items-center min-h-screen mb-8 lg:mb-12' id='work'>
      <div className='container mx-auto w-full'>
        <div className='flex flex-col lg:flex-row lg:gap-x-0 '>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0 lg:mx-20'>
            {/* text */}
            <div>
              <h2 className='font1 lg:text-[45px] leading-[1] text-accent'>
                MY Previous Work.
              </h2>
              <p className='mb-5 lg:text-[20px] md:text-[19px] sm:text-[16px]'>
                I've built high-performance web applications including SaaS dashboards with D3.js visualizations, automated server deployment systems, e-invoicing solutions, and interactive portfolios. My projects focus on performance optimization, user experience, and scalable architecture.
              </p>
              <Link to="/projects">
                <button className='btn btn-sm lg:h-[45px] lg:w-[200px] md:h-[40px] md:w-[180px] sm:h-[35px] sm:w-[160px] lg:text-[14px] md:text-[12px] sm:text-[11px]'>
                  View All Projects
                </button>
              </Link>
            </div>
            {/* img  */}
            {/* <Tilt className="xs:w-[250px] w-full"> */}

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[300px] lg:w-[500px]'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transiton-all duration-300'></div>
              <img className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500' 
                src={img1} 
                loading="lazy" 
                alt="Face Recognition Project" />
              {/* pro title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all during-500 z-50'>
                <span className='text-gradient'>Python</span>
              </div>
              {/* title  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all during-700 z-50'>
                <span className='text-3xl text-white'>Face Recognition</span>
              </div>
            </div>
            {/* </Tilt> */}


          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6 mb-10 lg:mb-10'>
            {/* <Tilt className="xs:w-[250px] w-full"> */}

            {/* img  */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[300px] lg:w-[500px]'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transiton-all duration-300'></div>
              <img className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500' 
                src={img2} 
                loading="lazy" 
                alt="Sarab Shipping Project" />
              {/* pro title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all during-500 z-50'>
                <span className='text-gradient'>Sarab shipping</span>
              </div>
              {/* title  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all during-700 z-50'>
                <span className='text-3xl text-white'>logistics website</span>
              </div>
            </div>
            {/* </Tilt> */}

            {/* <Tilt className="xs:w-[250px] w-full"> */}

            {/* img  */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[300px] lg:w-[500px]'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transiton-all duration-300'></div>
              <img className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500'
                src={img3} 
                loading="lazy" 
                alt="SpotCard Project" />
              {/* pro title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all during-500 z-50'>
                <span className='text-gradient'>SpotCard</span>
              </div>
              {/* title  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all during-700 z-50'>
                <span className='text-3xl text-white'>Digital Business Cards</span>
              </div>
            </div>
            {/* </Tilt> */}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
