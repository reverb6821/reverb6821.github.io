import React from 'react'
import { Github, Codepen, LinkedinSquare } from '@styled-icons/boxicons-logos'
import { FilePdf } from '@styled-icons/boxicons-solid'

import {
    SideContainer,
    LeftSideContainer,
    RightSideContainer,
    SideText,
    SideIcon,
    Line,
} from './styleSidebar'

export const Sidebar = ({ handleToast }: any) => {
    const handleClipboardClick = () => {
        navigator.clipboard.writeText('giuseppe.gigliotti@outlook.com')
        handleToast(`Email copy to clipboard! 🥳`)
    }

    return (
        <>
            <LeftSideContainer>
                <SideIcon
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.85 }}
                >
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <FilePdf />
                    </a>
                </SideIcon>
                <SideIcon
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.85 }}
                >
                    <a
                        href="https://github.com/reverb6821"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github />
                    </a>
                </SideIcon>
                <SideIcon
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.85 }}
                >
                    <a
                        href="https://codepen.io/reverbod"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Codepen />
                    </a>
                </SideIcon>
                <SideIcon
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.85 }}
                >
                    <a
                        href="https://www.linkedin.com/in/gigliottigiuseppe/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinSquare />
                    </a>
                </SideIcon>
                <Line />
            </LeftSideContainer>
            <RightSideContainer>
                <SideText>giuseppe.gigliotti@outlook.com</SideText>
                <Line />
            </RightSideContainer>
        </>
    )
}
