"use client"
import React from 'react'

import { Facebook ,Instagram} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='bg-[#cba176] flex items-start lg:items-center lg:flex-row text-white justify-evenly p-10 flex-col gap-10'>
        <div className='flex gap-2 flex-col'>
            <h2 className='font-bold' >About Us</h2>
            <hr className='h-[10px]'></hr>
            <p>Juvenis Skin Clinic offers advanced skincare and aesthetic treatments tailored to your unique needs</p>
            <div className='flex gap-2 pt-2'>
            <Facebook />
            <Instagram />
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>Quick Links</h2>
            <hr></hr>
            <Link href="/">Home</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="">Services</Link>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>Open Hours</h2>
            <hr></hr>
            <div className='flex gap-3'>
                <div>
                    <p>Monday - Friday</p>
                    <p>Tuesday/wednesday/<br/>Thursday/Saturday</p>
                </div>
                <div>
                    <p>5 PM - 7 PM</p>
                    <p>10 AM - 2 PM</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
