import React from 'react'
import Image from 'next/image';


const Album = () => {
    const images = [
        { src: '/1.png', alt: 'Image 1', width: 1920  , height: 1280 },
        { src: '/2.png', alt: 'Image 2', width: 1920  , height: 1280 },
        { src: '/3.png', alt: 'Image 3', width: 1920  , height: 1280 },
        { src: '/4.png', alt: 'Image 3', width: 1920  , height: 1280 },
        { src: '/5.png', alt: 'Image 3', width: 1920  , height: 1280 },
        { src: '/6.png', alt: 'Image 3', width: 1920  , height: 1280 },
        { src: '/7.png', alt: 'Image 3', width: 1920  , height: 1280 },
        { src: '/8.png', alt: 'Image 3', width: 1920  , height: 1280 },
        { src: '/9.png', alt: 'Image 3', width: 1920  , height: 1280 },
        { src: '/10.png', alt: 'Image 3', width:1920  , height: 1280 },
        { src: '/11.png', alt: 'Image 3', width:1920  , height: 1280 },
      ];
  return (
    <div>
        <div>
            <img src="/new.png" alt="shadi" />
        </div>
        <div>
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
    </div>
  )
}

export default Album