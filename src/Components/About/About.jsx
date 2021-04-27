import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import  GithubCalendar from './Github'

const Container = styled(motion.section)`
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
`;

const Title = styled(motion.div)`
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
`;

const TitleText = styled.h1`
	font-size: 28px;
	padding-right: 0.7em;
	padding-left: 1em;
	color: #D82625;
	font-family: 'Lato', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 75%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	@media only screen and (max-width: 450px) {
		width: 45%;
	}
`;

const Body = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 4em;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const TextContainer = styled.div`
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
`;

const Text = styled.p`
	font-family: 'Lato', sans-serif;
	margin: 0;
	padding-bottom: ${(props) => (props.space ? '1em' : '0')};
	font-size: 18px;
	text-align: justify;
	padding-left: 1em;
	@media only screen and (max-width: 450px) {
		padding: 0em;
		margin: 0em;
		font-size: 15px;
		text-align: center;
		line-height: 25px;
		letter-spacing: 1px;
		word-spacing: 4px;
	}
`;

const About = ({ aboutRef }) => {
	return (
		<Container ref={aboutRef}>
			<Title>
				<TitleText>About Me</TitleText>
				<Line />
			</Title>
			<Body>
				<TextContainer>

					<Text>
					Ever since I was a child I was been passionate about science and technology, a 
                        <strong style={{color: "#D82625"}}>passion</strong> born when the first PC with Windows95 and 56k modem arrived at home.
					</Text>

					<br />

					<Text>
						From that moment it has been a continuous devouring everything related to technology, going to deepen the web development after discovering <strong  style={{color: "#D82625"}}>Javascript</strong> with its runtime <strong  style={{color: "#D82625"}}>Node.JS</strong>, of which I am recently starting to approach the more modern library <strong  style={{color: "#D82625"}}>React.js</strong>.
                    	Over the years I have dealt personally and hobbyist with the development of small programs and bots, for the development and management of my personal passions, which has recently led me to decide to field my knowledge also from a professional point of view , increasing my theoretical training and developing that practice.
					</Text>
							
					<TitleText>Days I Code</TitleText>
					<GithubCalendar/>
				</TextContainer>
				
			</Body>
		</Container>
	);
};

export default About;