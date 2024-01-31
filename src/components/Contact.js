import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

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
        viewport={{once:false,amount:0.3}}
         className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-[30px] font1 uppercase text-accent font-medium mb-5 tracking-wide'>Get In Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none lg:mb-10 md:mb-8 sm:mb-6 '>
              Let's Work <br />Together!
            </h2>
            <button className='btn btn-sm mb-4'>
  <a href='mailto:razeenofficial23@gmail.com'>Send Mail</a>
</button>
          </div>
        </motion.div>
        {/* form  */}
        {/* <div className='flex-1 flex' id='app'>fhfjh</div> */}
        <motion.form 
        variants={fadeIn('left',0.5)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
         className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline-none w-full
          placeholder-[text-white] focus:border-accent transition-all'
          type='text'
          placeholder='Your Name' />
          <input className='bg-transparent border-b py-3 outline-none w-full
          placeholder-[text-white] focus:border-accent transition-all'
          type='email'
          placeholder='Your email' />
          <textarea className='bg-transparent border-b py-3 outline-none w-full
          placeholder-[text-white] focus:border-accent transition-all resize-none mb-12'
          placeholder='Your Message'>
          </textarea>
          <button className='btn btn-lg '>Send Message</button>
        </motion.form>
      </div>
    </div>
  </section>
  
  );
};

export default Contact;
