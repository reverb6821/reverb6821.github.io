'use client'

import * as React from 'react'
import * as motion from 'motion/react-client'
import usePaginationStore from '@/store/usePaginationStore'
import { AiFillGithub } from 'react-icons/ai'

interface RepositoryProps {
    title: string
    projects: {
        title: string
        description: string
        href: string
        tags: {
            name: string
            color: string
        }[]
    }[]
}

const Repository: React.FC<RepositoryProps> = (props) => {
    const { itemsShowed, increaseItemsShowed } = usePaginationStore();

    const currentProjects = props.projects.slice(0, itemsShowed);

    return (
        <React.Fragment>
            <section>
                <h2 className="font-semibold text-3xl" >
                    {props.title}
                </h2>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    {currentProjects && currentProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className=" bg-color-secondary rounded-md p-2 m-1 shadow-xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <div className="no-underline">
                                <div className="flex flex-col justify-between p-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-color-secondary font-semibold">{project.title}</span>
                                    </div>
                                    <p className="text-color-secondary overflow-hidden font-sans">
                                        {project.description}
                                    </p>
                                    <motion.a
                                        className='mt-4 flex flex-wrap gap-2 cursor-pointer text-color-secondary hover:text-color-primary hover:font-semibold'
                                        href={project.href}
                                        target='_blank'
                                        whileHover={{
                                            scaleX: [1, 1.1, 0.95, 1],
                                            scaleY: [1, 0.9, 1.05, 1]
                                        }}
                                    >
                                        <AiFillGithub size={20} />
                                        View on GitHub
                                    </motion.a>
                                    <div className="mt-1">
                                        <div className='mt-4 flex flex-wrap gap-2'>
                                            {project && project.tags && project.tags.map((tag, index) => (
                                                <p key={`${index}-${tag}`} className={`text-[14px] ${tag.color}`}>
                                                    #{tag.name}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {itemsShowed < props.projects.length && (
                        <div className='flex flex-col items-center justify-center col-span-2'>
                            <motion.button
                                className="mt-4 p-2 text-color-secondary hover:text-color-primary"
                                onClick={increaseItemsShowed}
                                whileHover={{
                                    scaleX: [1, 1.1, 0.95, 1],
                                    scaleY: [1, 0.9, 1.05, 1]
                                }}
                                whileTap={{ scale: 0.8 }}
                            >
                                Show more...
                            </motion.button>
                        </div>
                    )}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Repository