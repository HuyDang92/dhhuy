import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function DialogComponent(props: any) {
   console.log(props);

   const [isOpen, setIsOpen] = useState(true);

   useEffect(() => {
      if (props.check) {
         setIsOpen(true);
      }
   }, [props.check]);

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <>
         {/* <div className="fixed inset-0 flex items-center justify-center">
            <button
               type="button"
               onClick={openModal}
               className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
               Open dialog
            </button>
         </div> */}

         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className=" relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-80 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           <Dialog.Title
                              as="h3"
                              className="text-center text-lg font-medium leading-6 text-gray-900"
                           >
                              <span className="p-4 px-5 text-white rounded-full inline-block bg-green-300">
                                 <FontAwesomeIcon icon={faCheck} />
                              </span>{' '}
                              <br />
                              Successfully
                           </Dialog.Title>
                           <div className="mt-2">
                              <p className="text-sm text-center text-gray-500">
                                 Thank you for emailing me, I will reply as soon as possible
                              </p>
                           </div>

                           <div className="mt-4">
                              <button
                                 type="button"
                                 className="w-full bg-purple text-white inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:bg-[#e3bfea] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                 onClick={closeModal}
                              >
                                 Ok
                              </button>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}
