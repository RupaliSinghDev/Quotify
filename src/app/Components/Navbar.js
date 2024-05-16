import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-white font-bold text-lg">Quotify
            </Link>
          </div>
          <ul className="flex">
            <li className="ml-6">
              <Link href="/" className="text-white hover:text-gray-300">Home
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/Language" className="text-white hover:text-gray-300">Language
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 


  
