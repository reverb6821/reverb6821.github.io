import React from 'react'
import { Hero } from '../Pages/Hero/Hero'
import { About } from '../Pages/About/About'
import { Skills } from '../Pages/Skills/Skills'
import { Portfolio } from '../Pages/Portfolio/Portfolio'

export const Main = ({
    didScroll,
    handleToast,
    heroRef,
    skillsRef,
    projectRef,
    aboutRef,
}: any) => {
    return (
        <>
            <Hero
                didScroll={didScroll}
                handleToast={handleToast}
                heroRef={heroRef}
            />
            <About aboutRef={aboutRef} />
            <Skills skillsRef={skillsRef} />
            <Portfolio projectRef={projectRef} />
        </>
    )
}
