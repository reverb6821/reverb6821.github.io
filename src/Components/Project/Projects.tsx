import React from 'react'
import { Github } from '@styled-icons/boxicons-logos'

import {
    Container,
    Row,
    LeftRow,
    RightRow,
    ImgContainer,
    Img,
    Card,
    Title,
    Description,
    Technology,
    TechItems,
    Hastag,
    ButtonContainer,
    Button,
} from './styleProjects'

export const Projects = ({ isMobile }: any) => {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <Row>
                <LeftRow text={false}>
                    <ImgContainer>
                        <Img
                            src="../../assets/img/projects/andromeda.png"
                            alt="Andromeda"
                        />
                    </ImgContainer>
                </LeftRow>
                <RightRow text>
                    <Card>
                        <Title>Andromeda</Title>
                        <Description>
                            Andromeda is a template for build modern Web App/PWA
                            on a top of Express.JS as server and React as front
                            end.
                        </Description>
                        <Technology>
                            <TechItems>
                                <Hastag>#</Hastag>React.js
                            </TechItems>
                            <TechItems>
                                <Hastag>#</Hastag>Node.js
                            </TechItems>
                            <TechItems>
                                <Hastag>#</Hastag>Styled-Components
                            </TechItems>
                        </Technology>
                        <Technology>
                            <TechItems>
                                <Hastag>#</Hastag>PWA
                            </TechItems>
                            <TechItems>
                                <Hastag>#</Hastag>Express
                            </TechItems>
                        </Technology>
                        <ButtonContainer>
                            <a
                                href="https://github.com/reverb6821/andromeda"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    whileHover={{
                                        y: [0, -8, 0],
                                        color: '#D82625',
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Github />
                                </Button>
                            </a>
                        </ButtonContainer>
                    </Card>
                </RightRow>
            </Row>
        </Container>
    )
}
