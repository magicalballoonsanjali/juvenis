import React from 'react'
import { Button } from '@/components/ui/button'
const ContactBanner = () => {
  return (
    
<div className="flex flex-col justify-center items-center p-30 mt-10 opacity-80 bg-[#dfb58c]/100 text-white gap-5 ">
        <h2 className='font-semibold text-4xl text-center'>Schedule Your Appointment To Transform Your Style</h2>
        <p className='font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
        <Button className="bg-white text-[#dfb58c]">Contact Now</Button>
    </div>
 
  )
}

export default ContactBanner
