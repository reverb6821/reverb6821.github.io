const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  }
]

const FOOTER_ITEMS = {
  year: new Date().getFullYear(),
  title: 'Giuseppe Gigliotti ',
  description: 'website made with ❤️',
  href: '/',
  githubUrl: 'https://github.com/reverb6821',
  linkedinUrl: 'https://www.linkedin.com/in/giuseppe-gigliotti-6821/'
}

const HOME_TITLE = "Hi, I'm Giuseppe Gigliotti"
const HOME_DESC = '💻 Front End Developer | 🐛 JavaScript Enthusiast |🐧 Linux'

const PROJECTS = [
  {
    title: "reverb6821.github.io",
    description: "This is my portfolio, builded with Next.js and Tailwind",
    href: "https://github.com/reverb6821/reverb6821.github.io",
    tags: [
      {
        name: 'nextjs',
        color: 'gray-text-gradient'
      },
      {
        name: 'zustand',
        color: 'pink-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient'
      }
    ]
  },
  {
    title: "aquariumnext",
    description: "A web app to manage your aquarium and track the parameters of the water",
    href: "https://github.com/reverb6821/aquariumnext",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'zustand',
        color: 'pink-text-gradient'
      },
      {
        name: 'docker',
        color: 'blue-text-gradient'
      }
    ]
  },
  {
    title: "andromeda",
    description: "Collection of react components builded with tailwind and shadcn",
    href: "https://github.com/reverb6821/andromeda",
    tags: [
      {
        name: 'shadcn',
        color: 'gray-text-gradient'
      },
      {
        name: 'storybook',
        color: 'pink-text-gradient'
      },
      {
        name: 'react',
        color: 'blue-text-gradient'
      }
    ]
  },
  {
    title: "autoclose-taggerplus-extensions",
    description: "A lightweight and smart Visual Studio Code extension that automatically inserts closing HTML-like tags and CSS/SCSS/LESS code blocks.",
    href: "https://github.com/reverb6821/autoclose-taggerplus-extensions",
    tags: [
      {
        name: 'visual-studio-code',
        color: 'blue-text-gradient'
      },
      {
        name: 'typescript',
        color: 'gray-text-gradient'
      },
    ]
  },
  // {
  //   title: "Mauro Di Rubbo Photographer",
  //   description: "Website for photographer",
  //   href: "https://maurodirubbophotographer.it/",
  //   tags: [
  //     {
  //       name: 'wordpress',
  //       color: 'pink-text-gradient'
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'green-text-gradient'
  //     }
  //   ]
  // }
]

const EXPERIENCES = [
  {
    title: "Front End Developer",
    company: "Dacomat",
    date: "May 2023 - Present",
    description: `Frontend development activities with React (version 18) and Redux, oriented to the creation of modern, responsive and high-performance interfaces. Design and implementation of automated testing using Jest and React Testing Library, with the goal of ensuring code reliability and maintainability. Debugging activities and optimization of existing code using browser development tools and debugger, with emphasis on identifying and resolving issues related to performance, unexpected behavior, and state management.`
  },
  {
    title: "Front End Developer",
    company: "EasyCloud - Internet Innovation",
    date: "Feb 2021 - May 2023",
    description: `Development of in-house applications and custom solutions for end customers in the logistics, ship and rail tracking industries, with a focus on performance, scalability and reliability. Predominant use of React (v16 and 18) and Angular (v.12) in combination with Redux Toolkit for advanced application state management and TailwindCSS for building modern, responsive interfaces.
      Active involvement in the technical analysis and architectural evaluation phases of projects, helping to define the most suitable solutions in terms of technology stack, scalability and code maintenance over time.
      Design and development of automated tests with Jest and React Testing Library, aimed at ensuring high code coverage and quality.
      Collaboration in the development and maintenance of e-commerce platforms on Symfony and MariaDB stacks, dealing with both new implementations and optimization of existing code.
      Managing and configuring development environments using Docker, ensuring consistency across environments, portability and ease of integration across the team.`,
  }, {
    title: "Web Developer Internship",
    company: "ThinkOpen",
    date: "Jul 2020 - Sep 2020",
    description: `Training internship in the area of web development, during which I had
      Model-View-Controller (MVC) architectural pattern: implementation of applications structured to ensure separation of responsibilities between user interface, business logic and data management.
      .NET platform: use of the .NET framework for web application development, with emphasis on the ASP.NET environment.
      API development and consumption: API design and integration, with emphasis on RESTful APIs for client-server communication.
      DOM manipulation: dynamic interaction with the structure of HTML pages using JavaScript to enhance the user experience.
      REST services: use and implementation of RESTful web services for distributed applications.
      `
  }
]

const CONTACT_INFO = [
  {
    name: "GitHub",
    href: "https://github.com/reverb6821"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/giuseppe-gigliotti-6821/"
  }
]

export { NAV_ITEMS, FOOTER_ITEMS, HOME_TITLE, HOME_DESC, PROJECTS, EXPERIENCES, CONTACT_INFO }