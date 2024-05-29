import { motion } from 'framer-motion';
import React from 'react';

const features = [
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
];

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const featureVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const KeyFeatures = () => {
  return (
    <div className="bg-[#837b9e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold mb-8 text-center text-black">Key Features</h2>
        <motion.div
          initial="initial"
          animate="animate"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl border border-gray-700 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-lg text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeatures;





