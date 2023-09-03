import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div 
      variants={slideIn('left','tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Name</span>
            <input id="name" name="name" onChange={handleChange} value={form.name} type="text" className="bg-tertiary py-4 px-6 rounded-lg border-b-2 border-white-100 focus:outline-none placeholder:text-secondary text-white-100 font-medium" placeholder="What's your name?" />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Email</span>
            <input id="email" name="email" onChange={handleChange} value={form.email} type="email" className="bg-tertiary py-4 px-6 rounded-lg border-b-2 border-white-100 focus:outline-none placeholder:text-secondary text-white-100 font-medium" placeholder="What's your email?" />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Message</span>
            <textarea rows="7" id="message" name="message" onChange={handleChange} value={form.message} type="text" className="bg-tertiary py-4 px-6 rounded-lg border-b-2 border-white-100 focus:outline-none placeholder:text-secondary text-white-100 font-medium" placeholder="What do you want to say?" />
          </label>

          <button type="submit" className="bg-tertiary py-4 px-8 rounded-xl w-fit text-white font-bold shadow-primary shadow-md">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div 
      variants={slideIn('right','tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");