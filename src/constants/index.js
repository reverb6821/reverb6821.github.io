import {
  andromeda,
  storelytic,
  meteo,
  movie,
  snake,
  webpack
} from '../assets'

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
        'Storelytic is a PWA builded on a top of Express.JS as server and React as front end.',
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
        color: 'green-text-gradient'
      }
    ],
    image: storelytic,
    source_code_link: 'https://github.com/reverb6821/storelytic'
  },
  {
    name: 'Andromeda',
    description:
        'React Admin Dasboard builded with MUI and Tailwind (work in progress...)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient'
      },
      {
        name: 'mui',
        color: 'pink-text-gradient'
      }
    ],
    image: andromeda,
    source_code_link: 'https://github.com/reverb6821/andromeda'
  },
  {
    name: 'Weather App',
    description:
        'Wheather App builded with Redux, Tailwind and OW API',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient'
      },
      {
        name: 'redux',
        color: 'pink-text-gradient'
      }
    ],
    image: meteo,
    source_code_link: 'https://github.com/reverb6821/weather-app'
  },
  {
    name: 'Movie App',
    description:
        'Movie App builded with React, Tailwind and TMDB API',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient'
      },
      {
        name: 'tmdb',
        color: 'orange-text-gradient'
      }
    ],
    image: movie,
    source_code_link: 'https://github.com/reverb6821/movie-app-react'
  },
  {
    name: 'Snake',
    description:
        'Snake popular game builded with React and Sass',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'snake',
        color: 'pink-text-gradient'
      },
      {
        name: 'games',
        color: 'orange-text-gradient'
      }
    ],
    image: snake,
    source_code_link: 'https://github.com/reverb6821/react-snake'
  },
  {
    name: 'Webpack Boilerplate',
    description:
        'This is my boilerplate that I use in my regular workflow for a webpack dev server',
    tags: [
      {
        name: 'webpack',
        color: 'blue-text-gradient'
      },
      {
        name: 'sass',
        color: 'pink-text-gradient'
      },
      {
        name: 'pug',
        color: 'orange-text-gradient'
      }
    ],
    image: webpack,
    source_code_link: 'https://github.com/reverb6821/webpack-server'
  }
]

export { projects }
