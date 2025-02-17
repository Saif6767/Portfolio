import React from 'react'
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants.jsx';
//form validation
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit =async (data) => {
        const useInfo ={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
          await  axios.post("https://getform.io/f/bolmlkza",useInfo);
          toast.success("Your message has been sent");
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }


    return (
        <>
            <section className='py-16 lg:section' id='contact'>
                <div className="container mx-auto">
                    <div className='flex flex-col lg:flex-row'>
                        {/* text */}
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex-1 flex justify-start items-center'>
                            <div>
                                <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                                <h2 className='text-[75px] lg:[90px] leading-none mb-12'>
                                    Let's work <br />together!
                                </h2>
                            </div>
                        </motion.div>
                        {/* form */}
                        <motion.form
                            onSubmit={handleSubmit(onSubmit)}
                            // action="https://getform.io/f/bolmlkza"
                            // method="POST"
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex-1  flex flex-col gap-y-6 pb-24 p-6 items-start'>
                            <input
                                {...register("name", { required: true })}
                                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                                name="name"
                                type="text"
                                placeholder='Your name' />
                            {errors.name && <span>This field is required</span>}
                            <input
                                {...register("email", { required: true })}
                                className='bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                                name="email"
                                type="email"
                                placeholder='Your email' />
                            {errors.email && <span>This field is required</span>}
                            <textarea
                                {...register("message", { required: true })}
                                className='bg-transparent border-b py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-2'
                                name="message"
                                placeholder='Your message'>
                            </textarea>
                            {errors.message && <span>This field is required</span>}
                            <button className='btn btn-lg' type='submit'>Send message</button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
