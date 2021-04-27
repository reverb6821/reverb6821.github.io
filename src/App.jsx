import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import MobileContactInfo from './Components/Sidebar/Mobile-Contact';
import Main from './Components/Main/Main';
import Notification from './Components/Notification/Notification';
import Footer from './Components/Footer/Footer';

const AppContainer = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
	background: #1e1e1e;
	font-family: 'Lato', sans-serif;;
`;

function App() {
	const [scrollProgress, setScrollProgress] = useState('20%');
	const [didScroll, setDidScroll] = useState(false);
	const [toast, setToast] = useState([]);
	const [isSafari, setIsSafari] = useState(false);

	const heroRef = useRef(null);
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const expRef = useRef(null);
	const projectRef = useRef(null);

	useEffect(() => {
		listenToScrollEvent();
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('safari') !== -1) {
			if (ua.indexOf('chrome') > -1) {
				setIsSafari(false); // Chrome
			} else {
				setIsSafari(true); // Safari
			}
		}
	}, []);

	const listenToScrollEvent = () => {
		document.addEventListener('scroll', () => {
			let scrolled;
			const yPos = window.scrollY;
			if (yPos < 150) scrolled = `20%`;
			if (yPos > 140) setDidScroll(true);
			if (yPos > 150) {
				scrolled = `${((yPos - 140) * 20) / 720 + 20}%`;
			}
			if (yPos > 860) {
				scrolled = `${((yPos - 860) * 20) / 650 + 40}%`;
			}
			if (yPos > 1510) {
				scrolled = `${((yPos - 1510) * 20) / 650 + 60}%`;
			}
			if (yPos > 2160) {
				scrolled = `${((yPos - 2160) * 20) / 2720 + 80}%`;
			}
			if (yPos > 4880) scrolled = `100%`;

			return setScrollProgress(scrolled);
		});
	};

	const handleScroll = (e) => {
		const { id } = e.currentTarget;
		if (id === 'intro') return scrollToRef(heroRef);
		if (id === 'about') return scrollToRef(aboutRef);
		if (id === 'skills') return scrollToRef(skillsRef);
		if (id === 'exp') return scrollToRef(expRef);
		if (id === 'project') return scrollToRef(projectRef);
		
		return scrollToRef(heroRef);
	};

	const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

	const handleToast = (msg) => {
		setToast((oldVal) => [...oldVal, msg]);
		setTimeout(() => {
			setToast((oldState) => oldState.splice(1, 1));
		}, 3000);
	};

	return (
		<Theme>
			<AppContainer>
				<Header
					isSafari={isSafari}
					scrollProgress={scrollProgress}
					handleScroll={handleScroll}
					setDidScroll={setDidScroll}
				/>
				<Sidebar handleToast={handleToast} />
				<MobileContactInfo handleToast={handleToast} />
				<Notification toast={toast} />
				<Main
					heroRef={heroRef}
					aboutRef={aboutRef}
					skillsRef={skillsRef}
					expRef={expRef}
					projectRef={projectRef}
					handleToast={handleToast}
					didScroll={didScroll}
				/>
				<Footer />
			</AppContainer>
		</Theme>
	);
}

export default App;