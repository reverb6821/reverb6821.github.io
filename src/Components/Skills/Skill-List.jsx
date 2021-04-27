import React from 'react';
import styled from 'styled-components';
import { Javascript, ReactLogo, Nodejs, SpringBoot, Github } from '@styled-icons/boxicons-logos';
import { Express, Webpack, Sass, Visualstudiocode, Eclipseide, Ubuntu, Mysql } from '@styled-icons/simple-icons'
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
	color: white;
	color: ${(props) => (props.color === '#D82625' ? '#D82625' : 'white')};
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
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#D82625'}>
						<Javascript size="52" title="Javascript"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						<Express size="52" title="React"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#D82625'}>
						<Mysql size="52" title="Mysql"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						<Eclipseide size="52" title="Eclipse" />
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
					<ReactLogo size="52" title="React"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#D82625'}>
						<Webpack size="52" title="Webpack" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						<SpringBoot size="52" title="SpringBoot"/>
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#D82625'}>
						<Ubuntu size="52" title="Ubuntu"/>
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#D82625'}>
						<Nodejs size="52" title="NodeJS" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						<Sass size="52" title="Sass" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#D82625'}>
						<Visualstudiocode size="52" title="Visual Studio Code" />
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						<Github size="52" title="Github" />
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
		</Container>
	);
};

export default Education;