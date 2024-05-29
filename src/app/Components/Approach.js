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
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className='bg-[#f0f4f8]'>
      <motion.h1
        className='text-4xl lg:text-6xl bg-[#f0f4f8] font-bold text-center mt-20 mb-8 font-mono tracking-tighter'
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
          className='flex flex-col lg:flex-row justify-between items-center lg:items-start w-full px-4 lg:px-0'
          initial='hidden'
          animate={controls}
          variants={textVariants}
        >
          <motion.div
            variants={textVariants}
            className='text-[5vw] lg:text-[1.5vw] leading-[7vw] lg:leading-[3.5vw] tracking-tight font-serif ml-7 lg:pl-8 lg:w-1/2 mb-8 lg:mb-0'
          >
            Introducing Quotify: a cutting-edge website featuring a custom-built API for generating quotes in multiple languages. Tailored for seamless performance and integration, Quotify allows users to discover inspirational quotes across cultures effortlessly. Perfect for personal motivation, social media enhancement, and daily wisdom, Quotify brings a world of inspiration to your fingertips.
          </motion.div>

          <motion.div
            className='bg-[#f0f4f8] p-0  mx-auto lg:mr-12 flex flex-col items-center'
            initial='hidden'
            animate={controls}
            variants={cardVariants}
          >
            <img
              src='/Approach.png' 
              alt=''
              className='w-[300px] h-[350px] object-cover rounded-lg mb-1 border-none'
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Approach;
