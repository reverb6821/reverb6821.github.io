/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import styled from 'styled-components';
import { ReactLogo } from '@styled-icons/boxicons-logos';

const Container = styled.div`
	font-size: 16px;
	color: white;
	padding: 1rem 0;
	font-family: monospace;
	@media only screen and (max-width: 450px) {
		font-size: 12px;
	}
`;

const Text = styled.p`
	text-align: center;
`;

export const ReactJsLogo = styled(ReactLogo)`

const attrs = {
    fill: 'red',
  }
  -webkit-animation: rotation 2s infinite linear
  @-webkit-keyframes rotation {
	from {
			-webkit-transform: rotate(0deg);
	}
	to {
			-webkit-transform: rotate(359deg);
	}
}
  
`;
  
const Footer = () => {
	return (
		<Container>
			<Text>
				'made with 
				 <ReactLogo size="21" title="React.js" style={{color: '#61DAFB'}}/> 
				'
			</Text>
		</Container>
	);
};

export default Footer;