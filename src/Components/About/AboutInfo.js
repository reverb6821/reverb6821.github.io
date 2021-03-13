import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function AboutInfo() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I,m <span className='main'>Giuseppe Gigliotti </span>
            from <span className='main'> Benevento, Italy.</span>
            <br />I am a junior Full Stack Dev self-taught
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <i class='fas fa-chevron-right'></i> Games/Movies/Tv- series
            </li>
            <li className='about-activity'>
              <i class='fas fa-chevron-right'></i>Hikings/Trekking/Travel
            </li>
            <li className='about-activity'>
              <i class='fas fa-chevron-right'></i> Music/Play Guitar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutInfo;
