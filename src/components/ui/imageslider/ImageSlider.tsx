'use client'

import Image from "next/image";
import WeddingOne from '@/assets/wedding-1.jpg'
import WeddingTwo from '@/assets/wedding-2.jpg'
import WeddingThree from '@/assets/wedding-3.jpg'
import WeddingFour from '@/assets/wedding-4.jpg'
import WeddingFive from '@/assets/wedding-5.jpg'
import { useState } from "react";


const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    const images = [
        WeddingOne, WeddingTwo, WeddingThree, WeddingFour, WeddingFive
    ];

    const extendedImages = [images[images.length - 1], ...images, images[0]];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === extendedImages.length - 2) {
                return 1;
            }
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 1) {
                return extendedImages.length - 2;
            }
            return prevIndex - 1;
        });
    };

    return (
        <div className="relative w-full">
            <div className="flex justify-center items-center overflow-hidden w-full">
                <div 
                    className='flex transition-transform duration-500 gap-3'
                    style={{ transform: `translateX(-${(currentIndex - 1) * 53.3333}%)` }}
                >
                    {extendedImages.map((image, index) => (
                        <div 
                            key={index} 
                            className={`transition-transform duration-500 ${
                                index === currentIndex
                                    ? 'scale-120 z-10'
                                    : 'scale-90 opacity-60'
                            } min-w-[43.3333%] flex justify-center items-center`}
                            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1' }}
                        >
                            <Image 
                                src={image}
                                alt={`Image ${index}`} 
                                width={800}
                                height={800}
                                className="object-cover w-full h-full rounded-md"
                                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 mx-2 my-8 justify-end">
                <button 
                    className="px-5 py-1 opacity-50 hover:opacity-100 rounded-md bg-[#f8f7f3] border-2 border-solid border-black"
                    onClick={prevSlide}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512"
                        width="20" 
                        height="20" 
                        fill="black"
                    >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5 0-45.3l-192 192z"/>
                    </svg>
                </button>
                <button 
                    className="px-5 py-1 opacity-50 hover:opacity-100 rounded-md bg-[#f8f7f3] border-2 border-solid border-black"
                    onClick={nextSlide}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512"
                        width="20" 
                        height="20" 
                        fill="black"
                    >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
                </button>
            </div>
        </div>
    )
}

export default ImageSlider;
