import Hero from '@/app/component/Hero'
import React from 'react'
import Navbar from './component/Navbar'
import P_C from './component/P-C'
import PICTURE from './component/PICTURE'
import TestimonialsSlider from './component/Packages'


export const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <P_C/>
      <PICTURE/>
      <TestimonialsSlider/>
    </div>
  )
}

export default Home