import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-scroll';

import './NavBar.scss';
import Button from '../Button';
import ToggleDarkMode from '../Toggle';
export default function NavBar() {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   return (
      <div
         className={`dark:bg-dark w-full xl:px-[8%] 1xl:px-[10%] flex justify-center bg-white fixed top-0 z-20 py-2 grid grid-cols-2 items-cente items-center  ${
            scrolled ? 'scrolled' : ''
         }`}
      >
         <div className="flex col-span-1">
            <div className="pe-5 r h-fit">
               <h2 className="dark:text-white transition-all relative before:absolute before:w-2 before:h-2 before:bg-red-600 before:rounded-full before:bottom-1 before:left-[49px] w-28 font-extrabold text-2xl">
                  DH HUY
               </h2>
            </div>
            <ul className="ps-5 border-l-[1px] flex justify-between r w-full">
               <li className="navBar dark:text-gray-200">
                  <Link
                     activeClass="active"
                     to="home"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                  >
                     Home
                  </Link>
               </li>
               <li className="navBar">
                  <span className="dark:text-gray-200">
                     <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                     >
                        About
                     </Link>
                  </span>
               </li>
               <li className="navBar">
                  <span className="dark:text-gray-200">
                     <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-140}
                        duration={500}
                     >
                        Skills
                     </Link>
                  </span>
               </li>
               <li className="navBar">
                  <span className="dark:text-gray-200">
                     <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                     >
                        Projects
                     </Link>
                  </span>
               </li>
            </ul>
         </div>
         <div className="col-end-7 btn-contact flex items-center">
            <div className="text-gray-500 pe-5 flex items-center">
               <FontAwesomeIcon icon={faSun} />
               <ToggleDarkMode />
               <FontAwesomeIcon icon={faMoon} />
            </div>
            <Button title="Contact me" border>
               <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
               >
                  Contact
               </Link>
            </Button>
         </div>
      </div>
   );
}
