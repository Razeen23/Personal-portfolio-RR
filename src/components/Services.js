import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import services3 from '../assets2/services.webp';
import { services2 } from '../constants';



const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & img */}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:true,amount:0.3}}
          className='flex-1 bg-contain min-h-[150px] md:h-[200px] lg:h-[250px] mb-12 lg:mb-0'>

            <h2 className='font1 text-text mb-6'>What I Can <br className='lg:hidden' /> Do For You</h2>
            <p className='font2 max-w-[500px] text-textLight lg:mb-8 md:mb-6 sm:mb-4'>I specialize in building high-performance, scalable web applications with React.js. From interactive dashboards to automated systems, I deliver solutions that drive business growth and enhance user engagement.</p>
            {/* <button className='btn btn-sm'><a href='mailto:rrazeen.official23@gmail.com'>Send Me Work</a></button> */}
            <button className='btn lg:h-[45px] lg:w-[180px] md:h-[30px] md:w-[160px] sm:h-[25px] sm:w-[140px] btn-sm lg:text-[14px] md:text-[12px] sm:text-[10px] '>
            <a href='mailto:razeen.official23@gmail.com'>Send Me Works</a>
            </button>
            <div className='flex-1 lg:h-[500px] relative '>
              <img className='w-full h-full lg:h-[500px] md:h-[400px] sm:h-[300px] transform lg:-translate-x-[-65px] md:-translate-x-[-65px] lg:-translate-y-[135px] md:-translate-y-[100px] rotate-45' 
                src={services3} 
                loading="lazy" 
                alt="Services illustration" />
            </div>

          </motion.div>
          {/* section  */}
          <motion.div
          variants={fadeIn('right',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:true,amount:0.3}}
          className='flex-1'>
            <div>
              {services2.map((service, index) => {
                const { name, description } = service;

                return (
                  <div className='flex border-b border-gray-200/30 lg:min-h-[180px] md:min-h-[160px] sm:min-h-[140px] mb-8 pb-8 hover:bg-white/50 transition-all duration-300 rounded-xl px-6 py-6 shadow-luxury hover:shadow-luxuryHover' key={index}>
                    <div className='flex-1 max-w-[500px]'>
                      <h4 className='h3 text-text mb-4'>
                        {name}
                      </h4>
                      <p className='font2 text-textLight'>
                        {description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
