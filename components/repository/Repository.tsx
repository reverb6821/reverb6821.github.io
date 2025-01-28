import * as React from 'react'

interface RepositoryProps {
    title: string
    projects: {
        title: string
        description: string
        href: string
        techs: string[]
    }[]
}

const Repository: React.FC<RepositoryProps> = (props) => (
    <React.Fragment>
        <section>
            <h2 className="font-semibold text-3xl" >
                {props.title}
            </h2>
            <div className="grid grid-cols-2 gap-2 mt-4">
                {props.projects && props.projects.map((project, index) => (
                    <div key={index} className="cursor-pointer border rounded-md border-opacity-25 shadow-xl">
                        <a href={project.href} className="no-underline">
                            <div className="flex flex-col justify-between p-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-color-secondary font-semibold">{project.title}</span>
                                </div>
                                <p className="text-color-secondary overflow-hidden font-sans">
                                    {project.description}
                                </p>
                                <div className="mt-1">
                                    {project && project.techs && project.techs.map((tech, index) => (
                                        <div key={`${index}-${tech}`} className='flex flex-row items-start'>
                                                #{tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    </React.Fragment>
)

export default Repository