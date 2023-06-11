import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../Button';
import './Projects.scss';
export default function NavBar() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="relative lg:min-h-[80vh] mt-20" id="projects">
         <h1
            data-aos="fade-up"
            className="text-center lg:text-4xl font-extrabold mb-10 lg:mb-14 dark:text-gray-50"
         >
            Projects
         </h1>
         <div className="grid grid-cols-2 mb-10">
            <div data-aos="fade-right" className="thumb">
               <img className="p-5" src="/project/project1.png" alt="" />
            </div>
            <div data-aos="fade-left" className="info w-[80%] lg:ps-10">
               <h2 className="text-center lg:text-2xl font-bold my-2 dark:text-gray-50">
                  CineVerse
               </h2>
               <p className="text-[7px] lg:text-lg font-medium text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
               </p>
               <ul className="tech flex w-24 lg:w-40 justify-center space-x-2 py-5">
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
               <div className="hidden lg:flex justify-center space-x-3">
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
         <div className="grid grid-cols-2 mb-10 px-5 lg:px-0">
            <div data-aos="fade-right" className="info w-[80%] lg:ps-10">
               <h2 className="text-center lg:text-2xl font-bold my-2 dark:text-gray-50">TaskHub</h2>
               <p className="text-[7px] lg:text-lg font-medium text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
               </p>
               <ul className="tech w-20 lg:w-32 flex justify-center space-x-2 py-5">
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
               <div className="hidden lg:flex justify-center space-x-3">
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
            <div data-aos="fade-left" className="thumb">
               <img className="p-5 rounded-[50px]" src="/project/project2.png" alt="" />
            </div>
         </div>
      </div>
   );
}
