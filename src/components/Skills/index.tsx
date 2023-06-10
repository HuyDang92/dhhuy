// import { useState, useEffect } from 'react';

import './Skills.scss';
export default function NavBar() {
   return (
      <div className="relative h-[75vh] mt-20">
         <h1 className="text-center text-4xl font-extrabold dark:text-gray-50">Skills</h1>
         <p className="text-center text-gray-400 text-lg font-medium mb-16">Frontend</p>
         <ul className="skills flex justify-center space-x-4">
            <li>
               <img src="/tech/tech-0.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-1.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-2.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-3.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-4.svg" alt="" />
            </li>
         </ul>
         <ul className="skills flex justify-center space-x-4">
            <li>
               <img src="/tech/tech-5.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-6.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-7.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-8.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-9.svg" alt="" />
            </li>
            <li>
               <img src="/tech/tech-10.svg" alt="" />
            </li>{' '}
         </ul>
      </div>
   );
}
