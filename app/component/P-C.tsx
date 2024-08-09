import React from 'react'

const About = () => {
  return (
    <div className=''>
    <div className='pl-72 pt-14 pb-4   w-full text-white  '>
      <h2 className='text-[38px] leading-none uppercase'>Capturing the essence of your love story in<br /> it’s most breathtaking form</h2>
      <div className='w-[600px] mt-8 uppercase text-xs font-light'>
        <p>We specialise in weaving together the unique love stories of couples from all walks of life and cultural backgrounds. Our team is well-versed in the art of visual storytelling,
          ensuring that your wedding day is immortalised in a way that beautifully reflects the essence of your culture and the love you share.</p>
      </div>

    </div>
    <div className='relative w-full h-full '>
      <img src="/Pcover.png" alt="wedding" className='opacity-80' />
      <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black h-[150px] '>
        <div className='text-slate-50 pt-48'>
          <p className=' text-[18px]   font-thin pl-[100px] tracking-[.25em]  '>VIEW OUR</p>
          <h6 className=" font-histeagin text-[100px] pl-[100px] leading-none ">PHOTOGRAPHY</h6>
        </div>
      </div>
    </div>

  <div className='relative w-full h-full mt-5'>
    <img src="/Ccover.png" alt="wedding" className='opacity-' />
    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black h-'>
      <div className='text-slate-50 pt-48'>
        <p className=' text-[18px]   font-[100px] pl-[605px] tracking-[.25em]  '>VIEW OUR</p>
        <h6 className=" font-histeagin text-[95px] pl-[600px] leading-none uppercase  ">cinematography</h6>
      </div>
    </div>
      </div>
    </div>
  )
}

export default About