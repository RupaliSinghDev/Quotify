import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CardComponent = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px', // Adjust the root margin as needed
  });

  const [copied, setCopied] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    let timeoutId;
    if (showCopyMessage) {
      timeoutId = setTimeout(() => {
        setShowCopyMessage(false);
      }, 3000); // Message disappears after 3 seconds
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showCopyMessage]);

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 1.2 } },
  };

  // Function to handle copying the link to the clipboard
  const copyLinkToClipboard = () => {
    const link = 'quotify-api.vercel.app/'; 
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setShowCopyMessage(true);
      })
      .catch((error) => console.error('Error copying link:', error));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.h1
        className='text-4xl lg:text-6xl font-bold text-center mb-12'
        initial='hidden'
        animate={controls}
        variants={headingVariants}
        ref={ref}
      >
        How To Use
      </motion.h1>
      <div className="w-11/12 max-w-screen-lg mx-auto bg-slate-900 shadow-md rounded-lg overflow-hidden p-5 mb-2">
        <motion.div
          className="p-8 flex flex-col items-center" // Center content vertically
          initial='hidden'
          animate={controls}
          variants={cardVariants}
          ref={ref}
        >
          <p className="mt-2 mb-8 text-white text-center">To use the API, copy the link below or read the documentation for more information.</p>
          
          <div className="flex items-center mb-9">
            <input
              type="text"
              readOnly
              value="quotify-api.vercel.app/" // Replace with your desired link
              className="bg-gray-200 px-2 py-1 rounded-md text-sm mr-2"
            />
            <button
              onClick={copyLinkToClipboard}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
            >
              Copy Link
            </button>
          </div>
          {showCopyMessage && <div className="text-green-500">Link copied successfully!</div>}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#333' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex gap-5 items-center px-10 py-6 bg-gray-700 rounded-full text-white'
          >
            Read Docs
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='w-3 h-3 bg-white rounded-full'
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CardComponent;
