// import {
//   carrent,
//   jobit,
//   tripguide
// } from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  }
]

const projects = [
  {
    name: 'StoreLytic',
    description:
        'Storelytic is a PWA builded on a top of Express.JS as server and React as front end to manage inventory.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'express',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: '',
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Andromeda',
    description:
        'React Admin Dasboard',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: 'jobit',
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Weather-App',
    description:
        'Weatherapp builded with React Vite TS, Redux and Tailwind, using OW api',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'redux',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: 'tripguide',
    source_code_link: 'https://github.com/'
  }
]

export { projects }
