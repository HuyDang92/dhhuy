import { useEffect } from 'react';
import { Link } from 'react-scroll';
import Button from '../Button';
import './About.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function NavBar() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="relative h-[75vh] mt-40" id="about">
         <h1
            data-aos="fade-up"
            className="dark:text-gray-50 text-center text-4xl font-extrabold mb-14"
         >
            About me
         </h1>

         <div className=" grid grid-cols-3">
            <div data-aos="zoom-in" className="col-span-1 ">
               {/* <div className="relative avt overflow-hidden">
                  <img className="top-0" src="avt.svg" alt="" />
               </div> */}
               <div className="animation-example">
                  <div className="item">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="item">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="item">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="item">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="item -type2">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="item -type2">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="item -type2">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="item -type2">
                     <div className="line"></div>
                     <div className="dot"></div>
                     <div className="circle"></div>
                  </div>
                  <div className="center">
                     {/* <div className="circle"></div>
                     <div className="circle"></div>
                     <div className="circle"></div> */}
                     <img className="rounded-full w-full h-full" src="/avt.svg" alt="" />
                  </div>
               </div>
            </div>
            <div data-aos="fade-left" className="col-span-2 mt-5 dark:text-gray-50">
               <h1 className="text-2xl font-bold mb-1">Hello, I'm Dang Huynh Huy</h1>
               <p className="font-medium text-lg text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five.
               </p>
               <div className="flex mt-5 space-x-3">
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
                  <Button title="Contact me" border>
                     Download my CV
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
