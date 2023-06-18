import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowPointer, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Button from '../Button';
import './Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function NavBar() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="px-5 lg:px-0 pt-20 lg:pt-24 grid grid-cols-2" id="home">
         <div className="homeLeft">
            <h1
               data-aos="fade-right"
               className="text-[20px] lg:text-5xl dark:dark:text-gray-50 font-extrabold lg:leading-[80px]"
            >
               Hi There! <br /> I’m <b>Huynh Huy</b> Frontend Developer
            </h1>
            <p
               data-aos="fade-right"
               className="text-[10px] lg:text-lg font-medium text-gray-400 my-2 lg:my-5"
            >
               I like creating beautiful and extensible UI products with great user experiences
            </p>
            <div data-aos="fade-up" className="relative z-0">
               <Button title="Contact me" primary>
                  <Link
                     activeClass="active"
                     to="contact"
                     spy={true}
                     smooth={true}
                     offset={-100}
                     duration={500}
                  >
                     Contact me
                  </Link>
               </Button>
               <span className="movePointer relative dark:text-gray-50 left-20 lg:left-32 bottom-5 text-2xl">
                  <FontAwesomeIcon icon={faArrowPointer} />
               </span>
            </div>
            <div className="flex align-center lg:mt-10">
               <div className="dark:text-gray-50 flex social space-x-3 border-r-2 text-xl lg:text-3xl pe-5">
                  <a href="https://www.facebook.com/dang.huy.7374" target="_blank">
                     <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://github.com/HuyDang92" target="_blank">
                     <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://github.com/HuyDang92" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
               </div>
               <span className="hidden lg:block lg:text-lg ps-5 dark:text-gray-50 cursor-pointer">
                  <Link
                     activeClass="active"
                     to="about"
                     spy={true}
                     smooth={true}
                     offset={-100}
                     duration={500}
                  >
                     Scroll down
                  </Link>
                  <i className="scroll ps-2">
                     <FontAwesomeIcon icon={faCircleArrowDown} />
                  </i>
               </span>
            </div>
         </div>
         <div data-aos="fade-left" className="homeRight lg:me-14">
            <div className="relative z-0">
               <img className="w-full" src="/banner.svg" alt="" />
               <img
                  className="as absolute top-0 lg:top-10 left-0 w-20 lg:left-8 lg:w-48"
                  src="/as.svg"
                  alt=""
               />
               <img
                  className="cloud absolute -top-3 lg:top-0 right-0 lg:right-5 w-16 lg:w-36"
                  src="/cloud.svg"
                  alt=""
               />
               <img
                  className="computer w-20 lg:absolute lg:top-20 lg:-right-10 lg:w-40"
                  src="/computer.svg"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
}
