'use client'
import * as React from 'react';
import { FooterProps } from '@/interfaces/components.properties';
import { motion } from 'framer-motion'
import { FaHeart } from "react-icons/fa";

const Footer: React.FC<FooterProps> = ({ footerTitle, footerEl }) => {
    return (
        <React.Fragment>
            <div className="bg-color-primary">
                <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
                    <div className="h-0.5 w-full bg-color-secondary"></div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
                        <div>
                            <p className='text-color-secondary'>&copy; {footerTitle}. All Rights Reserved.</p>
                        </div>
                        <div className='text-color-secondary'>
                            Developed with {' '}
                            <div className="inline-block">
                                <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
                                    <FaHeart color={'#DF3713'}/>
                                </motion.div>
                            </div>
                        </div>
                        <div className="space-x-4 flex flex-row items-center">
                            <a
                                href='https://github.com/reverb6821'
                                target="_blank"
                                className="text-base font-normal text-color-secondary hover:font-semibold"
                            >
                                < i className="ri-github-line"></i>
                            </a>
                            <a
                                href='https://www.linkedin.com/in/gigliottigiuseppe/'
                                target="_blank"
                                className="text-base font-normal text-color-secondary hover:font-semibold"
                            >
                                <i className="ri-linkedin-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer