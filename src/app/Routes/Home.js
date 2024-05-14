import { motion } from 'framer-motion';
import React from 'react';

const textContainerVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-100 pt-2'>
      <motion.div
        initial='initial'
        animate='animate'
        variants={textContainerVariants}
        className='textstructure mt-40 px-20'
      >
        <div className='masker'>
          <motion.h1
            className='text-[8vw] leading-[6vw] tracking-tighter font-bold uppercase'
            variants={textVariants}
          >
            quotify
          </motion.h1>
        </div>
        {['Echoes Across', 'Languages'].map((item, index) => (
          <div className='masker' key={index}>
            <motion.div
              initial='initial'
              animate='animate'
              variants={textVariants}
              className='w-fit flex items-end'
            >
              {index === 0 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '9vw' }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className='rounded-md flex items-end w-[9vw] h-[5vw] -top[1.2vw] bg-red-500'
                ></motion.div>
              )}
              <motion.h1
                className='text-[5vw] leading-[6.5vw] tracking-tighter font-bold uppercase'
              >
                {item}
              </motion.h1>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='border-t-[1px] border-zinc-800 mt-28'
      >
       
      </motion.div>
    </div>
  );
};

export default Home;