//import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Github } from '@styled-icons/boxicons-logos';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline';
import ToDo from '../../assets/todo_app.jpg';
import UMovie from '../../assets/Upcoming.png';
import SnakeGame from '../../assets/snake_game.png';
import WeatherApp from '../../assets/weather_app.jpg';

const Container = styled(motion.div)`
	width: 100%;
	color: white;
	overflow: hidden;
	padding-top: 2em;
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const CardRow = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	padding: 1em 0;
	@media only screen and (max-width: 450px) {
		display: block;
		padding: 0;
	}
`;

const Card = styled(motion.div)`
	position: relative;
	height: 380px;
	width: 400px;
	border-radius: 5px;
	padding: 15px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: auto;
		margin: 2em 0;
		padding: 10px 15px;
		height: 400px;
	}
`;

const ImgContainer = styled.div`
	height: 210px;
	padding-top: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LinkContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	padding-right: 15px;
	padding-bottom: 15px;
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
	}
`;

const Img = styled.img`
	border-radius: 5px;
	height: 100%;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: 100%;
	}
`;

const TextContainer = styled.div`
	padding-left: 1em;
	padding-top: 1em;
	@media only screen and (max-width: 450px) {
		padding: 0.7em 0;
	}
`;

const Title = styled.h4`
	font-size: 22px;
	margin: 0;
	padding: 0;
	color: #D82625;
	font-family: 'Lato', sans-serif;
	@media only screen and (max-width: 450px) {
	font-size: 20px;
    }`;

const Explanation = styled.p`
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: 300;
	margin: 0;
	padding: 0;
	padding: 10px 0;
	font-family: 'Lato', sans-serif;
	@media only screen and (max-width: 450px) {
		padding-bottom: 15px;
		font-size: 16px;
	}
`;

const Technology = styled.div`
	font-family: 'Roboto', sans-serif;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

const TechItems = styled.span`
	padding-right: 5px;
	padding-top: 0px;
	font-size: 16px;
	color: #ffffffbf;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Hastag = styled.span`
	color: #D82625;
`;

/*
const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ButtonShow = styled(motion.button)`
	margin-top: 2em;
	padding: 0.7em 1em;
	font-size: 14px;
	font-weight: 600;
	color: #1f1f1f;
	font-family: 'Calibre', sans-serif;
	cursor: pointer;
`;
*/

const Link = ({ githubLink, externalLink }) => {
	return (
		<LinkContainer>
			<a href={githubLink} target='_blank' rel='noopener noreferrer'>
				<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
					<Github />
				</Button>
			</a>
			<a href={externalLink} target='_blank' rel='noopener noreferrer'>
				<Button whileHover={{ y: [0, -8, 0], color: '#D82625' }} transition={{ duration: 0.5 }}>
					<ExternalLinkOutline />
				</Button>
			</a>
		</LinkContainer>
	);
};

const BeginnerProjects = () => {
	//const [showMore, setShowMore] = useState(false);
	//const handleShowMore = () => setShowMore(true);

	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<CardRow>
				<Card>
					<Link
						githubLink='https://github.com/reverb6821/react-weather-app'
						externalLink='/'
					/>
					<ImgContainer>
						<Img src={WeatherApp} alt='weather-app' />
					</ImgContainer>
					<TextContainer>
						<Title>Weather App</Title>
						<Explanation>A React.js weather app builded with OpenWeather API and deployed on Heroku</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React.js
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>API
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>SCSS
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>VSCode
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
				<Card>
					<Link
						githubLink='https://github.com/reverb6821/react-snake'
						externalLink='/'
					/>
					<ImgContainer>
						<Img src={SnakeGame} alt='snake-game' />
					</ImgContainer>
					<TextContainer>
						<Title>Snake Game</Title>
						<Explanation>A classical Snake game, builded on React.js</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React.js
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>SCSS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Game
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
			</CardRow>
			<CardRow>
				<Card>
					<Link
						githubLink='https://github.com/reverb6821/umovieinfo'
						externalLink='/'
					/>
					<ImgContainer>
						<Img src={UMovie} alt='u-movie' />
					</ImgContainer>
					<TextContainer>
						<Title>U Movie Info</Title>
						<Explanation>Need a movie info? Find it on this app, builded with React.js and OMDB APIs</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React.js
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>API
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>SCSS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Movie
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
				<Card>
					<Link
						githubLink='https://github.com/reverb6821/todo-app'
						externalLink=''
					/>
					<ImgContainer>
						<Img src={ToDo} alt='todo' />
					</ImgContainer>
					<TextContainer>
						<Title>Todo app</Title>
						<Explanation>Todo app for daily task reminder, builded with React.js and local storage as db</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React.js
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>localstorage
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>SCSS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Yarn
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
			</CardRow>
			{/*
			<CardRow>
				<Card>
					<Link
						githubLink='#'
						externalLink='#'
					/>
					<ImgContainer>
						<Img src={} alt='' />
					</ImgContainer>
					<TextContainer>
						<Title></Title>
						<Explanation></Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Frameworks
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>OS
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
				<Card>
					<Link
						githubLink='#'
						externalLink='#'
					/>
					<ImgContainer>
						<Img src={} alt='' />
					</ImgContainer>
					<TextContainer>
						<Title></Title>
						<Explanation>Description</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Frameworks
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
			</CardRow>*/}
			{/*	{!showMore && (
				<ButtonContainer>
					<ButtonShow whileHover={{ y: [0, -8, 0] }} transition={{ duration: 0.5 }} onClick={handleShowMore}>
						Show more
					</ButtonShow>
				</ButtonContainer>
			)} */}
			{/*
			{showMore && (
				<>
					<CardRow>
						<Card>
							<Link
								githubLink='#'
								externalLink='#'
							/>
							<ImgContainer>
								<Img src={} alt='' />
							</ImgContainer>
							<TextContainer>
								<Title></Title>
								<Explanation>Description</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Language
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>OS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
						<Card>
							<Link
								githubLink='#'
								externalLink='#'
							/>
							<ImgContainer>
								<Img src={} alt='' />
							</ImgContainer>
							<TextContainer>
								<Title></Title>
								<Explanation>Description</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Language
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>Framework
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
					</CardRow>
					<CardRow>
						<Card>
							<Link
								githubLink='#'
								externalLink='#'
							/>
							<ImgContainer>
								<Img src={} alt='' />
							</ImgContainer>
							<TextContainer>
								<Title></Title>
								<Explanation>Description</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Language
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>OS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
						<Card>
							<Link
								githubLink='#'
								externalLink='#'
							/>
							<ImgContainer>
								<Img src={} alt='' />
							</ImgContainer>
							<TextContainer>
								<Title></Title>
								<Explanation>Description</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>HTML
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>Javascript
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>CSS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
					</CardRow>
					<CardRow>
						<Card>
							<Link
								githubLink='#'
								externalLink='#'
							/>
							<ImgContainer>
								<Img src={} alt='' />
							</ImgContainer>
							<TextContainer>
								<Title></Title>
								<Explanation>Description</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Language
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>Framework
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
					</CardRow>
				</>
			)}*/}
		</Container>
	);
};

export default BeginnerProjects;