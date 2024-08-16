'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

 const Hero = () => {
   const images = [
    { src: '/1.png', alt: 'Image 1', width: 1920, height: 1280 },
    { src: '/2.png', alt: 'Image 2', width: 1920, height: 1280 },
    { src: '/3.png', alt: 'Image 3', width: 1920, height: 1280 },
    { src: '/5.png', alt: 'Image 3', width: 1920, height: 1280 },
    { src: '/6.png', alt: 'Image 3', width: 1920, height: 1280 },
    { src: '/7.png', alt: 'Image 3', width: 1920, height: 1280 },
    { src: '/8.png', alt: 'Image 3', width: 1920, height: 1280 },
    { src: '/9.png', alt: 'Image 3', width: 1920, height: 1280 },
    { src: '/11.png', alt: 'Image 3', width: 1920, height: 1280 },
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
      <div className="w-full h-full object-cover bg-cover bg-center">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-10  md:bottom-32 lg:bottom-40 px-4 text-center">
        <h6 className="text-white text-[30px]  sm:text-[40px] md:text-[50px] lg:text-[70px] font-histeagin leading-none">
          WE SEE LOVE FROM A DIFFERENT ANGLE
        </h6>
        <p className="uppercase text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[.15em] sm:tracking-[.2em] md:tracking-[.25em] text-white font-light mt-2">
          Cosmo: Pakistan & UK Wedding Photography and Cinematography
        </p>
      </div>
    </div>
  );
}

export default Hero;
