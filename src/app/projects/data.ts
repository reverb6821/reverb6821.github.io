import andromeda from '../../../public/andromeda.png'
import storelytic from '../../../public/storelytic.png'
import webpack from '../../../public/webpackdev.png'
import meteo from '../../../public/meteo.png'


const projectsData = [
    {
      id: 1,
      title: 'StoreLytic',
      desc: 'Storelytic is a PWA builded on a top of Express.JS as server and React as front end.',
      source_code_link: 'https://github.com/reverb6821/storelytic',
      imgSrc: storelytic,
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
    },
    {
      id: 2,
      title: 'Andromeda',
      desc: 'Andromeda is React Vite project. It includes essential components builded with TailwindCSS. It also have i18next, RTK and Storybook configured',
      source_code_link: 'https://github.com/reverb6821/andromeda',
      imgSrc: andromeda,
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient'
        },
        {
          name: 'tailwindcss',
          color: 'green-text-gradient'
        },
        {
          name: 'reduxtoolkit',
          color: 'pink-text-gradient'
        }
      ],
    },
    {
      id: 3,
      title: 'Webpack Boilerplate',
      desc: 'This is my boilerplate that I use in my regular workflow for a webpack dev server',
      source_code_link:  'https://github.com/reverb6821/webpack-server',
      imgSrc: webpack,
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
    },
    {
      id: 4,
      title: 'Weather App',
      desc: 'Wheather App builded with Redux, Tailwind and OW API',
      source_code_link: 'https://github.com/reverb6821/weather-app',
      imgSrc: meteo,
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
    },
  ]

  export default projectsData