import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import styles from "../style";
import  EarthCanvas  from "./canvas/Earth";
// import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  
  return( 
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text  */}
        <motion.div
        variants={fadeIn('right',0.5)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.3}}
         className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-[30px] font1 uppercase text-accent font-medium mb-5 tracking-wide'>Get In Touch</h4>
            <h2 className='text-[35px] sm:text-[45px] md:text-[60px] lg:text-[90px] leading-none lg:mb-10 md:mb-8 sm:mb-6 '>
              Let's Work <br />Together!
            </h2>
            <div className='mb-6 space-y-3'>
              <div className='flex items-center gap-3'>
                <span className='font-secondary text-gray-700'>📧</span>
                <a href='mailto:razeen.official23@gmail.com' className='font-secondary text-gray-900 hover:text-accent transition-colors'>
                  razeen.official23@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='font-secondary text-gray-700'>🇦🇪</span>
                <a href='tel:+971507697208' className='font-secondary text-gray-900 hover:text-accent transition-colors'>
                  +971 50 769 7208
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='font-secondary text-gray-700'>🇮🇳</span>
                <a href='tel:+919345035514' className='font-secondary text-gray-900 hover:text-accent transition-colors'>
                  +91 93450 35514
                </a>
              </div>
            </div>
            <button className='btn btn-sm mb-4'>
              <a href='mailto:razeen.official23@gmail.com'>Send Mail</a>
            </button>
          </div>
        </motion.div>

        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      </div>
    </div>
  </section>
  
  );
};

export default Contact;
