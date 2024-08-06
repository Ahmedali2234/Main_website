'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Hero = () => {
  const images = [
    { src: '/1.png', alt: 'Image 1', width: 1920  , height: 1280 },
    { src: '/2.png', alt: 'Image 2', width: 1920  , height: 1280 },
    { src: '/3.png', alt: 'Image 3', width: 1920  , height: 1280 },
    // { src: '/4.png', alt: 'Image 3', width: 1920  , height: 1280 },
    { src: '/5.png', alt: 'Image 3', width: 1920  , height: 1280 },
    { src: '/6.png', alt: 'Image 3', width: 1920  , height: 1280 },
    { src: '/7.png', alt: 'Image 3', width: 1920  , height: 1280 },
    { src: '/8.png', alt: 'Image 3', width: 1920  , height: 1280 },
    { src: '/9.png', alt: 'Image 3', width: 1920  , height: 1280 },
    // { src: '/10.png', alt: 'Image 3', width:1920  , height: 1280 },
    { src: '/11.png', alt: 'Image 3', width:1920  , height: 1280 },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="  object-cover bg-cover bg-center align-baseline  ">
        <div className="">
          {images.map((image, index) => (
            <div
              key={index}
              className={classNames(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                {
                  'opacity-0': index !== currentImageIndex,
                  'opacity-100': index === currentImageIndex,
                }
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={100}
                className="w-full h-full object-cover
                "
              />
            </div>
          ))} 
        </div>
      </div>
      <div className="absolute text-[70px] font-histeagin pt-[500px] ">
        <h6 className="text-slate-200 font-histeagin ">WE SEE LOVE FROM A DIFFERENT ANGLE</h6>
      </div>


    </div>
  )
}

export default Hero