/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react'
import { Container, Title, TitleText, Line, Body } from './portfolioStyle'
import { Projects } from '../../Components/Project/Projects'

const useIsMobile = () => {
    const [isMobile, setIsMobile]: any = useState(null)
    useEffect(() => {
        const width = window.innerWidth
        setIsMobile(false)
        if (width < 450) setIsMobile(true)
    }, [])
    return isMobile
}

export const Portfolio = ({ projectRef }: any) => {
    const isMobile = useIsMobile()

    return (
        <Container ref={projectRef}>
            <Title>
                <TitleText>My Projects</TitleText>
                <Line />
            </Title>
            <Body>
                <Projects isMobile={isMobile} />
            </Body>
        </Container>
    )
}
