import * as React from 'react'
import { CONTACT_INFO } from '@/data'
import Contact from '@/components/contact'

const About: React.FC = () => (
    <React.Fragment>
        <div className="full-container flex">
            <div className="mt-4 mb-6">
                <h2 className="text-4xl font-semibold">About</h2>
                <p className="mt-2">
                Im a skilled software developer with experience in TypeScript and JavaScript, and expertise mainly in frontend frameworks like React, and a little bit of backend with Express. Im a quick learner and collaborate closely with team to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                </p>
                <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    <Contact heading="Social Links" contact={CONTACT_INFO} />
                    <div className="col-span-1 md:col-span-2">
                    <p>
                        Over the last years, I&apos;ve worked on numerous projects that required deep knowledge of React, Redux, and TypeScript.
                        I developed complex web applications using React with Typescript ans managed application state with Redux aboard of modern, responsive user interfaces  with mainly Tailwind CSS and plain sass.
                        I&apos;m passionate about clean, well-structured code, and I firmly believe in continuous learning and improvement.
                        I have a solid understanding of responsive design principles and web accessibility, and always strive to create intuitive and engaging user experiences.
                    </p> 
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default About