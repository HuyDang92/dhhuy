// import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowPointer, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import './Home.scss';
export default function NavBar() {
   return (
      <div className="mt-24 grid grid-cols-2">
         <div className="homeLeft">
            <h1 className="text-5xl font-extrabold leading-[80px]">
               Hi There! <br /> I’m <b>Huynh Huy</b> Frontend Developer
            </h1>
            <p className="text-lg font-medium text-gray-400 my-5">
               I like creating beautiful and extensible UI products with great user experiences
            </p>
            <div className="relative z-0">
               <Button title="Contact me" primary>
                  Contact me
               </Button>
               <span className="movePointer relative left-32 bottom-5 text-2xl">
                  <FontAwesomeIcon icon={faArrowPointer} />
               </span>
            </div>
            <div className="flex align-center mt-10">
               <div className="social space-x-3 border-r-2 text-3xl pe-5">
                  <a href="#">
                     <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#">
                     <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
               </div>
               <span className="text-lg ps-5">
                  Scroll down{' '}
                  <i className="scroll">
                     <FontAwesomeIcon icon={faCircleArrowDown} />
                  </i>
               </span>
            </div>
         </div>
         <div className="homeRight me-14">
            <div className="relative z-0">
               <img className="w-full" src="/banner.svg" alt="" />
               <img className="as absolute top-10 left-8 w-48" src="/as.svg" alt="" />
               <img className="cloud absolute  top-0 right-5 w-36" src="/cloud.svg" alt="" />
               <img
                  className="computer absolute top-20 -right-16 w-40"
                  src="/computer.svg"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
}
