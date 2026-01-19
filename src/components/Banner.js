import React from 'react';
import Image from '../assets2/obj1.webp';
import Image2 from '../assets2/obj2.webp';
import {  FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Banner = () => {
 
  return (
    <section className='min-h-[90vh] lg:min-h-[85vh] flex items-center py-16' id='home' >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-16' >
        <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='hidden lg:flex flex-1 max-w-[360px] lg:max-w-[482px] ' 
          >
            <img
            className='relative '
            src={Image2}
            loading="lazy"
            alt=""
            />
          </motion.div>
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='font1 text-text mb-4'
              >
              <span className='text-textLight font-light'>Mr. </span>Razeen
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='mb-8 font-secondary'>
              <span className='text-textLight text-lg mr-3 font-light'>I'm a</span>
              <TypeAnimation sequence={[
                'React.js Developer', 2000,
                'Full Stack Developer', 2000,
                'UI/UX Designer', 2000,
              ]}
                speed={75}
                className='text-accent font-semibold text-xl'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='font2 mb-10 max-w-2xl mx-auto lg:mx-0 text-textLight leading-relaxed'>Crafting elegant digital experiences with clean code and thoughtful design. <span className='text-accent font-medium'>Building the future, one pixel at a time.</span>
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto '>
                          <button className='btn btn-lg'>
            <a href='mailto:razeen.official23@gmail.com'>Contact Me</a></button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='text-gradient btn-link cursor-pointer'
                aria-label="Scroll to top"
              >
                My Profile
              </button>
            </motion.div>
            {/* link */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto '>
              <a href='https://github.com/Razeen23'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/razeen-developer'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/rider_razeen'>
                <FaInstagram />
              </a>

            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='hidden lg:flex flex-1 max-w-[360px] lg:max-w-[482px] w-full h-full transform -translate-x-[-250px]'>
            <img
            className='relative '
            src={Image}
            loading="lazy"
            alt=""
            />
          </motion.div>
        </div>

      </div>

      {/* <div className='section' id='home'>Banner</div>; */}
    </section>
  );
};

export default Banner;




