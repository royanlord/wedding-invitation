'use client'

import OpenButton from "../openbutton/OpenButton"

const WelcomingCover = () => {
    return (
        <div 
            className="w-full h-screen flex items-center justify-center"
            style={{ 
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.2)'
            }}
        >
            <div className="mx-10 text-white">
                <h1 className="text-lg font-bold uppercase text-center">Wedding Announcement</h1>
                <div className="mt-48 mb-14 text-4xl text-center">
                    <h1 className="font-butler">TIFFANY & JARED</h1>
                    <h2 className="font-newsreaderitalic mt-3">#TImetoshaRE</h2>
                </div>
                <div className="flex justify-center">
                    <OpenButton />
                    {/* <Button variant="solid" size='sm'>Open</Button> */}
                </div>
            </div>
        </div>
    )
}

export default WelcomingCover