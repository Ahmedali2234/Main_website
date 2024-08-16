import React from 'react';

const About = () => {
  return (
    <div className=''>
      <div className='px-4 pt-8 pb-4 md:pl-72 md:pt-14 w-full text-white'>
        <h2 className='text-[24px] md:text-[38px] leading-tight md:leading-none uppercase'>
          Capturing the essence of your love story in<br className='hidden md:block' /> its most breathtaking form
        </h2>
        <div className='w-full md:w-[600px] mt-4 md:mt-8 uppercase text-xs font-light'>
          <p className='leading-relaxed md:leading-normal'>
            We specialize in weaving together the unique love stories of couples from all walks of life and cultural backgrounds. Our team is well-versed in the art of visual storytelling,
            ensuring that your wedding day is immortalized in a way that beautifully reflects the essence of your culture and the love you share.
          </p>
        </div>
      </div>

      <div className='relative w-full h-full mt-4'>
        <img src="/Pcover.png" alt="wedding" className='opacity-80 w-full h-[200px] md:h-auto object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black h-[100px] md:h-[150px]'>
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

      <div className='relative w-full h-full mt-5'>
        <img src="/Ccover.png" alt="wedding" className='opacity-80 w-full h-[200px] md:h-auto object-cover' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black h-[200px] md:h-full'>
          <div className='text-slate-50 pt-16 md:pt-48 text-end'>
            <p className='text-[10px] md:text-[18px] font-thin pr-4 md:pr-[70px] tracking-[.25em]'>
              VIEW OUR
            </p>
            <h6 className="font-histeagin text-[30px] md:text-[95px] pr-4 md:pr-[70px] leading-tight md:leading-none uppercase">
              CINEMATOGRAPHY
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
