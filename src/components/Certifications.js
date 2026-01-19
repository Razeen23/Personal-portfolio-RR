import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaCertificate, FaTrophy, FaLanguage } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      name: 'JavaScript Course',
      provider: 'Udemy',
      icon: FaCertificate
    },
    {
      name: 'Full Stack Development',
      provider: 'Offline Training',
      icon: FaCertificate
    }
  ];

  const awards = [
    {
      title: 'Best Performer Award',
      organization: 'Aspire Systems',
      description: 'Awarded during internship period',
      icon: FaTrophy
    },
    {
      title: 'NCC Team Leadership',
      organization: 'NCC Camp',
      description: 'Led a 10-member team in NCC Camp',
      icon: FaTrophy
    }
  ];

  const languages = [
    { name: 'English', level: '' },
    { name: 'Tamil', level: '' },
    { name: 'Hindi', level: '' }
  ];

  return (
    <section className='py-9 lg:py-24 flex items-start min-h-screen mb-8 lg:mb-12' id='certifications'>
      <div className='container mx-auto w-full'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-12 lg:mb-16'
        >
          <h2 className='font1 text-text leading-[1.1] mb-6'>
            Certifications & Achievements
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {/* Certifications */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200/50'
          >
            <div className='flex items-center gap-3 mb-6'>
              <FaCertificate className='text-accent text-2xl' />
              <h3 className='font-primary text-xl font-bold text-gray-900'>
                Certifications
              </h3>
            </div>
            <div className='space-y-4'>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className='bg-gray-50/50 rounded-lg p-4 border border-gray-200/50'
                >
                  <h4 className='font-primary font-semibold text-gray-900 mb-1'>
                    {cert.name}
                  </h4>
                  <p className='font-secondary text-sm text-gray-600'>
                    {cert.provider}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200/50'
          >
            <div className='flex items-center gap-3 mb-6'>
              <FaTrophy className='text-accent text-2xl' />
              <h3 className='font-primary text-xl font-bold text-gray-900'>
                Awards & Achievements
              </h3>
            </div>
            <div className='space-y-4'>
              {awards.map((award, index) => (
                <div
                  key={index}
                  className='bg-gray-50/50 rounded-lg p-4 border border-gray-200/50'
                >
                  <h4 className='font-primary font-semibold text-gray-900 mb-1'>
                    {award.title}
                  </h4>
                  <p className='font-secondary text-sm text-gray-600 mb-1'>
                    {award.organization}
                  </p>
                  <p className='font-secondary text-xs text-gray-500'>
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200/50'
          >
            <div className='flex items-center gap-3 mb-6'>
              <FaLanguage className='text-accent text-2xl' />
              <h3 className='font-primary text-xl font-bold text-gray-900'>
                Languages
              </h3>
            </div>
            <div className='space-y-4'>
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className='bg-gray-50/50 rounded-lg p-4 border border-gray-200/50'
                >
                  <div className='flex justify-between items-center'>
                    <h4 className='font-primary font-semibold text-gray-900'>
                      {lang.name}
                    </h4>
                    <span className='font-secondary text-sm text-gray-600 bg-accent/10 px-3 py-1 rounded-full'>
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

