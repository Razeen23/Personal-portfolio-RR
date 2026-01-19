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
            <h4 className='h2 text-accent mb-8'>Get In Touch</h4>
            <h2 className='font1 text-text mb-12'>
              Let's Work <br />Together
            </h2>
            <div className='mb-10 space-y-6'>
              <div className='flex items-center gap-5'>
                <span className='text-textLight text-3xl'>📧</span>
                <a href='mailto:razeen.official23@gmail.com' className='font-secondary text-textLight hover:text-accent transition-colors text-xl lg:text-2xl'>
                  razeen.official23@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-5'>
                <span className='text-textLight text-3xl'>🇦🇪</span>
                <a href='tel:+971507697208' className='font-secondary text-textLight hover:text-accent transition-colors text-xl lg:text-2xl'>
                  +971 50 769 7208
                </a>
              </div>
              <div className='flex items-center gap-5'>
                <span className='text-textLight text-3xl'>🇮🇳</span>
                <a href='tel:+919345035514' className='font-secondary text-textLight hover:text-accent transition-colors text-xl lg:text-2xl'>
                  +91 93450 35514
                </a>
              </div>
            </div>
            <button className='btn btn-lg mb-4'>
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
