/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import styled from 'styled-components';
import { Javascript } from '@styled-icons/boxicons-logos';

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

const Footer = () => {
	return (
		<Container>
			<Text>
				'All my work are powered by a lot of
				 <Javascript size="21" title="Javascript"/>
				'
			</Text>
		</Container>
	);
};

export default Footer;