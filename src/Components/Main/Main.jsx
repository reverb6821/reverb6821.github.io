import React from 'react';
import Hero from '../Hero/Hero';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Project';
import About from '../About/About';

// eslint-disable-next-line react/prop-types
const Main = ({ didScroll, handleToast, heroRef, expRef, skillsRef, projectRef, aboutRef }) => {
	return (
		<>
			<Hero didScroll={didScroll} handleToast={handleToast} heroRef={heroRef} />
			<About aboutRef={aboutRef} />
			<Skills skillsRef={skillsRef} />
			<Experience expRef={expRef} />
			<Projects projectRef={projectRef} />
		</>
	);
};

export default Main;