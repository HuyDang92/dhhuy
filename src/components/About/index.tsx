import { useEffect } from 'react';
import { Link } from 'react-scroll';
import Button from '../Button';
import './About.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CV from '../../assets/CV_Đặng-Huỳnh-Huy.pdf';
export default function NavBar() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="px-5 lg:px-0 relative h-[75vh] mt-40" id="about">
         <h1
            data-aos="fade-up"
            className="dark:text-gray-50 text-center text-xl lg:text-4xl font-extrabold mb-10 lg:mb-28"
         >
            About me
         </h1>
         <div className="lg:grid relative lg:grid-cols-3">
            <div data-aos="zoom-in" className="lg:col-span-1 relative flex justify-center">
               {/* <div className="avt-effect">
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
                     <img className="rounded-full w-full h-full" src="/avt.svg" alt="" />
                  </div>
               </div> */}
               <div className="avatar my-10 lg:my-0">
                  <img className="rounded-full w-full h-full" src="/avt.svg" alt="" />
               </div>
            </div>
            <div data-aos="zoom-in" className="col-span-2 mt-5 dark:text-gray-50">
               <h1 className="lg:text-2xl font-bold mb-1">Hello, I'm Dang Huynh Huy</h1>
               <p className="text-sm font-medium lg:text-lg text-gray-400">
                  I am a frontend developer, I am a final year student of Fpt Folytechnic college
                  majoring in web development. I love layout colors as well as images so I chose to
                  specialize in frontend to make beautiful and useful interfaces.
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
                     <a href={CV} download="CV_DangHuynhHuy" target="_blank" rel="noreferrer">
                        Download my CV
                     </a>
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
