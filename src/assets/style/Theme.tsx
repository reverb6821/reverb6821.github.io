import React from 'react'
import { ThemeProvider } from 'styled-components'

const colors = {
    light: {
        primary: 'white',
        secondary: 'black',
        forest: '#38a66d',
        lightForest: '#03b554',
    },
    dark: {
        primary: 'white',
        secondary: 'black',
        forest: '#38a66d',
        lightForest: '#03b554',
    },
}

const breakpoints = {
    xxl: 1200,
    xl: 950,
    l: 800,
    m: 550,
    s: 450,
    xs: 350,
}

const fontSizes = {
    title: '16',
    subtitle: '16',
    header: '16',
    subheader: '16',
    text: '16',
}

const constructCssCode = (children: any, item: any) =>
    `${item}:${children[item]}`

const createMeidaQuery = (children: any, breakpoint: any) => {
    return `
	@media (max-width: ${breakpoint}px) {
		${Object.keys(children)
            .map((item) => constructCssCode(children, item))
            .join(';')}
	}`
}

const bigDesktopMedia = (children: any) => {
    return createMeidaQuery(children, breakpoints.xxl)
}

const desktopMedia = (children: any) => {
    return createMeidaQuery(children, breakpoints.xl)
}

const smallDesktopMedia = (children: any) => {
    return createMeidaQuery(children, breakpoints.l)
}

const bigMobileMedia = (children: any) => {
    return createMeidaQuery(children, breakpoints.m)
}

const mobileMedia = (children: any) => {
    return createMeidaQuery(children, breakpoints.s)
}

const smallMobileMedia = (children: any) => {
    return createMeidaQuery(children, breakpoints.xs)
}

const query = {
    smallMobile: smallMobileMedia,
    mobile: mobileMedia,
    bigMobile: bigMobileMedia,
    smallDesktop: smallDesktopMedia,
    desktop: desktopMedia,
    bigDesktop: bigDesktopMedia,
}

const fontWeights = {
    lighter: '300',
    light: '400',
    normal: '500',
    bold: '700',
}

const fontFamily = {}

const theme = {
    breakpoints,
    colors,
    fontSizes,
    fontWeights,
    fontFamily,
    query,
}

const Theme = ({ children }: any) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
