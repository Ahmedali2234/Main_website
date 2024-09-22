import React from 'react'
import Navbar from '../component/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export const KomalAhad = () => {
  return (
    <div>
      <Navbar />
      <div className='relative w-full h-full mt-4'>
        <img
          src="/albums/komalahad/10.jpg"
          alt="wedding"
          className='w-full h-[200px] md:h-auto object-cover object-bottom aspect-[21/7]'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black mt-40'>
          <div className='text-slate-50 pt-16 md:pt-52'>
            <h6 className="font-histeagin text-[30px] md:text-[100px] pl-4 md:pl-[100px] leading-tight md:leading-none">
              KOMAL+AHAD
            </h6>
          </div>
      </div>
      </div>

      //alum pics,

      <div className=''>
    <div className=" grid grid-cols-2 sm:grid-cols-4  gap-0 md:gap-2  pl-0 md:pl-0 mx-16 "  data-pswp-uid="1">
      {/* Picture 1 */}
      <figure className="relative top-0 left-0">
        <a
          className="block"
          href="/albums/komalahad/1.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 1"
          data-size="1066x1600"
        >
          <img
            className="w-full h-full"
            src="/albums/komalahad/1.jpg"
            alt="Wedding Portrait 1"
          />
        </a>
      </figure>

      {/* Picture 2 */}
      <figure className="relative top-0 left-0 ">
        <a
          className="block"
          href="/albums/komalahad/2.jpg"
          data-width="1066"
          data-height="1600"
          title="wedding portrait 2"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom aspect-[4/5]"
            src="/albums/komalahad/2.jpg"
            alt="Wedding Portrait 2"
          />
        </a>
      </figure>

      {/* Picture 3 */}
      <figure className="relative top-0 left-0 ">
        <a
          className="block"
          href="/albums/komalahad/3.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 3"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto"
            src="/albums/komalahad/3.jpg"
            alt="Wedding Portrait 3"
          />
        </a>
      </figure>

      {/* Picture 4 */}
      <figure className="relative top-0 left-0 ">
        <a
          className="block"
          href="/albums/komalahad/4.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 4"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto"
            src="/albums/komalahad/4.jpg"
            alt="Wedding Portrait 4"
          />
        </a>
      </figure>

      {/* Picture 5 */}
      <figure className="relative top-[-2px] left-0 sm:left-[-0px]">
        <a
          className="block"
          href="/albums/komalahad/6.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 5"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto"
            src="/albums/komalahad/6.jpg"
            alt="Wedding Portrait 5"
          />
        </a>
      </figure>

      {/* Picture 6 */}
      <figure className="relative top-[-80px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/5.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 6"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto"
            src="/albums/komalahad/5.jpg"
            alt="Wedding Portrait 6"
          />
        </a>
      </figure>

      {/* Picture 7 */}
      <figure className="relative top-[0px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/7.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-full object-cover "
            src="/albums/komalahad/7.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

      {/* Picture 8 */}
      <figure className="relative top-[0px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/8.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover aspect-[4/5]"
            src="/albums/komalahad/8.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

      {/* Picture 9 */}
      <figure className="relative top-[-30px] left-0">
        <a
          className="block"
          href="/albums/komalahad/9.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover"
            src="/albums/komalahad/9.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

      {/* Picture 10 */}
      <figure className="relative top-[-78px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/10.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover "
            src="/albums/komalahad/10.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

      {/* Picture 11 */}
      <figure className="relative top-[-30px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/11.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom "
            src="/albums/komalahad/11.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

      {/* Picture 12 */}
      <figure className="relative top-[-110px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/12.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom "
            src="/albums/komalahad/12.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

       {/* Picture 12 */}
       <figure className="relative top-[-30px] left-0">
        <a
          className="block"
          href="albums/komalahad/13.jpgs/"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom "
            src="/albums/komalahad/13.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

       {/* Picture 12 */}
       <figure className="relative top-[-350px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/14.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom "
            src="/albums/komalahad/14.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

       {/* Picture 12 */}
       <figure className="relative top-[-30px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/17.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom "
            src="/albums/komalahad/17.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

       {/* Picture 12 */}
       <figure className="relative top-[-110px] left-0 ">
        <a
          className="block"
          href="/albums/komalahad/15.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom "
            src="/albums/komalahad/15.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

       {/* Picture 12 */}
       <figure className="relative top-[-380px] left-[330px] ">
        <a
          className="block"
          href="/albums/komalahad/16.jpg"
          data-width="1066"
          data-height="1600"
          title="Wedding Portrait 7"
          data-size="1066x1600"
        >
          <img
            className="w-full h-auto object-cover object-bottom  "
            src="/albums/komalahad/16.jpg"
            alt="Wedding Portrait 7"
          />
        </a>
      </figure>

      
    </div>
    </div>
          
      
    
   

          
            
       
    </div>
  )
}

export default KomalAhad
