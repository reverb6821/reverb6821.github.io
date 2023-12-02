// import { useTranslation } from 'react-i18next';
"use client"
import * as React from 'react';
import SubHeading from '@/components/ui/heading/SubHeading';
import Avatar from '../../public/hero_logo.webp'
import Hero from '@/components/MainPage/Hero';


function Home() {
  return (
    <React.Fragment>
      <Hero avatar={Avatar} />
      <SubHeading description='' />
      <SubHeading description='' />
      <SubHeading description='' />
    </React.Fragment>
   
  )
}

export default Home;