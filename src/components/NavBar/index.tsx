import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './NavBar.scss';
import Button from '../Button';
export default function NavBar() {
   const [scroll, setScroll] = useState(false);
   return (
      <div className="mt-5 grid grid-cols-2">
         <div className="flex">
            <div className="pe-5">
               <img className="w-[190px]" src="/logo.svg" alt="" />
            </div>
            <ul className="ps-5 border-l-[1px] grid grid-cols-4 w-full">
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
            <Button title="Contact me" bg="purple" text="#fff">
               Contact
            </Button>{' '}
         </div>
      </div>
   );
}
