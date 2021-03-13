import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

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
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className='project-heading' style={{ paddingBottom: '20px' }}>
        Days I <strong className='purple'>Code</strong>
      </h1>
      <GitHubCalendar
        username='reverb6821'
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
