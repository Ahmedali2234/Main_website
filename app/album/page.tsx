import React from 'react'
import Navbar from '../component/Navbar'
import Image from 'next/image'

export const Albums = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='relative w-full h-full mt-4'>
        <img src="/Pcover.png" alt="wedding" className=' w-full h-[200px] md:h-auto object-cover' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black h-[100px] md:h-[580px]'>
          <div className='text-slate-50 pt-16 md:pt-48'>
            <p className='text-[10px] md:text-[18px] font-thin pl-4 md:pl-[100px] tracking-[.25em]'>
              VIEW OUR
            </p>
            <h6 className="font-histeagin text-[30px] md:text-[100px] pl-4 md:pl-[100px] leading-tight md:leading-none">
              PHOTOGARPHY
            </h6>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='text-white  flex '>
          <h3 className='pl-[350px] mb-2 font-bold text-4xl tracking-wider'>ALBUMS</h3>
        </div>
        <div className='flex justify-center gap-6 cursor-pointer '>
          <div>
          <Image src={'/mainpagepics/mp1.jpg'} alt='#' height={201} width={270} className='rounded-2xl opacity-70 hover:opacity-100 duration-300  ' />
          <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2 '>zainab+abubakar  </h3>
          </div>
          <div>
          <Image src={'/mainpagepics/mp2.jpg'} alt='#' height={201} width={270} className='rounded-2xl opacity-70 hover:opacity-100 duration-300 ' />
          <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2 '>zainab+abubakar </h3>
          </div>
          <div>
          <Image src={'/mainpagepics/mp3.jpg'} alt='#' height={201} width={270} className='rounded-2xl opacity-70 hover:opacity-100 duration-300' />
          <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2'>zainab+abubakar </h3>
          </div>
          <div>
          <Image src={'/mainpagepics/mp4.jpg'} alt='#' height={201} width={270} className='rounded-2xl opacity-70 hover:opacity-100 duration-300' />
          <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2'>zainab+abubakar </h3>
          </div>
          <div className=''>
          <Image src={'/mainpagepics/mp5.jpg'} alt='#' height={201} width={270} className='rounded-2xl aspect-[4/5] object-cover opacity-70 hover:opacity-100 duration-300' />
          <h3 className='text-white uppercase hover:font-extrabold hover:tracking-[.25em] mt-2'>zainab+abubakar </h3>
          </div>

        </div>
        <div className='text-white uppercase '>
          

        </div>
      </div>
    </div>
  )
}

export default Albums