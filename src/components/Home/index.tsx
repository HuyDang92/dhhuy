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
      <div className="pt-24 grid grid-cols-2" id="home">
         <div className="homeLeft">
            <h1
               data-aos="fade-right"
               className="text-5xl dark:dark:text-gray-50 font-extrabold leading-[80px]"
            >
               Hi There! <br /> I’m <b>Huynh Huy</b> Frontend Developer
            </h1>
            <p data-aos="fade-right" className="text-lg font-medium text-gray-400 my-5">
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
               <span className="movePointer relative dark:text-gray-50 left-32 bottom-5 text-2xl">
                  <FontAwesomeIcon icon={faArrowPointer} />
               </span>
            </div>
            <div className="flex align-center mt-10">
               <div className="dark:text-gray-50 social space-x-3 border-r-2 text-3xl pe-5">
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
               <span className="text-lg ps-5 dark:text-gray-50 cursor-pointer">
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
         <div data-aos="fade-left" className="homeRight me-14">
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
