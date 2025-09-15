import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Services = () => {
  return (
   <>
    <div>
          <div className='flex justify-center items-center flex-col text-center p-8'>
                <Image src="/juvenius-bannes/female.png" alt='female'/>
                <h3 className='font-semibold text-3xl text-[#2d2d3e] '>Services We Provide</h3>
                <p className='font-normal p-2 text-[#888a8f]'>We Offer Different Services To Improve Your S
                    kin Health</p>
            </div>

            <div className='flex flex-wrap justify-center items-start gap-6 px-4 lg:px-12'>

                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <Image src="services/botox.jpg"/>
                    <Link href={""} className=''>Cosmetic Dermatology</Link>
                    <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                </div>

                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <Image src="/services/Psoriasis.jpg"/>
                    <Link href={""} className=''>Medical Dermatology</Link>
                    <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <Image src="services/lipobody.jpg"/>
                    <Link href={""} className=''>Surgical Dermatology</Link>
                    <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <Image src="services/hair.jpg"/>
                    <Link href={""} className=''>Hair Loss Treatment</Link>
                    <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <Image src="services/acne.jpg"/>
                    <Link href={""} className=''>Acne Treatment</Link>
                    <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <Image src="services/lase.jpg"/>
                    <Link href={""} className=''>Laser Hair Removal</Link>
                    <p>Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                </div>
            </div>
    </div>
   </>
  )
}

export default Services
