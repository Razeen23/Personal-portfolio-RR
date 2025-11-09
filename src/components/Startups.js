import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';

const Startups = () => {
  const startups = [
    {
      name: 'SpotCard',
      url: 'https://spotcard.in',
      description: 'SpotCard is a digital business card platform that helps professionals create and share their contact information digitally. It provides a modern way to network and exchange contact details.',
      features: [
        'Digital Business Cards',
        'Contact Sharing',
        'Profile Management',
        'QR Code Generation'
      ]
    },
    {
      name: 'Invite SpotCard',
      url: 'https://invite.spotcard.in',
      description: 'Invite SpotCard is an event invitation platform that allows users to create, manage, and send digital invitations for various events. It simplifies the event management process.',
      features: [
        'Event Invitations',
        'RSVP Management',
        'Event Details',
        'Guest Management'
      ]
    }
  ];

  return (
    <section className='py-9 lg:py-24 flex items-start min-h-screen mb-8 lg:mb-12' id='startups'>
      <div className='container mx-auto w-full'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-12 lg:mb-16'
        >
          <h2 className='font1 text-accent leading-[0.8] mb-4'>
            My Startups
          </h2>
          <h3 className='font2 text-[20px] lg:text-[24px] md:text-[20px] sm:text-[18px]'>
            Building digital solutions for modern networking and event management
          </h3>
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.3 + index * 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                  <FaGlobe className='text-white text-xl' />
                </div>
                <div>
                  <h3 className='font-primary text-2xl lg:text-3xl font-bold text-gray-900 mb-1'>
                    {startup.name}
                  </h3>
                  <a
                    href={startup.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-800 text-sm lg:text-base flex items-center gap-2 transition-colors'
                  >
                    {startup.url}
                    <FaExternalLinkAlt className='text-xs' />
                  </a>
                </div>
              </div>

              <p className='font-secondary text-[16px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-gray-700 mb-6 leading-relaxed'>
                {startup.description}
              </p>

              <div>
                <h4 className='font-primary text-lg font-semibold text-gray-900 mb-4'>
                  Key Features:
                </h4>
                <ul className='space-y-2'>
                  {startup.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-3 font-secondary text-[15px] lg:text-[16px] text-gray-700'
                    >
                      <span className='text-accent mt-1.5'>▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-8 pt-6 border-t border-gray-200'>
                <a
                  href={startup.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-sm inline-flex items-center gap-2'
                >
                  Visit Website
                  <FaExternalLinkAlt className='text-sm' />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Startups;

