import { motion } from 'framer-motion';
import React from 'react';

// Variants for staggered animation of child elements
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // Staggering child animations
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const Approach = () => {
  return (
    <>
      <motion.h1
        initial='initial'
        animate='animate'
        variants={containerVariants}
        className='text-4xl bg-[#f0f4f8] font-semibold text-center' // Smaller, more balanced text size
      >
        Our Approach:
      </motion.h1>
      <motion.div
        initial='initial'
        animate='animate'
        variants={containerVariants}
        className='w-full py-20 bg-[#f0f4f8] text-gray-800' // Light background, dark text
      >
        <motion.div
          className='flex flex-col items-center justify-center' // Centering content
          variants={containerVariants}
        >
          <motion.h1
            variants={textVariants}
            className='text-[1.5vw] leading-[3.5vw] tracking-tight text-center' // Centered text
          >

            Introducing Quotify: a cutting-edge website featuring a custom-built API for generating quotes in multiple languages. Tailored for seamless performance and integration, Quotify allows users to discover inspirational quotes across cultures effortlessly. Perfect for personal motivation, social media enhancement, and daily wisdom, Quotify brings a world of inspiration to your fingertips.
          </motion.h1>

          <motion.div
            variants={textVariants}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
            className='w-full border-t-[2px] pt-10 mt-20 border-gray-500' // Slightly thicker border
          />

          <motion.div
            variants={textVariants}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
            className='w-1/2 flex flex-col items-center' // Centered content
          >


            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#333' }} // Hover effect with scale and color change
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='flex gap-5 items-center px-10 py-6 mt-10 bg-gray-700 rounded-full text-white' // Darker button color
            >
              Read More
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className='w-3 h-3 bg-white rounded-full' // White dot on button
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Approach;
