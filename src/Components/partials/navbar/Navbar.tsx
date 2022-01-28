import React from 'react'
import styled from 'styled-components'

import {
    HeaderContainer,
    HeaderTextContainer,
    HeaderText,
    HeaderLine,
} from './navbarStyle'

type props = {
    scroll: any
    isSafari: any
}

const Header = styled.div<props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background: #1f1f1f;
    background: linear-gradient(
        to right,
        #d82625 ${(props) => props.scroll},
        white 0
    );
    color: ${(props) => (props.isSafari ? 'white' : 'transparent')};
    -webkit-background-clip: text;
    @media only screen and (max-width: 800px) {
        width: 90%;
    }
    @media only screen and (max-width: 350px) {
        width: 95%;
    }
`

export const Navbar = ({ isSafari, handleScroll, scrollProgress }: any) => {
    return (
        <HeaderContainer>
            <Header isSafari={isSafari} scroll={scrollProgress}>
                <HeaderTextContainer id="intro" onClick={handleScroll}>
                    <HeaderText>Intro</HeaderText>
                </HeaderTextContainer>
                <HeaderLine />
                <HeaderTextContainer id="about" onClick={handleScroll}>
                    <HeaderText>About</HeaderText>
                </HeaderTextContainer>
                <HeaderLine />
                <HeaderTextContainer id="skills" onClick={handleScroll}>
                    <HeaderText>Skills</HeaderText>
                </HeaderTextContainer>
                <HeaderLine />
                <HeaderTextContainer id="project" onClick={handleScroll}>
                    <HeaderText>Projects</HeaderText>
                </HeaderTextContainer>
            </Header>
        </HeaderContainer>
    )
}
