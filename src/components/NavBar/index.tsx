import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

import './NavBar.scss';
import Button from '../Button';
import ToggleDarkMode from '../Toggle';
export default function NavBar() {
   const [scrolled, setScrolled] = useState(false);
   const moon = 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg';

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
         className={`w-full py-2 px-24 grid grid-cols-2 items-cente items-center fixed top-0 dark:bg-dark  bg-white z-20 ${
            scrolled ? 'scrolled' : ''
         }`}
      >
         <div className="flex">
            <div className="pe-5 r h-fit">
               <img className="w-[190px] " src="/logo.svg" alt="" />
               {/* <img className="w-[190px] " src="/logoLight.svg" alt="" /> */}
            </div>
            <ul className="ps-5 border-l-[1px] flex justify-between r w-full">
               <li className="navBar">
                  <a href="#home" className="text-purple">
                     Home
                  </a>
               </li>
               <li className="navBar">
                  <a href="#about" className="dark:text-gray-200">
                     About
                  </a>
               </li>
               <li className="navBar">
                  <a href="#skills" className="dark:text-gray-200">
                     Skills
                  </a>
               </li>
               <li className="navBar">
                  <a href="#project" className="dark:text-gray-200">
                     Projects
                  </a>
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
               Contact
            </Button>
         </div>
      </div>
   );
}
