import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { services } from '../constants';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';




const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[150px] w-[200px]">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
                <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                    className='bg-site2 rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                    <h3 className='text-text text-center text-[20px] font-bold'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const Tech = () => {
    return (

        <div className='flex flex-row flex-wrap justify-center gap-10'>
            <h3>Ground I Play On</h3><br />
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}

            <div className='mt-10 flex flex-row gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>



    );
};

const Tech2 = () => {
    return (

        <section className='section' id='tech'>
            <div className='container mx-auto'>
                <div className="font1 lg:text-[40px] text-accent text-center">Ground I Played</div>
                <div className='flex lg:flex-row flex-wrap justify-center gap-10'>
                    {/* text & img */}
                {technologies.map((technology) => (
                <div className='w-24 h-24' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
                    {/* section  */}
                    <div className='flex flex-row gap-10'>
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


