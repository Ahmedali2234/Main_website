'use client'
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-20 pointer-events-auto font-inherit bg-gradient-to-t from-transparent to-black">
      <div className="flex justify-between items-center h-[80px] md:h-[100px] px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Cosmo Photography"
            width={80}
            height={80}
            className="md:w-[100px] md:h-[100px]"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex">
          <ul className="flex gap-4 md:gap-10 text-white cursor-pointer">
            <li>HOME</li>
            <li>WEDDING</li>
            <li>PHOTOS</li>
            <li>PRICING</li>
            <li>CONTACT</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
        </div>
      </div>

      {/* Drawer */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-full"
      >
        <div className="fixed top-0 left-0 w-2/3 h-full bg-black bg-opacity-90 p-4">
          <ul className="flex flex-col gap-6 text-white">
            <li onClick={toggleDrawer}>HOME</li>
            <li onClick={toggleDrawer}>WEDDING</li>
            <li onClick={toggleDrawer}>PHOTOS</li>
            <li onClick={toggleDrawer}>PRICING</li>
            <li onClick={toggleDrawer}>CONTACT</li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default Navbar;
