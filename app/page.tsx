import Hero from '@/app/component/Hero'
import React from 'react'
import Navbar from './component/Navbar'
import P_C from './component/P-C'

export const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <P_C/>
    </div>
  )
}

export default Home