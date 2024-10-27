'use client'

import ImageSlider from "../imageslider/ImageSlider"

interface OpeningSectionProps {
    id: string;
}

const OpeningSection = ({ id }: OpeningSectionProps) => {
    return (
        <div
            id={id}
            className="h-screen flex flex-col"
        >
            <div className="mx-10 flex flex-col my-12 items-center ">
                <h1 className="font-bold text-center lg:w-2/5 w-2/4">
                    DEAR MR-MRS-MS, FAMILY & FRIENDS
                </h1>
                <div className="my-10" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="font-semibold font-butler text-center text-3xl">
                        Welcome to
                    </h2>
                    <h2 className="font-semibold font-butler text-center my-2 text-3xl">
                        Tiffany & Jared&rsquo;s
                    </h2>
                    <h2 className="font-semibold font-butler text-center text-3xl">
                        Wedding Website
                    </h2>
                </div>
                <p className="text-center italic font-newsreader w-11/12" data-aos="fade-up" data-aos-duration="1000">
                    Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
                </p>
            </div>
            <ImageSlider /> 
        </div>
    )
}

export default OpeningSection