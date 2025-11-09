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

            <h2 className='font1 lg:text-[45px] leading-[1] text-accent'>What I Can <br className='lg:hidden' /> Do For You</h2>
            <h3 className='h3 max-w-[455px] lg:text-[26px] md:text-[20px] sm:text-[15px] lg:mb-6 md:mb-3 sm:mb-1'>I specialize in building high-performance, scalable web applications with React.js. From interactive dashboards to automated systems, I deliver solutions that drive business growth and enhance user engagement.</h3>
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
                  <div className='flex border-b border-gray-200/50 lg:min-h-[180px] md:min-h-[160px] sm:min-h-[140px] mb-[30px] pb-6 hover:bg-gray-50/30 transition-colors duration-300 rounded-lg px-4 py-4' key={index}>
                    <div className='flex-1 max-w-[476px]'>
                      <h4 className='text-[20px] lg:text-[22px] tracking-wider font-primary font-semibold lg:mb-4 md:mb-3 sm:mb-2 text-gray-900'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-relaxed lg:text-[17px] md:text-[15px] sm:text-[13px] text-gray-700'>
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
