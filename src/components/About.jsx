/* eslint-disable react/no-unknown-property */
import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

import { SiNestjs, SiJavascript, SiExpress, SiTailwindcss, SiReact, SiWebpack, SiTypescript, SiMysql, SiNodedotjs, SiGithub, SiSass } from 'react-icons/si'

import { AiOutlineHtml5 } from 'react-icons/ai'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-slate-200 text-[17px] max-w-3xl leading-[30px]'
      >
        Im a skilled software developer with experience in TypeScript and
        JavaScript, and expertise mainly in frontend frameworks like React, and
        a little bit of backend like Express and Nest.js. Im a quick learner and collaborate closely with team to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems.
      </motion.p>

      <motion.div variants={textVariant()} className='mt-5'>
        <h4 className={styles.skillHeadText}>Some of my Skills.</h4>
      </motion.div>

      <motion.div variants={fadeIn('', '', 0.1, 1)} className='flex flex-row flex-wrap justify-center gap-10'>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2'>
          <AiOutlineHtml5 className='w-20 mx-auto' size={50} color={'#F4A506'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiSass className='w-20 mx-auto' size={50} color={'#C26191'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiJavascript className='w-20 mx-auto' size={50} color={'#F2EE0F'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2'>
          <SiTypescript className='w-20 mx-auto' size={50} color={'#2F74C0'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiWebpack className='w-20 mx-auto' size={50} color={'#6FA6C2'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiReact className='w-20 mx-auto' size={50} color={'#61DAFB'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiTailwindcss className='w-20 mx-auto' size={50} color={'#6fc2b0'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiNodedotjs className='w-20 mx-auto' size={50} color={'#74A370'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiExpress className='w-20 mx-auto' size={50} color={'#FFF'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiNestjs className='w-20 mx-auto' size={50} color={'#F20F0F'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiMysql className='w-20 mx-auto' size={50} color={'#D68500'} />
        </motion.div>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-2 p-2' >
          <SiGithub className='w-20 mx-auto' size={50} color={'#6A2D94'} />
        </motion.div>
      </motion.div>

    </>
  )
}

export default SectionWrapper(About, 'about')
