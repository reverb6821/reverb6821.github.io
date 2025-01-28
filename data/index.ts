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
  description: 'website made with ❤️ and JS',
  href: '/',
  githubUrl: 'https://github.com/reverb6821',
  linkedinUrl: 'https://www.linkedin.com/in/giuseppe-gigliotti-6821/'
}

const HOME_TITLE = "Hi, I'm Giuseppe Gigliotti"
const HOME_DESC = '💻 Front End Developer | 🐛 JavaScript Enthusiast |🐧 Linux'

const PROJECTS = [
  {
    title: "reverb6821.github.io",
    description: "This is my portfolio, builded with",
    href: "https://github.com/reverb6821/reverb6821.github.io/tree/master",
    techs: ["nextjs", "gh-pages", "tailwindcss"]
  }
]

const EXPERIENCES = [
  {
    title: "Front End Developer",
    company: "Shadcn",
    date: "2021 - Present",
    description: `Developing new applications in React and Redux.
Develop clean, efficient and maintainable code including using automated testing with Jest and React testing library.`
  },
  {
    title: "Front End Developer",
    company: "Dacomat",
    date: "May 2023 - Present",
    description: "I'm working"
  }, {
    title: "Front End Developer",
    company: "EasyCloud - Internet Innovation",
    date: "Feb 2021 - May 2023",
    description: `Development, design and maintenance of web applications using React, Redux Toolkit and Tailwind CSS for management, AIS systems and e-commerce.
        Debugging and troubleshooting within code using web browser development tools;
        Developing clean, efficient and maintainable code.`,
  }, {
    title: "Web Developer Internship",
    company: "ThinkOpen",
    date: "Jul 2020 - Sep 2020",
    description: "Internship in .NET technologies"
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