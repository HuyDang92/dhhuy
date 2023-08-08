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
      <div className="px-5 lg:px-0 relative lg:min-h-[80vh] mt-32 lg:mt-20" id="projects">
         <h1
            data-aos="fade-up"
            className="text-center text-xl lg:text-4xl font-extrabold mb-8 lg:mb-14 dark:text-gray-50"
         >
            Projects
         </h1>
         <div className="grid lg:grid-cols-2 mb-20 lg:mb-10">
            <div data-aos="fade-right" className="thumb rounded-2xl">
               <img
                  className="w-full"
                  style={{ borderRadius: '30px' }}
                  src="/project/Project3.png"
                  alt=""
               />
            </div>
            <div data-aos="zoom-in" className="info lg:w-[80%] lg:ps-10">
               <h2 className="text-center lg:text-2xl font-bold my-2 dark:text-gray-50">
                  HDCourse
               </h2>
               <p className="text-sm lg:text-lg font-medium text-gray-400">
                  Website to watch movies online with functions such as category, filter movies by
                  name, dark mode, authen, comment by movie, history... and admin page(CRUD)
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
                     <a target="_blank" href="https://github.com/HuyDang92/hdcourse-react">
                        Source
                        <i className="px-1">
                           <FontAwesomeIcon icon={faGithub} />
                        </i>
                     </a>
                  </Button>
                  <Button title="Contact me" border>
                     <a href="https://hdcourse.vercel.app/" target="_blank">
                        Live demo
                        <i className="px-1">
                           <FontAwesomeIcon icon={faGlobe} />
                        </i>
                     </a>
                  </Button>
               </div>
            </div>
         </div>
         <div className="grid lg:grid-cols-2 mb-10">
            <div data-aos="fade-right" className="info lg:w-[80%] lg:ps-10">
               <h2 className="text-center lg:text-2xl font-bold my-2 dark:text-gray-50">TaskHub</h2>
               <p className="text-sm lg:text-lg font-medium text-gray-400">
                  Trello clone with authen, create boards, add lists, add cards, move cards, add
                  members...
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
                     <a href="https://github.com/HuyDang92/taskhub" target="_blank">
                        Source
                        <i className="px-1">
                           <FontAwesomeIcon icon={faGithub} />
                        </i>
                     </a>
                  </Button>
                  {/* <Button title="Contact me" border>
                     Live demo
                     <i className="px-1">
                        <FontAwesomeIcon icon={faGlobe} />
                     </i>
                  </Button> */}
               </div>
            </div>
            <div data-aos="zoom-in" className="thumb">
               <img
                  className="lg:p-5 lg:mt-0 mt-5 rounded-2xl lg:rounded-[50px]"
                  src="/project/project2.png"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
}
