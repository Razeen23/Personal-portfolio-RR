import React from 'react';
// Image
import Image from '../assets2/obj1.png';
import Image2 from '../assets2/obj2.png';

// icons
import { Fagithub, FaYoutube, FaDribbble, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import  { useState, useEffect } from 'react';




const Banner = () => {

  // const [pos, setPos] = useState({ x: 0, y: 0 });
  // const [shadow, setShadow] = useState(true);

  // const onMouseMove = (e) => {
  //   setPos({
  //     x: e.pageX,
  //     y: e.pageY
  //   });

  //   createShadow();
  // };

  // const createShadow = () => {
  //   if ('ontouchstart' in window === false && shadow) {
  //     let [moveX, moveY] = [(pos.x / -100), (pos.y / -120)];
  //     let [Section, firstWord, secondWord] = [document.querySelector('.section'), document.querySelector('.playword_1'), document.querySelector('.playword_2')];

  //     firstWord.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
  //     secondWord.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
  //     Section.style.textShadow = `${moveX}px ${-moveY}px rgba(0, 0, 0, 0.1)`;
  //   }
  // };

 
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home' >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-7 lg:flex-row lg:items-center lg:gap-x-12' >
        <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[360px] lg:max-w-[482px] ' 
          >
            <motion.img
            className='relative '
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            src={Image2}
            />
          </motion.div>
          <div className='flex-1 text-center forn-secondary'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='font1 leading-[0.8]'
              // onMouseMove={onMouseMove}
               >
              <span>Mr.</span>Razeen
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] ig:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white text-[35px] mr-4'>I'm a</span>
              <br />
              <TypeAnimation sequence={[
                'Developer !', 2000,
                ' Web Designer !', 2000,
                'counselling Psychologist !', 2000,
              ]}
                speed={50}
                className='text-accent text-[35px]'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='font2 mb-8 maxw-lg mx-auto lg:mx-0'>If you see something off on my web page, remember that <span>"It’s not a bug. It’s an undocumented feature!"</span>
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto '>
                          <button className='btn btn-lg'>
            <a href='mailto:razeenofficial23@gmail.com'>Contact Me</a></button>
              <a href='#' className='text-gradient btn-link'>
                My Profile
              </a>
            </motion.div>
            {/* link */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
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
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[360px] lg:max-w-[482px] w-full h-full transform -translate-x-[-250px]'>
            <motion.img
            className='relative '
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            src={Image}
            />
          </motion.div>
        </div>

      </div>

      {/* <div className='section' id='home'>Banner</div>; */}
    </section>
  );
};

export default Banner;




