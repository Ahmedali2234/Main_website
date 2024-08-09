import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed  top-0 left-0 w-full bg-transparent z-20 pointer-events-auto border-0 font-inherit m-0 p-0 align-baseline border-solid box-border h-[150px]  bg-origin-border bg-gradient-to-t from-transparent to-black'>
        <div className='flex justify-between items-center '>
           <div className='flex pl-6'>
           <img src="/logo.png" alt="Cosmo photography" width={100} height={100} />
           </div>
           <div>
            <ul className='flex gap-10 text-white cursor-pointer hover:'> 
                <li>HOME</li>
                <li>WEDDING</li>
                <li>PHOTOS</li>
                <li>PRICING</li>
                <li>CONTACT</li>
            </ul>
            </div>

            <div className='flex pr-6 gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color='white' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div> 
        </div>
    </div>
  )
}

export default Navbar