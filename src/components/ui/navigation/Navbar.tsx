'use client' 
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion"
// import { useRouter } from "next/router";
import { HeaderProps } from '@/interfaces/components.properties';
import ThemeSwitcher from './partials/Theme.Switcher';

const Navbar: React.FC<HeaderProps> =({headerTitle, headerSubTitle, headerEl})=>{
  const [mobile, setMobile] = React.useState<boolean>(false);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 bg-color-primary">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl text-color-primary">
              {headerTitle}
            </h1>
            <p className="text-base font-light text-color-secondary">
              {headerSubTitle}
            </p>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          {headerEl && headerEl.length > 1
            ? headerEl.map((el, index) => (
          <Link
            key={index}
            href={el.route}
            className='text-color-secondary dark:text-slate-200 dark:hover:text-slate-300 hover:font-semibold'
            // use bold for active class
          >
             {el.label} 
          </Link>
           )) : ""}
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
          <ThemeSwitcher />
          <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
            type="button" 
            className=" text-color-primary inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-700" 
            onClick={() => setMobile(!mobile)}
          >
            <i className='ri-menu-line text-3xl' />
          </motion.button>
        </div>
      </div>
            {/* mobile */}
      <div className={`flex justify-center space-x-8 md:hidden mt-4 ${ mobile ? "block" : "hidden"}`}>
        {headerEl && headerEl.length > 1
            ? headerEl.map((el, index) => (
          <Link
            key={index}
            href={el.route}
            className="text-base font-normal text-color-secondary hover:font-semibold"
          >
             {el.label} 
          </Link>
           )) : ""}
      </div>
    </div>
  );
}

export default Navbar