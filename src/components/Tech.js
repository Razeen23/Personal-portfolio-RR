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
        <Tilt className="lg:w-[200px] md:w-[140px] sm:w-[80px] ">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
                <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                    className='bg-site2 rounded-[50px] py-5 px-120 md:min-h-[240px] sm:min-h-[200px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' loading="lazy" />
                    <h3 className='text-text text-center lg:text-[20px] md:text-[17px] sm:text-[14px] font-bold'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}


const Tech2 = () => {
    return (

        <section className='section' id='tech'>
            <div className='container mx-auto'>
                <div className="font1 lg:text-[40px] md:text-[30px] sm:text-[20px] text-accent text-center">Ground I Played</div>
                <div className='flex lg:flex-row flex-wrap justify-center lg:gap-10 md:gap-5 sm:gap-3 '>
                    {/* text & img */}
                {technologies.map((technology) => (
                <div className='lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
                    {/* section  */}
            <div className='flex flex-row flex-wrap gap-5 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
                </div>
            </div>
        </section>


    );
};

export default SectionWrapper(Tech2, "");


