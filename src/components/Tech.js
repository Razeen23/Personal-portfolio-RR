import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { services } from '../constants';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';




const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
            variants={fadeIn("up", 0.2 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
        >
            <Tilt
                className="w-full"
                options={{
                    max: 15,
                    scale: 1.02,
                    speed: 1000,
                    transition: true,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                }}
            >
                <div className="group relative w-full">
                    {/* Elegant card with glassmorphism effect */}
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-blue-200/50 min-h-[280px] flex flex-col items-center justify-center gap-6 overflow-hidden">
                        {/* Subtle gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 transition-all duration-500 rounded-2xl"></div>
                        
                        {/* Icon with elegant styling */}
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                            <div className="p-4 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-500">
                                <img 
                                    src={icon} 
                                    alt={title} 
                                    className='w-16 h-16 lg:w-20 lg:h-20 object-contain filter group-hover:brightness-110 transition-all duration-500' 
                                    loading="lazy" 
                                />
                            </div>
                        </div>
                        
                        {/* Title with refined typography */}
                        <h3 className='relative z-10 text-text text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-primary mb-0 group-hover:text-accent transition-colors duration-500 leading-tight'>
                            {title}
                        </h3>
                        
                        {/* Decorative element */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    )
}


const Tech2 = () => {
    return (
        <section className='section py-20 lg:py-32' id='tech'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Elegant Section Header */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
                >
                    <div className="inline-block mb-3 sm:mb-4">
                        <span className="text-xs sm:text-sm lg:text-base font-semibold text-blue-600 uppercase tracking-widest">
                            Expertise
                        </span>
                    </div>
                    <h2 className="font1 text-text mb-4 sm:mb-6 break-words">
                        Technologies I Work With
                    </h2>
                    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
                </motion.div>

                {/* Technologies Section */}
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-16 sm:mb-20 lg:mb-24"
                >
                    <h3 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-8 sm:mb-12 tracking-wide px-4">
                        Technologies & Tools
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 max-w-7xl mx-auto'>
                        {technologies.map((technology, index) => (
                            <motion.div
                                key={technology.name}
                                variants={fadeIn('up', 0.1 + index * 0.05)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className='group w-full'
                            >
                                <div className='bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 min-h-[70px] sm:min-h-[90px] md:min-h-[110px] lg:min-h-[120px]'>
                                    <div className='relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center flex-shrink-0'>
                                        <img 
                                            src={technology.icon} 
                                            alt={technology.name}
                                            className='w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300 group-hover:scale-110'
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className='text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-gray-700 text-center leading-tight group-hover:text-accent transition-colors duration-300 break-words px-1'>
                                        {technology.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Services Section */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="text-center text-xl lg:text-2xl font-semibold text-gray-700 mb-12 tracking-wide">
                        Core Services
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto'>
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(Tech2, "");


