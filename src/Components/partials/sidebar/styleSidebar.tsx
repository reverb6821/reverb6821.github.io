import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SideContainer = styled.div`
    background: #1e1e1e;
    width: 40px;
    position: fixed;
    z-index: 10;
    text-align: center;
    color: white;
    @media only screen and (max-width: 800px) {
        display: none;
    }
`
export const LeftSideContainer = styled(SideContainer)`
    background-color: #1e1e1e;
    bottom: 0px;
    left: 40px;
    right: auto;
`
export const RightSideContainer = styled(SideContainer)`
    background-color: #1e1e1e;
    bottom: 0px;
    left: auto;
    right: 40px;
`
export const SideText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    margin: 10px auto;
    padding: 10px;
`

export const SideIcon = styled(motion.div)`
    padding: 0.5em 0;
    a {
        color: white;
        text-decoration: none;
    }
    svg {
        width: 22px;
        cursor: pointer;
    }
`

export const Line = styled.div`
    content: '';
    display: block;
    width: 1px;
    height: 70px;
    margin: 0px auto;
    background-color: white;
`
