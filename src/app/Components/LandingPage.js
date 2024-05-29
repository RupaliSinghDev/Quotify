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
    <div className='w-full h-screen bg-[#f0f4f8] pt-2' style={{ backgroundImage: 'url("/Background.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <motion.div
        initial='initial'
        animate='animate'
        variants={textContainerVariants}
        className='textstructure mt-40 px-20'
      >
        <div className='masker'>
          <motion.h1
            className='text-[8vw] leading-[6vw] tracking-tighter font-bold uppercase text-white'
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




/*import { motion } from 'framer-motion';
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
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Background.png")' }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={textContainerVariants}
          className="text-center px-10 md:px-20 lg:px-40"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold uppercase mb-4"
            variants={textVariants}
          >
            Quotify
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6"
            variants={textVariants}
          >
            Inspire Your Code
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8"
            variants={textVariants}
          >
            Welcome to Quotify, your ultimate API solution for accessing a vast collection of quotes across different languages. 
            Integrate our API to bring inspiration to your applications, websites, or services.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <a
              href="/documentation"
              className="py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vast Collection",
                description: "Access to thousands of quotes in multiple languages."
              },
              {
                title: "Easy Integration",
                description: "Seamlessly integrate with RESTful API endpoints."
              },
              {
                title: "Advanced Search",
                description: "Search and filter quotes by author, language, and more."
              },
              {
                title: "Random Quotes",
                description: "Get random quotes for daily inspiration."
              },
              {
                title: "High Performance",
                description: "Optimized for fast and reliable performance."
              },
              {
                title: "Scalable",
                description: "Designed to scale with your application's needs."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 20,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2 * index,
                      duration: 0.5,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    },
                  },
                }}
                className="bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">&copy; 2024 Quotify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;*/
