import React from 'react';
import styled from 'styled-components';
import { Javascript, ReactLogo, Nodejs, SpringBoot, Github } from '@styled-icons/boxicons-logos';
import { Express, Webpack, Sass, Visualstudiocode, Eclipseide, Ubuntu, Mysql, Typescript, Angular } from '@styled-icons/simple-icons'
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	width: 65%;
	display: flex;
	justify-content: space-evenly;
	align-items: baseline;
	padding-top: 3em;
	height: 200px;
	@media only screen and (max-width: 450px) {
		padding-top: 0em;
		height: auto;
		width: 100%;
	}
`;

const SkillsColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 28%;
	@media only screen and (max-width: 450px) {
		width: 40%;
	}
`;

const TextContainer = styled(motion.div)`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media only screen and (max-width: 450px) {
		height: 65px;
	}
`;

const ColumnText = styled(motion.span)`
	text-align: center;
	flex: 0 0 175px;
	font-size: 10px;
	font-weight: 700;
	width: 100%;
	letter-spacing: 2px;
	font-family: 'Calibre', sans-serif;
	cursor: default;
	@media only screen and (max-width: 450px) {
		text-align: center;
		font-size: 14px;
		flex: 0 0 130px;
	}
`;

const Education = () => {
	return (
		<Container>
			<SkillsColumn>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#EFD81D'}}>
						<Javascript size="52" title="Javascript"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#D6002F'}}>
						<Angular size="52" title="Angular" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#D68500'}}>
						<Mysql size="52" title="Mysql"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#007ACC'}} >
						<Visualstudiocode size="52" title="Visual Studio Code" />
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
			<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#2F74C0'}}>
					<Typescript size="52" title="Typescript"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#61DAFB'}}>
					<ReactLogo size="52" title="React"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#FFF'}}>
						<Express size="52" title="Express.js"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#63B341'}}>
						<SpringBoot size="52" title="SpringBoot"/>
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#74A370'}}>
						<Nodejs size="52" title="NodeJS" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#6FA6C2'}}>
						<Webpack size="52" title="Webpack" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} style={{color: '#C26191'}}>
						<Sass size="52" title="Sass" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}  style={{color: '#6A2D94'}}>
						<Github size="52" title="Github" />			
					</ColumnText>
				</TextContainer>

			</SkillsColumn>
		</Container>
	);
};

export default Education;