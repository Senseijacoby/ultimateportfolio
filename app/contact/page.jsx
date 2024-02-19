import FormData from '@/components/FormData'
import { Button } from '@/components/ui/button'
import {MailIcon,HomeIcon,PhoneCall } from 'lucide-react'
import Link from 'next/link'
Import

export default function contactPage ()  {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto '>
        {/* text and illustrations */}
       <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
        {/* text */}
        <div className='flex flex-col  justify-center '>
        <div className='flex items-center text-primary text-lg mb-4 gap-x-4'>
          <span className='w-[30px] h-[2px] bg-primary'> </span>
              Say Hello 🫶
        </div>
         <h1 className='h1 max-w-md mb-8'>Lets work together</h1>
         <p className='subtitle max-w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo.</p>

        </div>
        {/* illustrations */}
        <div className="hidden xl:flex w-full"></div>
       </div>
       {/* info text form  */}
       <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
        {/* info text */}
        <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
          {/* mail */}
          <div className='flex items-center  gap-x-8'>
            <MailIcon size={18} className='text-primary'/>
            <p>Jacobymagic@yopmail.com</p>
          </div>
          {/* address */}
          <div className='flex items-center  gap-x-8'>
            <HomeIcon size={18} className='text-primary'/>
            <p>Avaruuskatu 4 A 12,Espoo </p>
          </div>
          {/* phone */}
          <div className='flex items-center  gap-x-8'>
            <PhoneCall size={18} className='text-primary'/>
            <p>+35855389785643</p>
          </div>
        </div>
       </div>
       <div>
         {/* form */}
         <FormData/>
       </div>
      </div>
    </section>
  )
}

