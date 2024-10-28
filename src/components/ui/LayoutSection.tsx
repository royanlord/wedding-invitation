'use client'

import OpeningSection from "./opening/OpeningSection"
import WelcomingSection from "./welcoming/WelcomingSection"

const LayoutSection = () => {
    return (
        <>
            <WelcomingSection id="section1" />
            <OpeningSection id="section2" />
        </>
    )
}

export default LayoutSection