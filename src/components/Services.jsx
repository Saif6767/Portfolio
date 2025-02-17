import React from 'react'
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants.jsx';
import { div } from 'framer-motion/client';

//services Data
const services = [
    {
        name: 'UI/UX Design',
        description: 'Create engaging and user-friendly designs to enhance user experience and interface.',
        link: 'Learn more',
    },
    {
        name: 'Web Development',
        description: 'Build modern and responsive websites using the latest technologies.',
        link: 'Learn more',
    },
    {
        name: 'App Development',
        description: 'Develop custom mobile applications for Android and iOS that meet user needs.',
        link: 'Learn more',
    },
    {
        name: 'Digital Marketing',
        description: 'Implement digital marketing strategies to enhance online presence and reach the target audience.',
        link: 'Learn more',
    },
];


function Services() {
    return (
        <>
            <section className='section' id='services'>
                <div className="container mx-auto">
                    <div className='flex flex-col lg:flex-row'>
                        {/* text & image*/}
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 bg-contain bg-[length:70%]'>
                            <h2 className='h2 text-accent mb-2 text-[28px]'>What I Do.</h2>
                            <h3 className='h3 max-w-[400px] mb-4 text-[22px]'>
                                I'm a Full Stack Developer with over 1 years of experience.
                            </h3>
                            <button className='btn btn-sm'>See my work</button>
                        </motion.div>
                        {/* services */}
                        <motion.div
                            variants={fadeIn('left', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex-1'>
                            {/* services & list */}
                            <div>
                                {services.map((service, index) => {
                                    //destructure services
                                    const { name, description, link } = service;
                                    return (
                                        <div className='border-b border-white/20 h-[126px] mb-[20px] flex' key={index}>
                                            <div className='max-w-[476px]'>
                                                <h4 className='text-[18px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                                                <p className='font-secondary leading-tight text-[14px]'>{description}</p>
                                            </div>
                                            <div className='flex flex-col flex-1 items-end'>
                                                <a href="#"><BsArrowUpRight /></a></div>
                                            <a href="#" className='text-[14px]'>{link}</a>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
