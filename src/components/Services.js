import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import services3 from '../assets2/services.png';
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
          viewport={{once:false,amount:0.3}}
          className='flex-1 bg-contain min-h-[150px] md:h-[200px] lg:h-[250px] mb-12 lg:mb-0'>

            <h2 className='font1 lg:text-[45px] leading-[1] text-accent'>What Can <br className='lg:hidden' /> I Do For You</h2>
            <h3 className='h3 max-w-[455px] mb-6'>I'm a Full Stack Developer, and I can help create your own website to expand your business.</h3>
            {/* <button className='btn btn-sm'><a href='mailto:rrazeen.official23@gmail.com'>Send Me Work</a></button> */}
            <button className='btn btn-sm'>
            <a href='mailto:razeenofficial23@gmail.com'>Send Me Works</a></button>
            <motion.div className='flex-1 lg:h-[500px] relative '
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
              <img className='w-full h-full lg:h-[500px] transform -translate-x-[-25px] -translate-y-[135px] rotate-45' src={services3} />
            </motion.div>

          </motion.div>
          {/* section  */}
          <motion.div
          variants={fadeIn('right',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1'>
            <div>
              {services2.map((service, index) => {
                const { name, description, link } = service;

                return (
                  <div className='flex border-b border-white/20 h-[160px] mb-[36px] ' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] treacking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#'
                        className='btn w-9 h-9 mb-[42px] flex items-center justify-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
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
