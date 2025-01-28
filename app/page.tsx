import * as React from 'react'
import Link from 'next/link'
import Tech from '@/components/tech';
import Repository from '@/components/repository';
import Timeline from '@/components/timeline';
import { PROJECTS, HOME_TITLE, HOME_DESC, EXPERIENCES } from '@/data';

import { FaReact, FaCss3 } from 'react-icons/fa'
import { RiNextjsLine, RiTailwindCssFill, RiHtml5Line } from 'react-icons/ri'
import { SiShadcnui, SiRedux, SiJest, SiTestinglibrary } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import { LiaDocker } from 'react-icons/lia'
import { GrMysql } from 'react-icons/gr'

const TECHS = [
    {
      name: "HTML",
      icon: <RiHtml5Line size={30} color='#ff5733' />
  
    },
    {
      name: "CSS",
      icon: <FaCss3 size={30} color='#33b8ff'/>
  
    },
    {
      name: "Typescript",
      icon: <TbBrandTypescript size={30} color='#1772ff' />
    },
    {
      name: "NextJS",
      icon: <RiNextjsLine size={30} className='color-slate-900 dark:color-slate-50' />
  
    },
    {
      name: "ReactJS",
      icon: <FaReact size={30} color='#3383ff'/>
    },
    {
      name: "Redux",
      icon: <SiRedux size={30} color='#cf02ec'/>
    },
    {
      name: "RTL",
      icon: <SiTestinglibrary size={30} color='#e03446' />
    },
    {
      name: "Jest",
      icon: <SiJest size={30} color='#b20618'/>
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill size={30} color='#0baac3'/>
    },
    {
      name: "Shadcn-ui",
      icon: <SiShadcnui size={30}  className='color-slate-900 dark:color-slate-50'/>
    },
    {
      name: "Docker",
      icon: <LiaDocker size={30} color='#3c9ac6'/>
    },
    {
      name: "Mysql",
      icon: <GrMysql size={30} color='#e57d35' />
    }
  ]

export default function Home() {
  return (
    <React.Fragment>
      <div className="full-container flex">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">
            <Link href="/">
              {HOME_TITLE}
            </Link>
          </h1>
          <p className="mt-5 font-normal text-color-secondary leading-relaxed">
            {HOME_DESC}
          </p>
        </div>
      </div>

       <div className="full-container mt-10">
            <Tech title='Tech' techs={TECHS}/>
        </div>

        <div className="full-container mt-20">
            <Repository title='My GitHub Repositories' projects={PROJECTS}/>
        </div>

        <div className="full-container mt-10">
            <Timeline title='My Experience' experiences={EXPERIENCES}/>
        </div>
    </React.Fragment>
  );
}
