import React from 'react';
import Particles from 'react-particles-js';

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          size: {
            value: 3,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.15,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
          retina_detect: true,
        },
      }}
    />
  );
}

export default Particle;
