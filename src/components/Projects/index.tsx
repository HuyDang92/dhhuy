// import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Button from '../Button';
import './Projects.scss';
export default function NavBar() {
   return (
      <div className="relative min-h-[80vh] mt-20">
         <h1 className="text-center text-4xl font-extrabold mb-14 dark:text-gray-50">Projects</h1>
         <div className="grid grid-cols-2 mb-10">
            <div className="thumb">
               <img className="p-5" src="/project/project1.png" alt="" />
            </div>
            <div className="info w-[80%] ps-10">
               <h2 className="text-center text-2xl font-bold my-2 dark:text-gray-50">CineVerse</h2>
               <p className="text-lg font-medium text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
               </p>
               <ul className="tech flex justify-center space-x-2 py-5">
                  <li>
                     <img src="/tech/tech-4.svg" alt="" />
                  </li>
                  <li>
                     <img src="/tech/tech-2.svg" alt="" />
                  </li>
                  <li>
                     <img src="/tech/tech-6.svg" alt="" />
                  </li>
                  <li>
                     <img src="/tech/tech-10.svg" alt="" />
                  </li>
               </ul>
               <div className="flex justify-center space-x-3">
                  <Button title="Contact me" primary>
                     Source
                     <i className="px-1">
                        <FontAwesomeIcon icon={faGithub} />
                     </i>
                  </Button>
                  <Button title="Contact me" border>
                     Live demo
                     <i className="px-1">
                        <FontAwesomeIcon icon={faGlobe} />
                     </i>
                  </Button>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-2 mb-10">
            <div className="info w-[80%] ps-10">
               <h2 className="text-center text-2xl font-bold my-2 dark:text-gray-50">TaskHub</h2>
               <p className="text-lg font-medium text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
               </p>
               <ul className="tech flex justify-center space-x-2 py-5">
                  <li>
                     <img src="/tech/tech-4.svg" alt="" />
                  </li>
                  <li>
                     <img src="/tech/tech-9.svg" alt="" />
                  </li>
                  <li>
                     <img src="/tech/tech-7.svg" alt="" />
                  </li>
               </ul>
               <div className="flex justify-center space-x-3">
                  <Button title="Contact me" primary>
                     Source
                     <i className="px-1">
                        <FontAwesomeIcon icon={faGithub} />
                     </i>
                  </Button>
                  <Button title="Contact me" border>
                     Live demo
                     <i className="px-1">
                        <FontAwesomeIcon icon={faGlobe} />
                     </i>
                  </Button>
               </div>
            </div>
            <div className="thumb">
               <img className="p-5 rounded-[50px]" src="/project/project2.png" alt="" />
            </div>
         </div>
      </div>
   );
}
