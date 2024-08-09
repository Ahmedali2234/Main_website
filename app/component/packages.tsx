"use client";

import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';

const TestimonialsSlider = () => {
  const flickityInstance = useRef<Flickity | null>(null);
  const flickityNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (flickityNode.current) {
        flickityInstance.current = new Flickity(flickityNode.current, {
        wrapAround: true,
        pageDots: false,
        cellAlign: 'center',
        contain: true,
      });


      console.log('Flickity instance:', flickityInstance.current);
    }

    return () => {
      flickityInstance.current?.destroy();
    };
  }, []);

  const handleNext = () => {
    if (flickityInstance.current) {
      flickityInstance.current.next();
      console.log('Moved to next slide');
    } else {
      console.error('Flickity instance not found');
    }
  };

  const handlePrev = () => {
    if (flickityInstance.current) {
      flickityInstance.current.previous();
      console.log('Moved to previous slide');
    } else {
      console.error('Flickity instance not found');
    }
  };
  return (
    <div className="relative  w-full max-w-screen-lg mx-auto px-8 mt-[450px] ">
      {/* Flickity Slider */}
      <div className="overflow-visible" ref={flickityNode}>
        <div className="flex justify-center items-center  -mx-4">
          <img
            alt="Testimonial 1"
            src="//static.showit.co/1600/Q-LpnPYhRZGSymk7YuNOMQ/237543/faye_and_peter_testimonial.jpg"
            className="w-full h-auto object-cover mx-4"
          />
          <img
            alt="Testimonial 2"
            src="//static.showit.co/1600/HdmdWfkSQEuIf0MtRXZc3w/237543/manisha_and_rikesh_testimonial.jpg"
            className="w-full h-auto object-cover mx-4"
          />
          <img
            alt="Testimonial 3"
            src="//static.showit.co/1600/LuGRVLTbSAmM2jgz3FKAXA/237543/charlotte_and_carl_testimonial.jpg"
            className="w-full h-auto object-cover mx-4"
          />
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 fill-current text-gray-600">
          <polygon points="117.78 452 202.63 452 397.63 257 200.63 60 115.78 60 312.78 257 117.78 452"></polygon>
        </svg>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 fill-current text-gray-600 rotate-180">
          <polygon points="117.78 452 202.63 452 397.63 257 200.63 60 115.78 60 312.78 257 117.78 452"></polygon>
        </svg>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
