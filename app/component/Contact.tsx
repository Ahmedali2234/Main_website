import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Image src={'/logo.png'} alt='logo' width={200} height={200}></Image>

        </div>
        <div>
          <p className="mt-2">JR House, Unit D6, Main Avenue, <br />Treforest Industrial Estate, Pontypridd, CF37 5UR</p>
          <p className="mt-2">hello@fireandice.co.uk</p>
          <p className="mt-2">+0320 3212364</p>
        </div>
        <div className='flex space-x-20'>
          <div className="mt-4 flex space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </div>
          <div className="space-x-8 ">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Who we are</a>
            <a href="#" className="hover:text-gray-400">Real weddings</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p>&copy; 2024 Copyright / <a href="#" className="hover:text-gray-400">Privacy Policy</a> / <a href="#" className="hover:text-gray-400">T&Cs</a></p>
      </div>
    </footer>
  );
}

export default Contact;