import styled from 'styled-components'
import { motion } from 'framer-motion'

type props = {
    revert?: any[]
    text?: any
}

export const Container = styled(motion.div)`
    padding-top: 2em;
    color: white;
    overflow: hidden;
    font-family: 'Asap', sans-serif;
    width: 100%;
`

export const Row = styled.div<props>`
    padding: 4em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media only screen and (max-width: 450px) {
        padding: 2em 0;
        flex-direction: ${(props) =>
            props.revert ? 'column-reverse' : 'column'};
    }
`

export const LeftRow = styled.div<props>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.text ? 'flex-end' : 'flex-start')};
    width: ${(props) => (props.text ? '50%' : '50%')};
    height: 200px;
    height: ${(props) => (props.text ? '300px' : '250px')};
    border-radius: 5px;
    padding: 15px;
    @media only screen and (max-width: 450px) {
        height: auto;
        width: 100%;
        justify-content: center;
        padding: 0;
    }
`

export const RightRow = styled.div<props>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.text ? 'flex-start' : 'flex-end')};
    width: ${(props) => (props.text ? '50%' : '50%')};
    height: 200px;
    height: ${(props) => (props.text ? '300px' : '250px')};
    border-radius: 5px;
    padding: 15px;
    @media only screen and (max-width: 450px) {
        height: auto;
        width: 100%;
        justify-content: center;
    }
`

export const ImgContainer = styled.div`
    width: 500px;
    height: 300px;
    position: relative;
    @media only screen and (max-width: 450px) {
        height: auto;
        width: 80%;
    }
`

export const Img = styled.img`
    height: 100%;
    @media only screen and (max-width: 450px) {
        height: auto;
        width: 100%;
    }
`

export const Card = styled.div`
    width: 85%;
    height: 80%;
    border-radius: 5px;
    padding: 25px 30px;
    background: #ffffff14;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
    @media only screen and (max-width: 450px) {
        width: 75%;
        padding: 15px 20px;
    }
`

export const Title = styled.h4`
    font-size: 24px;
    margin: 0;
    padding: 0;
    color: #d82625;
    font-family: 'Lato', sans-serif;
    @media only screen and (max-width: 450px) {
        font-size: 20px;
    }
`

export const Description = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
    padding: 0;
    padding: 10px 0;
    font-family: 'Lato', sans-serif;
    font-family: 'Roboto', sans-serif;
    @media only screen and (max-width: 450px) {
        font-size: 16px;
        line-height: 23px;
    }
`

export const Technology = styled.div`
    font-family: 'Roboto';
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`
export const TechItems = styled.span`
    padding-right: 10px;
    padding-top: 10px;
    font-size: 18px;
    color: #ffffffbf;
    @media only screen and (max-width: 450px) {
        font-size: 14px;
    }
`

export const Hastag = styled.span`
    color: #d82625;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1em;
    a {
        color: white;
        text-decoration: none;
    }
`

export const Button = styled(motion.div)`
    padding: 0.5em;
    cursor: pointer;
    svg {
        width: 30px;
        @media only screen and (max-width: 450px) {
            width: 27px;
        }
    }
`
