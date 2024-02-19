import React from 'react'
import SocialsInfo from '../SocialsInfo'

const Footer = () => {
  return (
   <footer className='bg-secondary py-12'>
    <div className='container mx-auto '>
      <div className='flex flex-col items-center justify-between'>
        <SocialsInfo
        containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
        iconStyles='text-primary text-[20px] dark:text-white/70 dark:hover:text-primary hover:text-white transition-all'
         />
        <p>Copyright &copy; Jack Migwambo. All rights reserved</p>
      </div>
    </div>
   </footer>
  )
}

export default Footer