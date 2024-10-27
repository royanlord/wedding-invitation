'use client'

import useOpen from "@/stores/store"

const OpenButton = () => {
    const open = useOpen()

    const handleClick = () => {
        open.onOpen();
    };

    return (
        <div>
            <button 
                className="bg-white text-black py-1 px-8 italic font-newsreader"
                onClick={handleClick}
            >
                Open
            </button>
        </div>
    )
}

export default OpenButton