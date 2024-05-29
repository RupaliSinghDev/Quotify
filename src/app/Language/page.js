// src/PhotoGallery.js
"use client"
import React from 'react';
import Navbar from '../Components/Navbar';

const Language = () => {
  const photos = [
    { src: '/English.jpg', alt: 'Photo 1', desc: 'English', link: '/English' },
    { src: '/Bhagvad-Gita_cp.png', alt: 'Photo 2', desc: 'Hindi', link: '/Hindi'},
    { src: '/Japanese.png', alt: 'Photo 3', desc: 'Japanese', link: '/Japanese' }
  ];

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen bg-[#bed5ec] flex flex-col items-center">
      <nav className="w-full">
        <Navbar />
      </nav>

      <header className="w-full text-black p-4 mt-6 mb-6">
        <h1 className="text-center text-6xl font-bold">Echoes Across Language</h1>
      </header>
      
      <div className="flex flex-grow items-center justify-center w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="w-80 h-80 relative rounded shadow-lg cursor-pointer ml-12 mr-2" // Adjust margins here
                onClick={() => handleClick(photo.link)}
              >
                <img src={photo.src} alt={photo.alt} className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 text-white text-4xl font-bold">
                  {photo.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
