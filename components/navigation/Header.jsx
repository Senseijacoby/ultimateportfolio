'use client'
import React, { useState,useEffect } from 'react'

import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import Nav from './Nav'
import ThemeToggle from '@/components/providers/ThemeToggle'
import MobileNav from './MobileNav'


export default function Header  ()  {
  const pathname = usePathname();
  const [header, setHeader] = useState(false)

  useEffect(() => {
    const scrollYPosition = window.addEventListener('scroll', () => {
      window.scrollY > 50? setHeader(true) : setHeader(false);
    });
    
    return () => window.removeEventListener('scroll', scrollYPosition);
  
   
  }, [])
  
  
  return (
    <header 
    className={`${
      header ? 'py-4 bg-white shadow-lg dark:bg-accent':'py-6 dark:bg-transparent'}
       sticky top-0 z-30 transition-all ${pathname==='/' && 'bg-[#fef9f5]'}`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
         <Logo/>
          <div className='flex items-center gap-x-6'>
            <Nav 
            containerStyles='hidden xl:flex gap-x-8 items-center' 
            linkStyles='relative hover:text-primary transition-all' 
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggle/>
            <div className='xl:hidden'>
              <MobileNav/>
            </div>
          </div>
        </div>
      </div>
      
      
    </header>
  )
}
