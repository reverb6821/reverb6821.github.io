import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Home/Particles';
import ProjectCard from './ProjectCard';

import aqApi from '../../Asset/img/portfolio/api.png';
import aqNext from '../../Asset/img/portfolio/aquariumnext.jpg';
import maurodr from '../../Asset/img/portfolio/maurodr.jpg';
import vanilla from '../../Asset/img/portfolio/vanilla.png';
import icePortfolio from '../../Asset/img/portfolio/ice.jpg';
import strigoTemplate from '../../Asset/img/portfolio/strigo.jpg';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          All my <strong className='primary'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are all my personal projects I've worked or I'm working.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={aqNext}
              isBlog={false}
              title='AquariumNext'
              description="Aquarium Web app that I'm working, completely builded with JavaScript"
              link='https://aquariumnext.herokuapp.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={aqApi}
              isBlog={false}
              title='AquariumNext - API'
              description='API for the webpapp AquariumNext. Builded with JavaScript'
              link='https://github.com/reverb6821/aquariumnext-api'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={maurodr}
              isBlog={false}
              title='Mauro Di Rubbo Photographer'
              description='Website in Wordpress for Mauro Di Rubbo'
              link='https://maurodirubbophotographer.it/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={vanilla}
              isBlog={false}
              title='Vanilla Template'
              description='Vanilla is a simple and lightweight portfolio to exalt your skills and content with his dark tones made ONLY with Sass and JS.'
              link='https://github.com/reverb6821/vanilla-portfolio-template'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={icePortfolio}
              isBlog={false}
              title='Ice Portfolio Template'
              description='A dark and Red Template for Personal Portfolio for designer and Developer. Builded with Bootstrap 4 and JQuery'
              link='https://github.com/reverb6821/ice-portfolio'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={strigoTemplate}
              isBlog={false}
              title='Strigo Template'
              description='A dark Template for Startup and small company. Builded with Bootstrap 4 and JQuery'
              link='https://github.com/reverb6821/strigo-template'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
