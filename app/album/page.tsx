import React from 'react'
import Navbar from '../component/Navbar'
import Image from 'next/image'

export const Albums = () => {
  return (
    <div>
      <Navbar />
      <div className='relative w-full h-full mt-4'>
        <img 
          src="/Pcover.png" 
          alt="wedding" 
          className='w-full h-[200px] md:h-auto object-cover' 
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black h-[200px] md:h-[580px]'>
          <div className='text-slate-50 pt-16 md:pt-48'>
            <p className='text-[10px] md:text-[18px] font-thin pl-4 md:pl-[100px] tracking-[.25em]'>
              VIEW OUR
            </p>
            <h6 className="font-histeagin text-[30px] md:text-[100px] pl-4 md:pl-[100px] leading-tight md:leading-none">
              PHOTOGRAPHY
            </h6>
          </div>
        </div>
      </div>
      <div className='relative mt-8 md:px-0'>
        <div className='text-white flex justify-center'>
          <h3 className='mb-6 font-bold text-2xl md:text-4xl tracking-wider text-center'>
            ALBUMS
          </h3>
        </div>
        <div className='relative grid grid-cols-2 gap-2 sm:grid-cols-1 md:flex md:justify-center md:items-center cursor-pointer  sm:gap-4 '>
          <div className='text-center'>
            <Image 
              src={'/mainpagepics/mp1.jpg'} 
              alt='Zainab and Abubakar' 
              height={201} 
              width={270} 
              className='rounded-2xl opacity-70 hover:opacity-100 duration-300' 
            />
            <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2 text-sm md:text-base'>
              Zainab + Abubakar
            </h3>
          </div>
          <div className='text-center'>
            <Image 
              src={'/mainpagepics/mp2.jpg'} 
              alt='Zainab and Abubakar' 
              height={201} 
              width={270} 
              className='rounded-2xl opacity-70 hover:opacity-100 duration-300' 
            />
            <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2 text-sm md:text-base'>
              Zainab + Abubakar
            </h3>
          </div>
          <div className='text-center'>
            <Image 
              src={'/mainpagepics/mp3.jpg'} 
              alt='Zainab and Abubakar' 
              height={201} 
              width={270} 
              className='rounded-2xl opacity-70 hover:opacity-100 duration-300' 
            />
            <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2 text-sm md:text-base'>
              Zainab + Abubakar
            </h3>
          </div>
          <div className='text-center'>
            <Image 
              src={'/mainpagepics/mp4.jpg'} 
              alt='Zainab and Abubakar' 
              height={201} 
              width={270} 
              className='rounded-2xl opacity-70 hover:opacity-100 duration-300' 
            />
            <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2 text-sm md:text-base'>
              Zainab + Abubakar
            </h3>
          </div>
          <div className='text-center'>
            <Image 
              src={'/mainpagepics/mp5.jpg'} 
              alt='Zainab and Abubakar' 
              height={201} 
              width={270} 
              className='rounded-2xl opacity-70 hover:opacity-100 duration-300 aspect-[4/5] object-cover' 
            />
            <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2 text-sm md:text-base'>
              Zainab + Abubakar
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Albums
