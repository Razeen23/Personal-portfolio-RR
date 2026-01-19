import React from "react";
import { BallCanvas } from "./canvas";
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
                        <h3 className='relative z-10 text-text text-center h3 group-hover:text-accent transition-colors duration-500'>
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
                    className="text-center mb-16 lg:mb-20"
                >
                    <div className="inline-block mb-4">
                        <span className="text-sm lg:text-base font-semibold text-blue-600 uppercase tracking-widest">
                            Expertise
                        </span>
                    </div>
                    <h2 className="font1 text-text mb-6">
                        Ground I Played
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
                </motion.div>

                {/* Technologies Section */}
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-20 lg:mb-24"
                >
                    <h3 className="text-center text-xl lg:text-2xl font-semibold text-gray-700 mb-12 tracking-wide">
                        Technologies & Tools
                    </h3>
                    <div className='flex flex-wrap justify-center items-center gap-8 lg:gap-12 md:gap-8 sm:gap-6 px-4'>
                        {technologies.map((technology, index) => (
                            <motion.div
                                key={technology.name}
                                variants={fadeIn('up', 0.1 + index * 0.05)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className='lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 transform hover:scale-110 transition-transform duration-300'
                            >
                                <BallCanvas icon={technology.icon} />
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


