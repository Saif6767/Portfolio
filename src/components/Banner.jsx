import React from 'react'
// images
import Image from '../../public/avatar.svg';
//icons
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants.jsx';


function Banner() {
    return (
        <>
            <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
                <div className="container mx-auto">
                    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                        {/* text */}
                        <div className='flex-1 text-center font-secondary lg:text-left'>
                            <motion.h1
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className='text-[45px] font-bold leading-[0.8] lg:text-[55px]'
                            >
                                SAIF <span>ALI</span>
                            </motion.h1>
                            <motion.div
                                variants={fadeIn('up', 0.4)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className='mb-4 text-[30px] lg:text-[35px] font-secondary font-semibold uppercase leading-[1]'>
                                <span className='text-white mr-4'>I am a</span>
                                <TypeAnimation
                                    sequence={[
                                        'MERN Stack Developer',
                                        2000,
                                        'App Developer',
                                        2000,
                                        'UI/UX Designer',
                                        2000,
                                    ]}
                                    speed={50}
                                    className='text-accent'
                                    wrapper='span'
                                    repeat={Infinity}
                                />
                            </motion.div>
                            <motion.p
                                variants={fadeIn('up', 0.5)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className=' text-base mb-6 max-w-sm mx-auto lg:mx-0'>
                                Hello! I am a passionate coder with a strong interest in developing scalable and efficient applications. I specialize in MERN stack development and love building full-stack web applications that solve real-world problems.
                            </motion.p>
                            <motion.div
                                variants={fadeIn('up', 0.6)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex max-w-md gap-x-6 items-center mb-12 mx-auto lg:mx-0'
                            >
                                <button className='btn btn-lg' onClick={() => {
                                    setTimeout(() => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                }} >
                                    Contact me
                                </button>
                                <a href="#" className='text-gradient btn-link'>
                                    My Portfolio
                                </a>
                            </motion.div>
                            {/* socials */}
                            <motion.div
                                variants={fadeIn('up', 0.7)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex text-[20px] gap-x-6 max-w-max -mt-7 mx-auto lg:mx-0'
                            >
                                <a href="#">
                                    <FaGithub />
                                </a>
                                <a href="#">
                                    <FaLinkedin />
                                </a>
                                <a href="#">
                                    <FaDribbble />
                                </a>
                            </motion.div>
                        </div>
                        {/* image */}
                        <motion.div
                            variants={fadeIn('down', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[395px]'
                        >
                            <img src={Image} alt="" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;