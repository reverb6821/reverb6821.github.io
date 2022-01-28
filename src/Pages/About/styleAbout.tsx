import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.section)`
    padding-top: 140px;
    padding-bottom: 100px;
    padding-left: 170px;
    padding-right: 170px;
    margin: 0px auto;
    max-width: 1600px;
    min-height: auto;
    color: white;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
    @media only screen and (max-width: 450px) {
        padding-left: 23px;
        padding-right: 23px;
        min-height: auto;
        max-width: auto;
        padding-top: 50px;
        padding-bottom: 100px;
    }
`

export const Title = styled(motion.div)`
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 48px;
    padding-bottom: 0.5em;
    @media only screen and (max-width: 450px) {
        height: 35px;
    }
`

export const TitleText = styled.h1`
    font-size: 32px;
    padding-right: 0.7em;
    padding-left: 1em;
    color: #d82625;
    font-family: 'Lato', sans-serif;
    @media only screen and (max-width: 450px) {
        font-size: 22px;
    }
`

export const Line = styled.div`
    content: '';
    display: block;
    width: 75%;
    height: 0px;
    border-bottom: 0.5px solid #ffffff5e;
    background-color: #d82625;
    @media only screen and (max-width: 450px) {
        width: 45%;
    }
`

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4em;
    @media only screen and (max-width: 450px) {
        padding-top: 1em;
    }
`

export const TextContainer = styled.div`
    width: 90%;
    text-align: center;
    line-height: 30px;
    svg {
        color: none;
    }
    @media only screen and (max-width: 450px) {
        width: 100%;
        padding: 0 1em;
    }
`
