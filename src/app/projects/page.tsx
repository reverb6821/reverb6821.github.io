import * as React from 'react';
import Heading from '@/components/ui/heading/Heading';
import ProjectCard from '@/components/Projects/ProjectCard';
import projectsData from './data'
import SubHeading from '@/components/ui/heading/SubHeading';

const Projects = () => {
    const description= 'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.'

    return(
        <React.Fragment>
            <section className="bg-color-primary">
                <Heading title='Projects' />
                <SubHeading description={description} />
                <div className="bg-color-primary">
                    <div className="max-w-6xl mx-auto flex flex-wrap gap-7 py-20 pb-40">
                    {projectsData.map((proj, idx) => (
                        <ProjectCard
                        key={proj.id}
                        title={proj.title}
                        desc={proj.desc}
                        source_code_link={proj.source_code_link}
                        imgSrc={proj.imgSrc}
                        id={`${proj.id + 1}`}
                        tags={proj.tags}
                        />
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects