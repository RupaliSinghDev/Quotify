// src/PhotoGallery.js
"use client"
import React from 'react';
import Navbar from '../Components/Navbar';

const English = () => {
  const photos = [
    { src: '/Ins_CP.jpg', alt: 'Inspiration', desc: 'Inspiration', link: '/English/Inspiration' },
    { src: '/Love_cp.jpg', alt: 'Love', desc: 'Love', link: '/English/Love' },
    { src: '/nature_cp.jpg', alt: 'Nature and Harmony', desc: 'Nature', link: '/English/Nature-and-harmony' },
    { src: '/friends_cp.png', alt: 'Friendship', desc: 'Friendship', link: '/English/Friendship' },
    { src: '/success_cp.jpg', alt: 'Success', desc: 'Success', link: '/English/Success' },
    { src: '/happiness_cp.jpg', alt: 'Happiness', desc: 'Happiness', link: '/English/Happiness' },
    { src: '/peace_cp.png', alt: 'Wisdom and Knowledge', desc: 'Wisdom', link: '/English/Wisdom-and-knowledge' },
    { src: '/life_cp.jpg', alt: 'Life', desc: 'Life', link: '/English/Life' },
    { src: '/wisdom_cp.jpg', alt: 'Peace and Solitude', desc: 'Peace', link: '/English/Peace-and-solitude' },
    
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center overflow-x-hidden" style={{ backgroundImage: 'url("/EngThm_bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <nav className="w-full">
        <Navbar />
      </nav>

      <header className="w-full text-white p-4 mt-6 mb-6">
        <h1 className="text-center text-6xl font-bold">Themes for you</h1>
      </header>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <a 
              key={index} 
              href={photo.link} 
              className="w-80 h-80 border-white relative rounded shadow-xl cursor-pointer block"
            >
              <img src={photo.src} alt={photo.alt} className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 text-white text-4xl font-bold">
                {photo.desc}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default English;
