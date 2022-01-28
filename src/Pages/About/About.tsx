/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import styled from 'styled-components'

import {
    Container,
    Title,
    TitleText,
    Line,
    Body,
    TextContainer,
} from './styleAbout'

type props = {
    space?: any[]
}

const Text = styled.p<props>`
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding-bottom: ${(props) => (props.space ? '1em' : '0')};
    font-size: 22px;
    text-align: justify;
    padding-left: 1em;
    @media only screen and (max-width: 450px) {
        padding: 0em;
        margin: 0em;
        font-size: 15px;
        text-align: center;
        line-height: 25px;
        letter-spacing: 1px;
        word-spacing: 4px;
    }
`
export const About = ({ aboutRef }: any) => {
    return (
        <Container ref={aboutRef}>
            <Title>
                <TitleText>About Me</TitleText>
                <Line />
            </Title>
            <Body>
                <TextContainer>
                    <Text>
                        I describe myself as a passionate developer who loves
                        coding, open source, and the web platform.
                    </Text>
                    <br />
                    <Text>
                        Ever since I was a child I was been passionate about
                        science and technology, apassion born when the first PC
                        with Windows95 and 56k modem arrived at home.
                    </Text>
                    <br />
                    <Text>
                        From that moment it has been a continuous devouring
                        everything related to technology, going to deepen the
                        web development after discovering{' '}
                        <strong style={{ color: '#D82625' }}>Javascript</strong>{' '}
                        with its runtime{' '}
                        <strong style={{ color: '#D82625' }}>Node.JS</strong>.
                        and the UI library{' '}
                        <strong style={{ color: '#D82625' }}>React.JS</strong>
                    </Text>
                    <br />
                    <Text>
                        Aside from my job, I like to create and contribute to
                        open source projects and learn new things. That helps me
                        to learn a ton of new stuff, grow as a developer and
                        support other open source projects Over the years I have
                        dealt personally and hobbyist with the development of
                        small programs and bots, for the development and
                        management of my personal passions, which has recently
                        led me to decide to field my knowledge also from a
                        professional point of view , increasing my theoretical
                        training and developing that practice.
                    </Text>
                </TextContainer>
            </Body>
        </Container>
    )
}
