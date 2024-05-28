import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Explore = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const [clickedCard, setClickedCard] = useState(null);

  const handleClick = (cardName) => {
    setClickedCard(cardName);
    // You can add additional logic here when a card is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f4f8]">
      <motion.h1
        className="text-4xl lg:text-6xl font-bold text-center mb-16"
        initial="hidden"
        animate={controls}
        variants={headingVariants}
        ref={ref}
      >
        Explore Languages
      </motion.h1>
      <div className="flex justify-center items-start w-11/12 max-w-screen-lg mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
        <motion.div
          className="w-full lg:w-1/2 h-[440px] relative" // Decreased height for the large card
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          ref={ref}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick("English")}
        >
          <a href="/English" className="bg-white shadow-md rounded-lg overflow-hidden h-full group hover:opacity-80 transition-opacity duration-300">
            <img src="/English.jpg" alt="Large Card" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 text-white text-6xl font-bold">
              English
            </div>
          </a>
        </motion.div>
        <div className="flex flex-col w-full lg:w-1/2 space-y-8 h-[400px]">
          <motion.div
            className="flex-1 h-1/2 relative" // Adjusted height for each small card
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            ref={ref}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick("Hindi")}
          >
            <a href="/Hindi" className="bg-white shadow-md rounded-lg overflow-hidden h-full group hover:opacity-80 transition-opacity duration-300">
              <img src="/Bhagvad-Gita.png" alt="Small Card 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 text-white text-6xl font-bold">
                Hindi
              </div>
            </a>
          </motion.div>
          <motion.div
            className="flex-1 h-1/2 relative" // Adjusted height for each small card
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            ref={ref}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick("Japanese")}
          >
            <a href="/Japanese" className="bg-white shadow-md rounded-lg overflow-hidden h-full group hover:opacity-80 transition-opacity duration-300">
              <img src="/Japanese.png" alt="Small Card 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 text-white text-6xl font-bold">
                Japanese
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
