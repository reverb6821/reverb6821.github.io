import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import Theme from './assets/style/Theme'

import { Navbar } from './Components/partials/navbar/Navbar'
import { Sidebar } from './Components/partials/sidebar/Sidebar'
import { Main } from './view/Main'

const AppContainer = styled.div`
    background: #1e1e1e;
    font-family: 'Lato', sans-serif; ;
`

function App(): any {
    const [scrollProgress, setScrollProgress] = useState('20%')
    const [didScroll, setDidScroll] = useState(false)
    const [isSafari, setIsSafari] = useState(false)

    const heroRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectRef = useRef(null)

    useEffect(() => {
        listenToScrollEvent()
        const ua = navigator.userAgent.toLowerCase()
        if (ua.indexOf('safari') !== -1) {
            if (ua.indexOf('chrome') > -1) {
                setIsSafari(false) // Chrome
            } else {
                setIsSafari(true) // Safari
            }
        }
    }, [])

    const listenToScrollEvent = () => {
        document.addEventListener('scroll', () => {
            let scrolled: any
            const yPos = window.scrollY
            if (yPos < 150) scrolled = `20%`
            if (yPos > 140) setDidScroll(true)
            if (yPos > 150) {
                scrolled = `${((yPos - 140) * 20) / 720 + 20}%`
            }
            if (yPos > 860) {
                scrolled = `${((yPos - 860) * 20) / 650 + 40}%`
            }
            if (yPos > 1510) {
                scrolled = `${((yPos - 1510) * 20) / 650 + 60}%`
            }
            if (yPos > 2160) {
                scrolled = `${((yPos - 2160) * 20) / 2720 + 80}%`
            }
            if (yPos > 4880) scrolled = `100%`

            return setScrollProgress(scrolled)
        })
    }

    const handleScroll = (e: any) => {
        const { id } = e.currentTarget
        if (id === 'intro') return scrollToRef(heroRef)
        if (id === 'about') return scrollToRef(aboutRef)
        if (id === 'skills') return scrollToRef(skillsRef)
        // if (id === 'exp') return scrollToRef(expRef)
        // if (id === 'project') return scrollToRef(projectRef)

        return scrollToRef(heroRef)
    }

    const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)

    const handleToast = (msg: any) => {
        setToast((oldVal) => [...oldVal, msg])
        setTimeout(() => {
            setToast((oldState) => oldState.splice(1, 1))
        }, 3000)
    }

    return (
        <Theme>
            <AppContainer>
                <Navbar
                    isSafari={isSafari}
                    scrollProgress={scrollProgress}
                    handleScroll={handleScroll}
                    setDidScroll={setDidScroll}
                />
                <Sidebar handleToast={handleToast} />

                <Main
                    heroRef={heroRef}
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    projectRef={projectRef}
                    didScroll={didScroll}
                />
            </AppContainer>
        </Theme>
    )
}

export default App
function setToast(arg0: (oldVal: any) => any[]) {
    throw new Error('Function not implemented.')
}
