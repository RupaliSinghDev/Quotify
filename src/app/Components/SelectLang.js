import React, { useState, useRef } from 'react';
import Link from 'next/link';

const SelectLang = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const sliderRef = useRef(null);

    const cards = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggkafG9hHtUhy2kkivcX1Ib7ueKyLtOcfSq2iLoOnSg&s',
            title: 'English',
            link: '/English',
        },
        {
            image: 'https://www.devvratyoga.com/wp-content/uploads/2022/09/Bhagvad-Gita.png',
            title: 'Hindi',
            link: '/Hindi',
        },
        {
            image: 'https://stability-images-upload.s3.amazonaws.com/v1_txt2img_9397da60-9430-4300-8255-d3fb4e62757e.png',
            title: 'Japanese',
            link: '/Japanese',
        },
    ];

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -350, // Adjust the value based on your card width
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 350, // Adjust the value based on your card width
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative flex bg-[#f0f4f8] justify-center items-center h-screen overflow-hidden">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md opacity-50 hover:opacity-100"
                onClick={scrollLeft}
            >
                {'<'}
            </button>
            <div
                ref={sliderRef}
                className="flex space-x-4"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-96 h-72 transition-transform transform hover:scale-105"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link key={card.id} href={card.link}>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full rounded-lg object-cover"
                            />
                            {hoveredIndex === index && (
                                <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Show More
                                </button>
                            )}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md opacity-50 hover:opacity-100"
                onClick={scrollRight}
            >
                {'>'}
            </button>
        </div>
    );
};

export default SelectLang;
