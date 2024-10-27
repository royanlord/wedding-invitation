'use client'

import useOpen from "@/stores/store"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

const CoverInvitation = () => {
    const { isOpen } = useOpen()
    const [playing, setPlaying] = useState<boolean>(false)

    useEffect(() => {
        if (isOpen) {
            setPlaying(true)
        }
    }, [isOpen]);

    return (
        <div 
            className="w-8/12 h-screen lg:block hidden fixed top-0 left-0"
            style={{ 
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.2)'
            }}
        >
            <div className="my-10 mx-10 text-white">
                <h1 className="text-lg font-bold uppercase">Wedding Announcement</h1>
                <h1 className="text-7xl mt-5 w-1/2 font-butler">TIFFANY & JARED</h1>
                <p className="mt-8 w-3/4 text-lg font-newsreaderitalic">
                    <q>
                        Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada.
                    </q>
                </p>
                <p className="w-3/4 text-lg font-newsreaderitalic">
                    &ndash; Sapardi Djoko Damono
                </p>
            </div>
            <div className="hidden">
                <ReactPlayer
                    url="https://music.youtube.com/watch?v=f1De87ETXwo&si=-dgZp1ZbGSsnfvDu" // Ganti dengan path file audio Anda
                    playing={playing}
                    controls={false}
                    loop={true}
                />
            </div>
        </div>
    )
}

export default CoverInvitation