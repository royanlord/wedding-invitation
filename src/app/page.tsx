'use client'
import CoverInvitation from "@/components/ui/cover/CoverInvitation";
import LayoutSection from "@/components/ui/LayoutSection";
import WelcomingCover from "@/components/ui/welcoming/WelcomingCover";
import useOpen from "@/stores/store";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const { isOpen } = useOpen();
    const route = useRouter();

    useEffect(() => {
        AOS.init()
    }, [])
    
    useEffect(() => {
        if (!isOpen) {
            route.push('/')
        }

    }, [isOpen, route]);

    return (
        <div className="w-full lg:flex">
            <CoverInvitation />
            <div className="lg:ml-[66.6667%] w-full h-screen">
                {isOpen === true ? (
                    <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
                        <LayoutSection />
                    </div>
                ) : (
                    <WelcomingCover />
                )}
            </div>
        </div>
    );
}
