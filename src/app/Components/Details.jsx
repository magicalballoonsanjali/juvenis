import { CalendarDays, HousePlus, Smile, User } from 'lucide-react'
import React from 'react'

const Details = () => {
  return (
    <>
    <div className='bg-[#e8c09c] flex flex-col md:flex-row justify-center gap-8 p-20  w-full'>
       <div className='flex gap-22 flex-col lg:flex-row justify-center items-center lg:gap-8 '>
             <div className='flex flex-col md:flex-row justify-center items-center text-white'>
                <div className='border border-white p-5 rounded-full hover:bg-white hover:text-[#e8c09c]'>
                    <HousePlus className='size-15  '/>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold'>3468</h1>
                    <p className='pl-3'>Happy Patients</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center text-white gap-2'>
                <div className='border border-white p-5 rounded-full hover:bg-white hover:text-[#e8c09c]'>
                    <User className='size-15 '/>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold'>3</h1>
                    <p>Hospitals Covered</p>
                </div>
            </div>
        </div>
        <div className='flex gap-22 flex-col lg:flex-row justify-center items-center lg:gap-8 '>
            <div className='flex flex-col md:flex-row justify-center items-center text-white gap-2'>
                <div className='border border-white p-5 rounded-full hover:bg-white hover:text-[#e8c09c]'>
                    <Smile className='size-15 '/>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold'>4379</h1>
                    <p className='pl-6'>Happy Patients</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center text-white gap-2'>
                <div className='border border-white p-5 rounded-full hover:bg-white hover:text-[#e8c09c]'>
                    <CalendarDays className='size-15 '/>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold'>32</h1>
                    <p>Years of Experience</p>
                </div>
            </div>
              
        </div>
        </div>
 
    </>
  )
}

export default Details
