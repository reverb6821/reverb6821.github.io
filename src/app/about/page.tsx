'use client'
import * as React from 'react';
import Contact from '@/components/About/Contact';
import Heading from '@/components/ui/heading/Heading';
import TechIcon from '@/components/ui/theme/TechIcon';
import SubHeading from '@/components/ui/heading/SubHeading';

const About: React.FC = () => {
    const description = 'Im a skilled software developer with experience in TypeScript and JavaScript, and expertise mainly in frontend frameworks like React, and a little bit of backend with Express. Im a quick learner and collaborate closely with team to create efficient, scalable, and user-friendly solutions that solve real-world problems.'
    return (
        <React.Fragment>
            <section className="bg-slate-200 dark:bg-slate-600">
                <Heading title='Who Am I' />
                <SubHeading description={description} />
                <div className="bg-slate-200 dark:bg-slate-600 px-4">
                    <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                        <Contact />
                        <div className="col-span-1 md:col-span-2">
                            {/* description */}
                            <p className="text-xl text-slate-700 dark:text-slate-300 mb-4 pb-10">
                                Over the last years, I've worked on numerous projects that required deep knowledge of React, Redux, and TypeScript.
                                I developed complex web applications using React with Typescript ans managed application state with Redux aboard of modern, responsive user interfaces  with mainly Tailwind CSS and plain sass.
                                I'm passionate about clean, well-structured code, and I firmly believe in continuous learning and improvement.
                                I have a solid understanding of responsive design principles and web accessibility, and always strive to create intuitive and engaging user experiences.
                            </p>
                            <div className='flex flex-row flex-wrap justify-center gap-10'>
                                <TechIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About