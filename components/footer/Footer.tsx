import * as React from 'react'
import * as motion from 'motion/react-client'
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';

interface FooterProps {
    year: number
    title: string
    href: string
    description: string
    linkedinUrl: string
    githubUrl: string
}

const Footer: React.FC<FooterProps> = (props) => (
    <React.Fragment>
        <footer className="w-full bottom-0 text-color-primary bg-color-primary bg-opacity-50">
            <div className="py-3 px-3 mx-auto flex flex-col md:flex-row justify-between md:items-center">
                <p className="text-sm font-semibold sm:ml-2 sm:pl-4 sm:mt-1 mt-4">
                    © {props.year} {props.title}
                </p>
                <p>
                    <motion.a
                        href={props.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className='text-sm font-normal hover:font-semibold text-color-primary hover: text-color-secondary'
                    >
                        {props.description}
                    </motion.a>
                </p>
                <div className="space-x-4 flex flex-row items-center">
                    <motion.a
                        href={props.githubUrl}
                        target="_blank"
                        className="text-sm font-normal hover:font-semibold text-color-primary hover: text-color-secondary"
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.8 }}
                    >
                        <VscGithubAlt size={20} />
                    </motion.a>
                    <motion.a
                        href={props.linkedinUrl}
                        target="_blank"
                        className="text-sm font-normal hover:font-semibold text-color-primary hover:text-color-secondary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <CiLinkedin size={20} />
                    </motion.a>
                </div>
            </div>
        </footer>
    </React.Fragment>
)

export default Footer