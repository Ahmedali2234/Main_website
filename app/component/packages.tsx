"use client";

import React, { useState, useRef } from "react";

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      img: "//static.showit.co/1600/Q-LpnPYhRZGSymk7YuNOMQ/237543/faye_and_peter_testimonial.jpg",
      alt: "Testimonial 1",
    },
    {
      id: 2,
      img: "//static.showit.co/1600/HdmdWfkSQEuIf0MtRXZc3w/237543/manisha_and_rikesh_testimonial.jpg",
      alt: "Testimonial 2",
    },
    {
      id: 3,
      img: "//static.showit.co/1600/LuGRVLTbSAmM2jgz3FKAXA/237543/charlotte_and_carl_testimonial.jpg",
      alt: "Testimonial 3",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="relative w-full max-w-screen-lg mx-auto  overflow-x-hidden">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full "
            >
              <img
                src={testimonial.img}
                alt={testimonial.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <div
          className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-10 h-10 fill-current text-gray-600 hover:text-gray-800 transition-colors"
          >
            <polygon points="117.78 452 202.63 452 397.63 257 200.63 60 115.78 60 312.78 257 117.78 452"></polygon>
          </svg>
        </div>

        {/* Right Arrow */}
        <div
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-10 h-10 fill-current text-gray-600 rotate-180 hover:text-gray-800 transition-colors"
          >
            <polygon points="117.78 452 202.63 452 397.63 257 200.63 60 115.78 60 312.78 257 117.78 452"></polygon>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
