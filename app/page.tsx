import Hero from '@/app/component/Hero'
import React from 'react'
import Navbar from './component/Navbar'
import P_C from './component/P-C'
import PICTURE from './component/PICTURE'
import Packages from './component/Packages'
import Contact from './component/Contact'


export const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <P_C/>
      <PICTURE/>
      <Packages/> 
      <Contact/>  
    </div>
  )
}

export default Home