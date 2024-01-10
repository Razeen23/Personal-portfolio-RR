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

// const Banner = () => {
//   return (
//     <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12' >
//           <div className='flex-1 text-center forn-secondary lg:text-left'>
//             <motion.h1
//             variants={fadeIn('up',0.3)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{once:false,amount:0.7}}
//              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'> 
//               <span>Mr.</span>Razeen
//             </motion.h1>
//             <motion.div 
//             variants={fadeIn('up',0.4)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{once:false,amount:0.7}}
//             className='mb-6 text-[36px] ig:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
//             <span className='text-white mr-4'>I am a</span>
//             <br />
//               <TypeAnimation sequence={[
//                 'Developer !',2000,
//                 ' Web Designer !' ,2000,
//                 'counselling Psychologist !',2000,
//               ]} 
//               speed={50}
//               className='text-accent'
//               wrapper='span'
//               repeat={Infinity} 
//               />
//             </motion.div>
//             <motion.p 
//               variants={fadeIn('up',0.5)}
//               initial='hidden'
//               whileInView={'show'}
//               viewport={{once:false,amount:0.7}}
//               className='mb-8 maxw-lg mx-auto lg:mx-0'>The code you've provided seems fine at first glance. However, if there's an issue, it might be related to the styling class mr-4 or how it fits into the broader context of your application.
//               </motion.p>
//               <motion.div 
//              variants={fadeIn('up',0.6)}
//               initial='hidden'
//               whileInView={'show'}
//               viewport={{once:false,amount:0.7}}
//               className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
//                 <button className='btn btn-lg'> Contact Me </button>
//                 <a href='#' className='text-gradient btn-link'>
//                   My Profile
//                 </a>
//               </motion.div>
//               {/* link */}
//               <motion.div 
//                           variants={fadeIn('up',0.7)}
//                           initial='hidden'
//                           whileInView={'show'}
//                           viewport={{once:false,amount:0.7}}
//                           className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
//                 <a href='https://github.com/Razeen23'>
//                   <FaGithub />
//                 </a>
//                 <a href='https://www.linkedin.com/in/razeen-developer'>
//                   <FaLinkedin />
//                 </a>
//                 <a href='https://www.instagram.com/rider_razeen'>
//                   <FaInstagram />
//                 </a>

//               </motion.div>
//           </div>
//           {/* image */}
//           <motion.div
//                       variants={fadeIn('down',0.5)}
//                       initial='hidden'
//                       whileInView={'show'}
//                       viewport={{once:false,amount:0.7}}
//                        className='hidden lg:flex flex-1 max-w-[360px] lg:max-w-[482px]'>
//             <img src={Image} alt='' />
//           </motion.div>
//         </div>

//       </div>

//     {/* <div className='section' id='home'>Banner</div>; */}
//     </section>
//   );
// };

const Banner = () => {
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
          <div className='flex-1 text-center forn-secondary '>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] '>
              <span>Mr.</span>Razeen
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] ig:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <br />
              <TypeAnimation sequence={[
                'Developer !', 2000,
                ' Web Designer !', 2000,
                'counselling Psychologist !', 2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 maxw-lg mx-auto lg:mx-0'>The code you've provided seems fine at first glance.<br />
              However, if there's an issue, it might be related to the styling class mr-4 or
              how it fits into the broader context of your application.<br />
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto '>
              <button className='btn btn-lg'> Contact Me </button>
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
