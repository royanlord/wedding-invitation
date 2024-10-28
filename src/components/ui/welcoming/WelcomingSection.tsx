'use client'

import { useEffect, useState } from "react";
import WeddingOne from '@/assets/wedding-1.jpg'
import WeddingTwo from '@/assets/wedding-2.jpg'
import WeddingThree from '@/assets/wedding-3.jpg'
import WeddingFour from '@/assets/wedding-4.jpg'
import WeddingFive from '@/assets/wedding-5.jpg'

interface WelcomingSectionProps {
    id: string;
}

const WelcomingSection = ({ id }: WelcomingSectionProps) => {
    const images = [
        WeddingThree, WeddingTwo, WeddingOne, WeddingFour, WeddingFive
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 1000);

        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div id={id} className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-70'}`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex].src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                <div className="relative z-10 text-white mx-10">
                    <h1 className="text-lg font-bold uppercase text-center">Wedding Announcement</h1>
                    <div className="mt-48 mb-14 text-4xl text-center">
                        <h1 className="font-butler">TIFFANY & JARED</h1>
                        <h2 className="font-newsreaderitalic mt-3">#TImetoshaRE</h2>
                    </div>
                </div>

                <div className="pt-48 w-full relative z-10">
                    <div 
                        className="float-end pe-10 flex items-center gap-2 cursor-pointer"
                        onClick={() => window.location.href = "#section2"}
                    >
                        <span className="text-white font-semibold">
                            SCROLL TO BEGIN
                        </span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 448 512"
                            width="28" 
                            height="28" 
                            fill="white"
                        >
                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomingSection