import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 1em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Asap', sans-serif;
    background: #1e1e1e;
    z-index: 9999;
`

export const HeaderTextContainer = styled.div`
    padding: 0 10px;
    height: 45px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    cursor: pointer;
    @media only screen and (max-width: 350px) {
        padding: 0 5px;
    }
`

export const HeaderText = styled.h4`
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: transparent;
    @media only screen and (max-width: 450px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 350px) {
        font-size: 14px;
    }
`
export const HeaderLine = styled.div`
    content: '';
    display: block;
    height: 2px;
    min-width: 6%;
    margin: 0px auto;
    background-color: #d82625;
    @media only screen and (max-width: 450px) {
        min-width: 4%;
    }
    @media only screen and (max-width: 400px) {
        min-width: 2%;
    }
    @media only screen and (max-width: 350px) {
        min-width: 1%;
        margin: 0;
    }
`
