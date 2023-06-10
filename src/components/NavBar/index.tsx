import { useState, useEffect } from 'react';

import './NavBar.scss';
import Button from '../Button';
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
         className={`w-full py-2 px-24 grid grid-cols-2 items-cente items-center fixed top-0  bg-white z-20 ${
            scrolled ? 'scrolled' : ''
         }`}
      >
         <div className="flex">
            <div className="pe-5 r h-fit">
               <img className="w-[190px] " src="/logo.svg" alt="" />
            </div>
            <ul className="ps-5 border-l-[1px] flex justify-between r w-full">
               <li className="navBar">
                  <a href="#home" className="text-purple">
                     Home
                  </a>
               </li>
               <li className="navBar">
                  <a href="#about" className="">
                     About
                  </a>
               </li>
               <li className="navBar">
                  <a href="#skills" className="">
                     Skills
                  </a>
               </li>
               <li className="navBar">
                  <a href="#project" className="">
                     Projects
                  </a>
               </li>
            </ul>
         </div>
         <div className="col-end-7 btn-contact">
            <Button title="Contact me" border>
               Contact
            </Button>
         </div>
      </div>
   );
}
