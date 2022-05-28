import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaCodepen
} from 'react-icons/fa';
import {RiMenu4Line, RiCloseFill, RiCodeSSlashLine, RiMailSendFill} from 'react-icons/ri'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  
    return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1e1e1e] text-gray-300'>

        <div>
            <RiCodeSSlashLine size={40} className={'text-red-600'}/>
        </div>
  
        {/* menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
  
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <RiMenu4Line size={30} /> : <RiCloseFill size={30} />}
        </div>
  
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#1e1e1e] flex flex-col justify-center items-center'
          }
        >
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
  
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg hover:bg-blue-600 '>
              <a
                className='flex justify-between items-center w-full text-blue-600 hover:text-[#fff]'
                href='https://www.linkedin.com/in/gigliottigiuseppe/'
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center text-[#fff] ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg  hover:bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-[#fff]'
                href='https://github.com/reverb6821'
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] text-[#fff] hover:ml-[-10px] duration-300 rounded-lg  hover:bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-[#fff]'
                href='https://codepen.io/reverb6821'
              >
                Codepen <FaCodepen size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg hover:bg-[#6fc2b0]'>
              <a
                className='flex justify-between items-center w-full text-[#6fc2b0] hover:text-[#fff]'
                href='mailto:giuseppe.gigliotti@outlook.com'
              >
                Contact Me <RiMailSendFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;