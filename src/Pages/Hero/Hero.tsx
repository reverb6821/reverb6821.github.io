import React, { useState } from 'react'
import { ArrowheadDown } from '@styled-icons/evaicons-solid'
import {
    Container,
    Content,
    Intro,
    Title,
    FirstTitle,
    SubTitle,
    ScrollDown,
    ScrollDownContainer,
    bounceTransition,
} from './heroStyle'

export const Hero = ({ didScroll, handleToast, heroRef }: any) => {
    const [count, setCount] = useState(0)

    const variants = {
        scroll: { opacity: 0 },
        noScroll: { y: ['0%', '-50%'] },
    }

    const handleDrag = () => {
        const newCount = count + 1
        setCount(newCount)
        if (count > 2) handleToast('Stop doing this! ⛔️')
    }

    return (
        <Container ref={heroRef}>
            <Content>
                <Intro>
                    <FirstTitle>hello_world!</FirstTitle>
                    <Title
                        drag
                        dragConstraints={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        dragTransition={{
                            bounceStiffness: 500,
                            bounceDamping: 7,
                        }}
                        onDragEnd={handleDrag}
                        initial={{ y: -300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Giuseppe{' '}
                        <span style={{ color: 'white' }}> Gigliotti</span>
                        <br />
                        <span style={{ color: 'white' }}>I create</span>
                        things
                        <span style={{ color: 'white' }}>for the web</span>
                    </Title>
                    <SubTitle
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p>Full Stack developer based in Italy.</p>
                    </SubTitle>
                </Intro>
            </Content>
            <ScrollDown>
                <ScrollDownContainer
                    didScroll={didScroll}
                    variants={variants}
                    transition={bounceTransition}
                    animate={didScroll ? 'scroll' : 'noScroll'}
                >
                    Scroll Down
                    <ArrowheadDown />
                </ScrollDownContainer>
            </ScrollDown>
        </Container>
    )
}
