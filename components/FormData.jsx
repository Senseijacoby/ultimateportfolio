'use client'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {User,MailIcon,ArrowBigRightIcon,MessageSquare} from 'lucide-react'
const FormData = () => {
  return (
   <form 
   className='flex flex-col gap-y-4'
   action="POST"
   >
    <div className="relative flex items-center">
        <Input type='name' placeholder='Name' id='name' />
        <User className='absolute right-6' size={20}/>
    </div>
     <div className="relative flex items-center">
        <Input type='name' placeholder='Name' id='email' />
        <MailIcon className='absolute right-6' size={20}/>
    </div>
     <div className="relative flex items-center">
        <Textarea type='name' placeholder=' Whats on your mind? ' id='name' />
        <MessageSquare className='absolute top-4 right-6' size={20}/>
    </div>
    <Button className='flex items-center max-w-[166px] gap-x-1'>
        SEND
        <ArrowBigRightIcon className='text-primary' size={20}/>
    </Button>
   </form>
  )
}

export default FormData