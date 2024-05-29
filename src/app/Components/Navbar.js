import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-white font-bold text-lg">Quotify</Link>
        </div>
        <div className="block lg:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            whileTap={{ scale: 0.95 }} // Clicking effect
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </motion.button>
        </div>
        <ul className="hidden lg:flex space-x-6">
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
            >
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
            >
              <Link href="/Language" className="text-white hover:text-gray-300">Language</Link>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
            >
              <Link href="https://rupalisinghdev-organization.gitbook.io/quotify_api/" className="text-white hover:text-gray-300">Docs</Link>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
            >
              <Link href="/Contact" className="text-white hover:text-gray-300">Contact</Link>
            </motion.button>
          </li>
        </ul>
      </div>
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
      <div className={`fixed right-0 top-0 h-full bg-gray-800 w-64 transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="p-4 space-y-6">
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
              onClick={toggleMenu}
            >
              <Link href="/" className="text-white hover:text-gray-300" >Home</Link>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
              onClick={toggleMenu}
            >
              <Link href="/Language" className="text-white hover:text-gray-300" >Language</Link>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
              onClick={toggleMenu}
            >
              <Link href="https://rupalisinghdev-organization.gitbook.io/quotify_api/" className="text-white hover:text-gray-300" >Docs</Link>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.95 }} // Clicking effect
              onClick={toggleMenu}
            >
              <Link href="/Contact" className="text-white hover:text-gray-300" >Contact</Link>
            </motion.button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
