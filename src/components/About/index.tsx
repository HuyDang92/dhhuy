// import { useState, useEffect } from 'react';

import Button from '../Button';
import './About.scss';
export default function NavBar() {
   return (
      <div className="relative h-[75vh] mt-40">
         <h1 className="text-center text-4xl font-extrabold mb-14">About me</h1>

         <div className=" grid grid-cols-3">
            <div className="col-span-1">
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
            <div className="col-span-2 mt-5">
               <h1 className="text-2xl font-bold mb-1">Hello, I'm Dang Huynh Huy</h1>
               <p className="font-medium text-lg text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five.
               </p>
               <div className="flex mt-5 space-x-3">
                  <Button title="Contact me" primary>
                     Contact me
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
