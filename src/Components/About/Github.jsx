import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ListContainer = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 450px) {
		display: block;
	}
`;

function Github() {
  const colourTheme = {
    background: 'transparent',
    text: '#ececec',
    grade4: '#B80000',
    grade3: '#F42F2F',
    grade2: '#F66565',
    grade1: '#F58484',
    grade0: '#FCD9D9',
  };
  return (
      <ListContainer>
             <GitHubCalendar
        username='reverb6821'
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
      </ListContainer>
   
  );
}

export default Github;