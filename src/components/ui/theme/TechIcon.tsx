import * as React from 'react';
import { motion } from 'framer-motion'
import { SiRedux, SiNextdotjs, SiExpress, SiTailwindcss, SiReact, SiWebpack, SiTypescript, SiMysql, SiNodedotjs, SiGithub, SiSass } from 'react-icons/si'
import { AiOutlineHtml5 } from 'react-icons/ai'

const TechIcon = () => {
return(
    <React.Fragment>
        <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2'>
            <AiOutlineHtml5 className='w-20 mx-auto' size={50} color={'#F4A506'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiSass className='w-20 mx-auto' size={50} color={'#C26191'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiTailwindcss className='w-20 mx-auto' size={50} color={'#6fc2b0'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2'>
            <SiTypescript className='w-20 mx-auto' size={50} color={'#2F74C0'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiNextdotjs className='w-20 mx-auto' size={50} color={'#242526'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiReact className='w-20 mx-auto' size={50} color={'#61DAFB'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiRedux className='w-20 mx-auto' size={50} color={'#fb61b6'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiWebpack className='w-20 mx-auto' size={50} color={'#6FA6C2'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiNodedotjs className='w-20 mx-auto' size={50} color={'#74A370'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiExpress className='w-20 mx-auto' size={50} color={'#FFF'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiMysql className='w-20 mx-auto' size={50} color={'#D68500'} />
          </motion.div>
          <motion.div whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} className='m-5 p-2' >
            <SiGithub className='w-20 mx-auto' size={50} color={'#6A2D94'} />
          </motion.div>
    </React.Fragment>
)
}

export default TechIcon