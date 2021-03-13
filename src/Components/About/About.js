import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Home/Particles';
import Github from './Github';
import TechStack from './TechStack';
import AboutInfo from './AboutInfo';
import laptop from '../../Asset/img/laptop.jpg';

function About() {
  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              <strong className='primary'>Who This guy?</strong>
            </h1>
            <AboutInfo />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={laptop} alt='about' className='img-fluid' />
          </Col>
        </Row>
        <h1 className='project-heading'>
          My <strong className='primary'>Skills </strong>
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <TechStack iconName='cib-spring' />
          <TechStack iconName='devicon-nodejs-plain' />
          <TechStack iconName='devicon-express-original' />
          <TechStack iconName='devicon-php-plain' />
          <TechStack iconName='devicon-webpack-plain' />
          <TechStack iconName='devicon-javascript-plain ' />
          <TechStack iconName='devicon-sass-original ' />
          <TechStack iconName='devicon-react-original' />
          <TechStack iconName='devicon-mysql-plain' />
          <TechStack iconName='devicon-bootstrap-plain' />
          <TechStack iconName='devicon-git-plain' />
        </Row>
        <h1 className='project-heading'>
          <strong className='primary'>Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
          <TechStack iconName='devicon-linux-plain' />
          <TechStack iconName='cib-windows' />
          <TechStack iconName='cib-visual-studio-code' />
          <TechStack iconName='cib-eclipseide' />
          <TechStack iconName='cib-postman' />
          <TechStack iconName='devicon-photoshop-plain' />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
