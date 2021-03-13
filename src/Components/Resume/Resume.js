import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import Particle from '../Home/Particles';
import ResumeInfo from './ResumeInfo';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        {/* <Row style={{ justifyContent: 'center', position: 'relative' }}>
            
          <Button variant='primary' target='_blank'>
            <i className='fas fa-download'>&nbsp;</i>Download CV
          </Button>
        </Row> */}

        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experience</h3>
            <ResumeInfo
              title='JUNIOR Full Stack Web Dev [Easycloud]'
              date='Feb 2021 - Actually'
              content={[
                'Develop and maintening various project builded with microservice on Spring-boot',
                'Mainly used Spring-boot on backend & ReactJS on Frontend',
              ]}
            />
            <ResumeInfo
              title='JUNIOR Web Dev [ThinkOpen]'
              date='July 2020 - Sept 2020'
              content={[
                'Internship on Web development based on .NET',
                'The main topics and technologies addressed are:',
                'OOP,MVC, API & REST service',
                'C# as Backend',
                'HTML, CSS, Bootstrap, JS (plain & ES6)',
              ]}
            />
            <ResumeInfo
              title='Web Dev [NebulosaWeb]'
              date='Sept 2019 - Oct 2019'
              content={[
                'Collaboration for website Maintenance',
                'Worked on Wordpress, the main task was to rework a website',
              ]}
            />

            <ResumeInfo
              title='Web Developer Freelance [Fiverr]'
              content={[
                'Main services offered:',
                'Template creation with the main FE technologies (HTML, CSS, Bootstrap, JS & JQuery)',
                'Wordpress Website',
                'Wordpress theme customization',
                'Wordpress theme customization',
                'Wordpress Plugin installation and configuration',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <ResumeInfo
              title='Full Stack Developer [freeCodeCamp] '
              date='2020'
              content={[
                '1800 hours of course, which cover:',
                'HTML, CSS, SASS, Bootstrap, JQuery',
                'Javascript (Algorithms, OOP and Functional programming)',
                'Basics of Web Design & Responsive Design',
                'React, Redux and Hooks',
                'The APIs and Microservices with npm, Node.JS & MongoDB',
                'Data visualization with AJAX & JSon',
                'Quality test assurance with Chai & advanced NodeJS and Express.',
              ]}
            />
            <ResumeInfo
              title='The Web Developer Bootcamp [uDemy]'
              date='Oct. 2019'
              content={[
                'Corso comprensivo di 50 ore in cui si sono andati a toccare i principali argomenti e tecnologie in ambito web:',
                'HTML5, CSS3, Bootstrap 4, SemanticUI, JavaScript, jQuery, DOM Manipulation',
                'NodeJS, ExpressJS, NPM, PassportJS, Authorization, Rest',
                'MongoDB, Database Associations',
                'Unix Command Line',
              ]}
            />
            <ResumeInfo
              title='React - The Complete Guide [uDemy] '
              date='Feb. 2020'
              content={[
                'React course wich cover:',
                'React Basics, Managing state with class-based components and React Hooks',
                'How to output lists and conditional content',
                'Styling of React components',
                'How to access Http content from within React apps (AJAX)',
                'Redux, Redux, Redux ... from basics to advanced!',
                'Forms and form validation in React apps, Authentication',
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}></Row>
      </Container>
    </Container>
  );
}

export default Resume;
