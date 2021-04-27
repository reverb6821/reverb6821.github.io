import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowheadDown } from '@styled-icons/evaicons-solid';
import Typewriter from './Typewriter';



const Container = styled(motion.section)`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
	font-family: 'Lato', sans-serif;;
	padding-top: 200px;
	padding-bottom: 50px;
	padding-left: 170px;
	margin: 0px auto;
	/* max-width: 1600px; */
	min-height: 75vh;
	@media only screen and (max-height: 650px) {
		padding-top: 100px;
	}
	@media only screen and (max-width: 800px) {
		padding-left: 50px;
		padding-right: 50px;
		min-height: 40vh;
	}
	@media only screen and (max-width: 450px) {
		padding-left: 10px;
		padding-right: 10px;
		min-height: 40vh;
		max-width: 100vw;
		padding-top: 155px;
		padding-bottom: 100px;
	}
	@media only screen and (max-width: 350px) {
		padding-left: 10px;
		padding-right: 10px;
		min-height: 40vh;
		max-width: 100vw;
		padding-top: 100px;
		padding-bottom: 100px;
	}
	@media only screen and (max-height: 900px) and (min-height: 800px) {
		padding-top: 180px;
		padding-bottom: 150px;
	}
`;

const Content = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	@media only screen and (max-width: 450px) {
		padding-left: 20px;
		padding-right: 15px;
		min-height: 40vh;
		max-width: 100%;
	}
`;

const Intro = styled.div`
	@media only screen and (max-width: 450px) {
		width: 100%;
	}
`;

const Title = styled(motion.h1)`
	margin: 0;
	margin: 1rem 0;
	margin-top: 0em;
	font-size: 75px;
	text-align: start;
	color: #D82625;
	font-family: 'Lato', sans-serif;
	cursor: grab;
	span {
		color: #D82625;
	}
	@media only screen and (max-width: 800px) {
		font-size: 60px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 40px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 36px;
		width: 100%;
	}
`;

const FirstTitle = styled(Title)`
	font-size: 18px;
	margin: 0.4em 0;
	color: white;
	cursor: default;
	font-family: 'Lato', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 18px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 15px;
		width: 100%;
	}
`;

const SubTitle = styled(Title)`
	font-size: 38px;
	margin: 0;
	color: white;
	cursor: default;
	font-family: 'Lato', sans-serif;
	@media only screen and (max-width: 800px) {
		font-size: 30px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 23px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 20px;
		width: 100%;
	}
`;

const ScrollDown = styled.div`
	position: absolute;
	bottom: 8px;
	left: 47%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100px;
	color: white;
	color: #D82625;
	font-size: 15px;
	font-family: 'Asap', sans-serif;
	svg {
		width: 25px;
	}
	@media only screen and (max-width: 450px) {
		bottom: 12px;
		left: 37%;
	}
`;

const ScrollDownContainer = styled(motion.div)`
	display: ${(props) => (props.didScroll ? 'flex' : 'flex')};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media only screen and (max-width: 800px) {
	}
`;

const bounceTransition = {
	y: {
		duration: 0.5,
		yoyo: Infinity,
		ease: 'easeOut',
		delay: 3.5,
	},
};

const Hero = ({ didScroll, handleToast, heroRef }) => {
	const [count, setCount] = useState(0);

	const variants = {
		scroll: { opacity: 0 },
		noScroll: { y: ['0%', '-50%'] },
	};

	const handleDrag = () => {
		let newCount = count + 1;
		setCount(newCount);
		if (count > 2) handleToast('Stop breaking my website! ⛔️ 😉');
		return;
	};

	return (
		<Container ref={heroRef}>
			
			<Content>
				<Intro>
					<FirstTitle>hello_world!, I'm</FirstTitle>
					<Title
						drag
						dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						dragTransition={{ bounceStiffness: 500, bounceDamping: 7 }}
						onDragEnd={handleDrag}
						initial={{ y: -300, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						Giuseppe <span style={{color: "white"}}> Gigliotti</span>
					</Title>
					<SubTitle
						initial={{ x: -300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						<Typewriter />
					</SubTitle>
				</Intro>
			</Content>
			<ScrollDown>
				<ScrollDownContainer
					didScroll={didScroll}
					variants={variants}
					transition={bounceTransition}
					animate={didScroll ? 'scroll' : 'noScroll'}>
					Scroll Down
					<ArrowheadDown />
				</ScrollDownContainer>
			</ScrollDown>
		</Container>
	);
};

export default Hero;