import React from 'react'
import { Container, Title, TitleText, Line, SkillBox } from './styleSkills'
import { ListSkills } from './ListSkills'

export const Skills = ({ skillsRef }: any) => {
    return (
        <Container ref={skillsRef}>
            <Title>
                <TitleText>Skills</TitleText>
                <Line />
            </Title>
            <SkillBox>
                <ListSkills />
            </SkillBox>
        </Container>
    )
}
