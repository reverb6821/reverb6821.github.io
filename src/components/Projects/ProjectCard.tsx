'use client'
import * as React from 'react';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { ProjectCardProps } from '@/interfaces/components.properties';

const ProjectCard: React.FC<ProjectCardProps> = ({ id, imgSrc, source_code_link, title, desc, tags }) => {
    return (
        <React.Fragment>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className='bg-color-secondary p-5 rounded-2xl sm:w-[360px] w-full shadow-xl'
            >
                <div className='relative w-full h-[230px]'>
                    <Image
                        src={imgSrc}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <motion.div
                            whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}
                            onClick={() => window.open(source_code_link, '_blank')}
                            className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <AiFillGithub size={50} />
                        </motion.div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-color-primary font-bold text-[24px]'>{title}</h3>
                    <p className='mt-2 text-color-secondary text-[14px]'>{desc}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </motion.div>
        </React.Fragment>
    )
}

export default ProjectCard