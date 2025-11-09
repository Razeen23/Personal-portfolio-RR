import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'Hostzop Cloud Technologies Pvt. Ltd.',
      position: 'Full Stack Developer (React.js & PHP)',
      period: 'Aug 2023 - Present',
      achievements: [
        'Developed React.js-powered client dashboard with dynamic D3.js visualizations, improving user engagement by 40%',
        'Optimized frontend performance by 30% using code-splitting and lazy loading techniques',
        'Ensured cross-browser compatibility and mobile responsiveness for 5,000+ active users',
        'Architected real-time dashboard using React Context API + useReducer, eliminating prop drilling across 15+ components',
        'Engineered custom hooks (useApi, useDebounce) reducing code duplication by 30%',
        'Automated server deployment process reducing deployment time by 87% (40 min to 5 min)',
        'Saved 200+ engineering hours monthly through automation',
        'Integrated MasterGST API for automated e-invoicing, eliminating 9+ hours/week of manual work'
      ],
      projects: [
        {
          name: 'Hostzop SaaS Ecosystem',
          description: 'Architected full front-end for two white-labeled SaaS products supporting 1,000+ users',
          tech: 'React.js, D3.js, Context API, Custom Hooks, PHP APIs'
        },
        {
          name: 'Kothari Polymers: Legacy System Modernization',
          description: 'Revitalized legacy application with automated e-invoicing system',
          tech: 'JavaScript, jQuery, RESTful APIs, MasterGST API'
        },
        {
          name: 'Server Automation Project',
          description: 'Automated entire server deployment workflow with payment gateway integration',
          tech: 'PHP, JavaScript, MySQL, Stripe API, Razorpay API'
        },
        {
          name: 'CI/CD Pipeline Auto Deployment System',
          description: 'Implemented automated CI/CD pipeline using GitHub Actions for seamless deployments, eliminating 90% of manual deployment tickets and enabling 5x faster update cycles',
          tech: 'GitHub Actions, SSH, cPanel, CI/CD, Automated Workflows'
        }
      ]
    },
    {
      company: 'Aspire Systems',
      position: 'Full Stack Developer Intern (Python & ML)',
      period: 'Apr 2023 – Jul 2023',
      achievements: [
        'Engineered efficient Face Recognition Attendance System for automated user identification',
        'Developed secure authentication and data processing mechanisms for user face matching',
        'Utilized Cvzone, NumPy, and Pickle for facial feature detection and model integration',
        'Implemented real-time data updates pushing recognized user data to Firebase',
        'Applied Unit Testing and Debugging techniques, reducing production errors by 40%',
        'Increased system reliability by 25%'
      ],
      projects: [
        {
          name: 'Face Recognition Attendance System',
          description: 'Automated attendance system using ML and computer vision',
          tech: 'Python, Cvzone, NumPy, Pickle, Firebase'
        }
      ]
    }
  ];

  return (
    <section className='py-9 lg:py-24 flex items-start min-h-screen mb-8 lg:mb-12' id='experience'>
      <div className='container mx-auto w-full'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-12 lg:mb-16'
        >
          <h2 className='font1 text-accent leading-[0.8] mb-4'>
            Work Experience
          </h2>
          <h3 className='font2 text-[20px] lg:text-[24px] md:text-[20px] sm:text-[18px]'>
            Building scalable solutions and driving innovation
          </h3>
        </motion.div>

        <div className='flex flex-col gap-8 lg:gap-12'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.3 + index * 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-10 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6'>
                <div className='mb-4 lg:mb-0'>
                  <div className='flex items-center gap-3 mb-2'>
                    <FaBriefcase className='text-accent text-xl' />
                    <h3 className='font-primary text-2xl lg:text-3xl font-bold text-gray-900'>
                      {exp.position}
                    </h3>
                  </div>
                  <h4 className='font-secondary text-xl lg:text-2xl text-gray-700 mb-2'>
                    {exp.company}
                  </h4>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <FaCalendarAlt className='text-accent' />
                    <span className='font-secondary'>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <h5 className='font-primary text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <FaCheckCircle className='text-accent' />
                  Key Achievements:
                </h5>
                <ul className='space-y-2'>
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-3 font-secondary text-[15px] lg:text-[16px] text-gray-700'
                    >
                      <span className='text-accent mt-1.5'>▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.projects && exp.projects.length > 0 && (
                <div>
                  <h5 className='font-primary text-lg font-semibold text-gray-900 mb-4'>
                    Notable Projects:
                  </h5>
                  <div className='grid gap-4 lg:grid-cols-2'>
                    {exp.projects.map((project, pIdx) => (
                      <div
                        key={pIdx}
                        className='bg-gray-50/50 rounded-lg p-4 border border-gray-200/50'
                      >
                        <h6 className='font-primary font-semibold text-gray-900 mb-2'>
                          {project.name}
                        </h6>
                        <p className='font-secondary text-sm text-gray-700 mb-2'>
                          {project.description}
                        </p>
                        <p className='font-secondary text-xs text-gray-600'>
                          <span className='font-semibold'>Tech:</span> {project.tech}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

