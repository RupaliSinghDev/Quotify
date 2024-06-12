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

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-[#9facb9] pt-2' style={{ backgroundImage: 'url("/Background.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <motion.div
        initial='initial'
        animate='animate'
        variants={textContainerVariants}
        className='textstructure mt-40 px-20'
      >
        <div className='masker'>
          <motion.h1
            className='text-[8vw] leading-[6vw] tracking-tighter font-["DINNextRoundedLTPro"] font-bold uppercase text-white'
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
              className='w-fit flex font-["DINNextRoundedLTPro"] items-end'
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
                className='text-[5vw] leading-[6.5vw] tracking-tighter semi-bold font-momo text-white'
              >
                {item}
              </motion.h1>
            </motion.div>
          </div>
        ))}
      </motion.div>
      
    </div>
  );
};

export default LandingPage; 




