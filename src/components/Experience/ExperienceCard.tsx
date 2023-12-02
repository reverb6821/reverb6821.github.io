'use client'
import * as React from 'react';
import { motion } from 'framer-motion'
import { ExperienceCardProps } from '@/interfaces/components.properties';

const ExperienceCard:React.FC<ExperienceCardProps> = ({ id, title, desc, year, company }) => {
return(
    <React.Fragment>
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative border dark:border-slate-600 p-4 rounded-md shadow-xl bg-color-secondary z-10 mx-4">
            <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-2xl sm:text-4xl text-slate-700 dark:text-slate-300 font-bold ">
                {year}
            </h1>
            <h1 className="font-semibold text-xl text-color-primary">{title}</h1>
            <p className="text-color-secondary">
                {company}
            </p>
            <p className="text-slate-600 dark:text-slate-400 my-2">{desc}</p>
        </motion.div>
    </React.Fragment>
)
}

export default ExperienceCard