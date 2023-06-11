import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.scss';
import MyForm from '../Form';
export default function NavBar() {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="relative min-h-[75vh] mt-28" id="contact">
         <div className="grid lg:grid-cols-2">
            <div data-aos="fade-right" className="px-5 lg:px-16">
               <img className="rounded-2xl object-cover" src="/thumb.jpg" alt="" />
            </div>
            <div data-aos="fade-left" className="px-5 lg:px-0 mt-5 lg:mt-0">
               <h1 className="text-3xl font-bold mb-2 dark:text-gray-50">GET IN TOUCH</h1>
               <MyForm />
            </div>
         </div>
         <div className="flex justify-between px-5 lg:px-0 py-14 lg:py-20">
            <div className="h-fit">
               <h2 className="dark:text-white transition-all relative before:absolute before:w-2 before:h-2 before:bg-red-600 before:rounded-full before:bottom-1 before:left-[60px] w-36 font-extrabold text-3xl">
                  DH HUY
               </h2>{' '}
            </div>
            <div className="social space-x-3 text-xl lg:text-4xl dark:text-gray-50">
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
         </div>
         <p className="text-center text-gray-400 pb-4">Copyright@2023 - DangHuynhHuy </p>
      </div>
   );
}
