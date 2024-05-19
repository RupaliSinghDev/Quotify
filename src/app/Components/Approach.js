import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const Approach = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animations every time the element comes into view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <motion.h1
        className='text-4xl lg:text-6xl bg-[#f0f4f8] font-bold text-center mt-20 mb-8'
        initial='hidden'
        animate={controls}
        variants={headingVariants}
      >
        Our Approach:
      </motion.h1>
      <div
        ref={ref}
        className='relative w-full py-20 bg-[#f0f4f8] text-gray-800 overflow-x-hidden' // Ensure no horizontal overflow
      >
        <motion.div
          className='flex flex-col lg:flex-row justify-between items-center lg:items-start w-full px-4 lg:px-0' // Adjust to flex column for smaller screens
          initial='hidden'
          animate={controls}
          variants={textVariants}
        >
          <motion.div
            variants={textVariants}
            className='text-[5vw] lg:text-[1.5vw] leading-[7vw] lg:leading-[3.5vw] tracking-tight font-serif ml-7 lg:pl-8 lg:w-1/2 mb-8 lg:mb-0' // Adjust text size for responsiveness
          >
            Introducing Quotify: a cutting-edge website featuring a custom-built API for generating quotes in multiple languages. Tailored for seamless performance and integration, Quotify allows users to discover inspirational quotes across cultures effortlessly. Perfect for personal motivation, social media enhancement, and daily wisdom, Quotify brings a world of inspiration to your fingertips.
          </motion.div>

          <motion.div
            className='bg-gray-800 shadow-lg rounded-lg p-2 w-3/4 lg:w-1/4 mx-auto lg:mr-12 flex flex-col items-center' // Adjust width and margin for responsiveness
            initial='hidden'
            animate={controls}
            variants={cardVariants}
          >
            <img
              src='https://via.placeholder.com/150' // Replace with your image source
              alt='Special Offer'
              className='w-full h-auto rounded-lg mb-1'
            />
            {/* <h2 className='text-xl font-bold mb-4'>Special Offer</h2>
            <p className='text-gray-700 text-center'>Subscribe now and get a 20% discount on your first month!</p>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors'>
              Learn More
            </button> */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Approach;
