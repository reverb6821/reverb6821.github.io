import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Asset/img/home-main.svg';
import Particles from './Particles';
import Type from './Type';
import '../../App.scss';
function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particles />
        <Container className='home-content'>
          <h1 className='heading-name'>
            I'M
            <strong className='main-name'> Giuseppe Gigliotti</strong>
          </h1>
          <div style={{ padding: 50, textAlign: 'left' }}>
            <Type />
          </div>

          <Col>
            {' '}
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/reverb6821'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/gigliottigiuseppe/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://codepen.io/reverbod'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <i className='fab fa-codepen'></i>
                </a>
              </li>
            </ul>
          </Col>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
