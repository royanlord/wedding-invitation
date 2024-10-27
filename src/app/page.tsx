'use client'
import CoverInvitation from "@/components/ui/cover/CoverInvitation";
import WelcomingCover from "@/components/ui/welcoming/WelcomingCover";
import WelcomingSection from "@/components/ui/welcoming/WelcomingSection";
import useOpen from "@/stores/store";

export default function Home() {
    const { isOpen } = useOpen();
    return (
        <div className="w-full lg:flex">
            <CoverInvitation />
            <div className="lg:ml-[66.6667%] w-full h-screen">
                {isOpen === true ? (
                    <div className="w-full">
                      <WelcomingSection />
                    </div>
                ) : (
                    <WelcomingCover />
                )}
            </div>
        </div>
    );
}
