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
                            <p className='text-color-primary font-semibold'>🚀 My path:</p>
                            <ul className='text-color-secondary'>
                                <li className='py-2'>
                                    🎓I took training courses and studied independently, gaining skills in software development.
                                </li>
                                <li className='py-2'>
                                    💼 I worked as a frontend developer at several companies where I contributed to projects in React.js and Redux.
                                </li>
                                <li className='py-2'>
                                    🌐 Expert in React.js using TypeScript and vanilla, TailwindCSS and Redux with a strong passion for web development and the JavaScript ecosystem.
                                </li>
                            </ul>
                        </div>
                        
                        <div className='flex flex-col my-2 pt-4'>
                            <p className='text-color-primary font-semibold'>🔍 My interests:</p>
                            <ul className='text-color-secondary'>
                                <li className='py-2'>
                                    🌟 Web and mobile development: I have created responsive and performant applications using React.js, TailwindCSS, SCSS, Redux Toolkit.
                                </li>
                                <li className='py-2'>
                                    📚 Continuous learning: I am always looking for new challenges and opportunities for growth.
                                </li>
                                <li className='py-2'>
                                    🌐 Expert in React.js using TypeScript and vanilla, TailwindCSS and Redux with a strong passion for web development and the JavaScript ecosystem.
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