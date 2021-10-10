import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AquariumNext from '../../assets/aquariumnext.jpg';
import VanillaTemplate from '../../assets/vanilla.png';
import MauroDR from '../../assets/maurodr.jpg';
import Andromeda from '../../assets/andromeda.png';
import IcePortfolio from '../../assets/ice.jpg';
import { Github } from '@styled-icons/boxicons-logos';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline';


const Container = styled(motion.div)`
	padding-top: 2em;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	width: 100%;
`;

const Row = styled.div`
	padding: 4em 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media only screen and (max-width: 450px) {
		padding: 2em 0;
		flex-direction: ${(props) => (props.revert ? 'column-reverse' : 'column')};
	}
`;

const LeftRow = styled.div`
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
`;

const RightRow = styled.div`
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
`;

const ImgContainer = styled.div`
	width: 500px;
	height: 300px;
	position: relative;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 80%;
	}
`;

const Img = styled.img`
	height: 100%;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
	}
`;

const Card = styled.div`
	width: 85%;
	height: 80%;
	border-radius: 5px;
	padding: 25px 30px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: 75%;
		padding: 15px 20px;
	}
`;

const Title = styled.h4`
	font-size: 24px;
	margin: 0;
	padding: 0;
	color: #D82625;
	font-family: 'Lato', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 20px;
	}
`;

const Description = styled.h4`
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
`;

const Technology = styled.div`
	font-family: 'Roboto';
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;
const TechItems = styled.span`
	padding-right: 10px;
	padding-top: 10px;
	font-size: 18px;
	color: #ffffffbf;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Hastag = styled.span`
	color: #D82625;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-top: 1em;
	a {
		color: white;
		text-decoration: none;
	}
`;

const Button = styled(motion.div)`
	padding: 0.5em;
	cursor: pointer;
	svg {
		width: 30px;
		@media only screen and (max-width: 450px) {
			width: 27px;
		}
	}
`;

const AdvancedProjects = ({ isMobile }) => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={AquariumNext} alt='aquariumnext' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>AquariumNext</Title>
						<Description>
						Aquarium web app who I'm building with Node.js and React.js with Mysql as db.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React.js
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Node.js
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Mysql
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Aquarium
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>App
							</TechItems>
						</Technology>
						<ButtonContainer>
						    <a href='https://github.com/reverb6821/AquariumNext2.0' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://aquariumnext.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
			<Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>Mauro Di Rubbo Photographer</Title>
						<Description>Wordpress website for a freelance photografer based in Italy, Benevento
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Wordpress
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>PHP
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>CSS
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>JQuery
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Photography
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a href='https://maurodirubbophotographer.it/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={MauroDR} alt='MauroDR' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={Andromeda} alt='Andromeda' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Andromeda - MVC Boilerplate</Title>
						<Description>
						Andromeda is a template for build modern Web App/PWA on a top of Express.JS as server and React as front end
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Node.js
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>TypeScript
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>React
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>REST APIs
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a
								href='https://github.com/reverb6821/andromeda'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
			<Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>Vanilla Template</Title>
						<Description>
						Vanilla is a simple and lightweight portfolio to exalt your skills and content with his dark tones made ONLY with Sass and JS.
						⚡️ Modern UI Design ⚡️ Dark Theme ⚡️ One Page Layout ⚡️ Fully Responsive ⚡️ Optimized with Webpack
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>HTML
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>SASS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Webpack
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Portfolio
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag> Template
							</TechItems>
						</Technology>
						<ButtonContainer>
						<a href='https://github.com/reverb6821/vanilla-portfolio-template'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
						</a>
						<a href='https://reverb6821.github.io/vanilla-portfolio-template/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
						</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={VanillaTemplate} alt='VanillaTemplate' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={IcePortfolio} alt='BFPasswordCracker' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Ice - Bootstrap Portfolio</Title>
						<Description>
						A Portfolio template builded with Bootstrap 4 and JQuery.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Bootstrap4
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>JQuery
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Portfolio
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Template
							</TechItems>
						</Technology>
						<ButtonContainer>
						<a href='https://github.com/reverb6821/ice-portfolio'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
						</a>
						<a href='https://reverb6821.github.io/ice-portfolio/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
						</a>
						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
		</Container>
	);
};

export default AdvancedProjects;