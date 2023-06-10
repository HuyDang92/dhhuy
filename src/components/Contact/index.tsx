// import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import './Contact.scss';
export default function NavBar() {
   return (
      <div className="relative min-h-[75vh] mt-28">
         <div className="grid grid-cols-2">
            <div className="px-16">
               <img className="rounded-2xl object-cover" src="/thumb.jpg" alt="" />
            </div>
            <div className="">
               <h1 className="text-3xl font-bold mb-2">GET IN TOUCH</h1>

               <form className="space-y-3">
                  <input
                     className="py-2 px-5 w-[65%] rounded-[15px] border-2 border-gray-400 outline-none"
                     type="text"
                     placeholder="Name"
                  />
                  <input
                     className="py-2 px-5 w-[65%] rounded-[15px] border-2 border-gray-400 outline-none"
                     type="email"
                     placeholder="Email"
                  />
                  <textarea
                     name=""
                     id=""
                     className="py-2 px-5 w-[65%] h-40 rounded-[15px] border-2 border-gray-400 outline-none"
                     placeholder="Message"
                  ></textarea>
               </form>
               <Button title="Contact me" primary>
                  Send
                  <i className="px-2">
                     <FontAwesomeIcon icon={faPaperPlane} />
                  </i>
               </Button>
            </div>
         </div>
         <div className="flex justify-between py-20">
            <div className="h-fit">
               <img className="w-[190px] " src="/logo.svg" alt="" />
            </div>
            <div className="social space-x-3 text-4xl">
               <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
               </a>
               <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
               </a>
               <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
               </a>
            </div>
         </div>
         <p className="text-center text-gray-400 pb-4">Copyright@2023 - DangHuynhHuy </p>
      </div>
   );
}
