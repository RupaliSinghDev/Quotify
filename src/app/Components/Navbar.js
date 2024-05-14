import React from 'react'

// components/Navbar.js
// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-lg font-bold">
//           <Link href="/">
          
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <Link href="/" className="text-white">Home
//           </Link>
//           <Link href="/about" className="text-white">About
//           </Link>
//           <Link href="/contact" className="text-white">Contact
//           </Link>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button
//             className="text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <Link href="/" className="block text-white px-2 py-1">Home
//           </Link>
//           <Link href="/about" className="block text-white px-2 py-1">About
//           </Link>
//           <Link href="/contact" className="block text-white px-2 py-1">Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-white font-bold text-lg">Logo
            </Link>
          </div>
          <ul className="flex">
            <li className="ml-6">
              <Link href="/" className="text-white hover:text-gray-300">Home
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/about" className="text-white hover:text-gray-300">About
              </Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

