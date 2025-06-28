import * as React from 'react'
import { CONTACT_INFO } from '@/data'
import Contact from '@/components/contact'

const About: React.FC = () => (
    <React.Fragment>
        <div className="full-container flex">
            <div className="mt-4 mb-6">
                <h2 className="text-4xl font-semibold">About</h2>
                <p className="mt-2">
                    I am Giuseppe Gigliotti, an enthusiastic developer with 4+ years of experience with a history dating back to the
                    days of 56k modems and Windows 95. My passion for technology has driven me to constantly explore and learn,
                    leading me to become the expert I am today.
                </p>
                <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    <Contact heading="Social Links" contact={CONTACT_INFO} />
                    <div className="col-span-1 md:col-span-2">
                        <div className='flex flex-col my-2'>
                            <p className='text-color-primary font-semibold'>🚀 My Journey</p>
                            <ul className='text-color-secondary'>
                                <li className='py-2'>
                                    🎓 I’ve completed formal training programs and pursued self-directed learning to build a strong foundation in software development.
                                </li>
                                <li className='py-2'>
                                    💼 Professionally, I’ve worked as a software developer in various companies, contributing to projects using React.js, Redux Toolkit, and TypeScript.
                                </li>
                                <li className='py-2'>
                                    🌐 Over time, I’ve specialized in the JavaScript ecosystem, focusing on modern web development and scalable front-end architecture.
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col my-2 pt-4'>
                            <p className='text-color-primary font-semibold'>💡 Core Technical Skills</p>
                            <ul className='text-color-secondary'>
                                <li className='py-2'>
                                    Frontend Development: Hands-on experience with React, Next.js, Angular, and Vue.js, choosing the right stack based on project needs.
                                </li>
                                <li className='py-2'>
                                    Styling & UI/UX: I create responsive, accessible interfaces using SCSS with BEM methodology, TailwindCSS, and component libraries like Chakra UI, and shadcn/ui.
                                </li>
                                <li className='py-2'>
                                    Testing: I write robust automated tests using Jest, Vitest, and React Testing Library to ensure code reliability, scalability, and maintainability.
                                </li>
                                <li className='py-2'>
                                    Documentation: I document API endpoints using Swagger and UI components using Storybook, promoting clarity and consistency across teams.
                                </li>
                                <li className='py-2'>
                                    Debugging & Optimization: I actively work on optimizing and refactoring code using browser devtools and integrated debugging tools.
                                </li>
                                <li className='py-2'>
                                    Workflow & Collaboration: I thrive in Agile environments, using GitHub Issues to manage tasks and foster transparent, collaborative workflows.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default About