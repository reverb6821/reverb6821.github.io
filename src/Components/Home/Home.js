import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Asset/img/home-main.svg';
import Particles from './Particles';
import Type from './Type';
import '../../App.css';
function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particles />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hello World!
              </h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> Giuseppe Gigliotti</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>

              <ul className='home-about-social-links'>
                <li className='social-icons'>
                  <a
                    href='https://github.com/soumyajit4419'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <i className='fab fa-github'></i>
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://twitter.com/Soumyajit4419'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://www.linkedin.com/in/soumyajit4419/'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://www.instagram.com/s.o.u.m.y.a_j.i.t/'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour home-social-icons'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
