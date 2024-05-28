// src/ContactForm.js
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px', // Adjust the root margin as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 1.2 } },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={formVariants}
        className="w-96 mx-auto mt-10 p-5 bg-[#9aa9b8] shadow-lg rounded-lg transform transition duration-700 ease-in-out"
      >
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-blue-900"
          initial='hidden'
          animate={controls}
          variants={formVariants}
        >
          Contact Us
        </motion.h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full border border-blue-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border border-blue-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 block w-full border border-blue-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#333' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Send
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
