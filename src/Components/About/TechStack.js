import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

function Techstack(prop) {
  return (
    <div>
      <Col xs={4} md={2} className='tech-icons'>
        <i className={`${prop.iconName} tech-icon-images`}></i>
      </Col>
    </div>
  );
}

export default Techstack;
