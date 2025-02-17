import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants.jsx';
//img
import Img1 from '../../public/portfolio-img1.png';
import Img2 from '../../public/portfolio-img2.png';
import Img3 from '../../public/portfolio-img3.png';

function Work() {
  return (
    <>
      <section className='section' id='work'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-x-10'>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
              {/* text */}
              <div>
                <h2 className='text-[28px] lg:text-[32px] leading-tight text-accent'>My Latest <br />Work.</h2>
                <p className='text-sm lg:text-base max-w-sm mb-4'>
                  In my latest work, I developed a web application using the MERN stack (MongoDB, Express, React, Node.js). I hosted the backend on Render, which is an excellent platform for scalability and reliability.
                </p>
                <button className='btn btn-sm text-xs'>View all projects</button>
              </div>
              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[220px] w-full'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={Img1} alt="" />
                {/* pretittle and tittle */}
                <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-gradient text-sm'>Web Development</span>
                </div>
                <div className='absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-2xl text-white'>E-commerce Website</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col gap-y-8'>
              {/* image 1 */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[220px] w-full'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={Img2} alt="" />
                {/* pretittle and tittle */}
                <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-gradient text-sm'>App Design</span>
                </div>
                <div className='absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-2xl text-white'>Mobile App UI</span>
                </div>
              </div>
              {/* image 2 */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[220px] w-full'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={Img3} alt="" />
                {/* pretittle and tittle */}
                <div className='absolute -bottom-full left-8 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-gradient text-sm'>UI/UX Design</span>
                </div>
                <div className='absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-2xl text-white'>Dashboard Interface</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Work;
