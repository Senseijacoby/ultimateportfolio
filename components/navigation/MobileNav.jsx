'use client'
import React from 'react'
import { Sheet,SheetContent,SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from '../Logo'
import Nav from './Nav'
import SocialsInfo from '../SocialsInfo'

const MobileNav = () => {
  return (
   
      <Sheet>
        <SheetTrigger asChild >
          <AlignJustify className=' cursor-pointer' />
        </SheetTrigger>
        <SheetContent className=''>
          <div className='flex flex-col items-center justify-between h-full py-8 '>
            <div className='flex flex-col items-center gap-y-32'>
              <Logo/>

              <Nav
               containerStyles='flex flex-col items-center gap-y-6'
               linkStyles='text-2xl'
               />

              <SocialsInfo 
               containerStyles='flex gap-x-4'
               iconStyles='text-2xl'
                />
              
            </div>
          </div>
        </SheetContent>
      </Sheet>
  )
}

export default MobileNav