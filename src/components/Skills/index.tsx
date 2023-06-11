import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.scss';
export default function NavBar() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="px-5 lg:px-0 relative h-[40vh] lg:h-[75vh] mt-40 lg:mt-28" id="skills">
         <h1
            data-aos="fade-up"
            className="text-center lg;text-4xl font-extrabold dark:text-gray-50"
         >
            Skills
         </h1>
         <p
            data-aos="fade-up"
            className="text-center text-gray-400 text-sm lg:text-lg font-medium mb-16"
         >
            Frontend
         </p>
         <ul className="skills w-full flex justify-center space-x-4">
            <li data-aos="zoom-in">
               <img src="/tech/tech-0.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-1.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-2.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-3.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-4.svg" alt="" />
            </li>
         </ul>
         <ul className="skills w-full mt-3 lg:mt-0 flex justify-center space-x-4">
            <li data-aos="zoom-in">
               <img src="/tech/tech-5.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-6.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-7.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-8.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-9.svg" alt="" />
            </li>
            <li data-aos="zoom-in">
               <img src="/tech/tech-10.svg" alt="" />
            </li>{' '}
         </ul>
      </div>
   );
}
