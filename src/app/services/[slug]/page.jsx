import { Button } from '@/components/ui/button'
import React from 'react'
import Footer from '../../Components/Footer'
import Copyright from '../../Components/Copyright'
import { ServicesData } from '../../ServicesData'

export default function Servicepage ({params}){
  
  const {slug}=params;

  const service=ServicesData.find((item)=>item.slug===slug)
  
  if (!service){
    return <p>not found</p>
  }

  return (
    <div>
      <div className="flex flex-col h-[350px]  w-full bg-[url('/b4.jpg')] justify-center lg:items-end bg-cover bg-center p-5 md:p-10 md:pr-20  lg:h-[600px] gap-5 md:gap-8 bg-white/60 lg:bg-white/0 bg-blend-overlay" style={{backgroundImage:`url(${service.img})`}}>
      <div className='flex flex-col gap-6 lg:pl-[750px] '>
        <h1 className='text-3xl font-semibold lg:text-5xl text-[#2d2d3e] lg:font-bold'>{service.title} <span className='text-[#1994c1] font-semibold lg:font-bold'>{service.spantext}</span> {service.halftitle}</h1>
        <p className='font-normal'>{service.subtitle}</p>
        <div className='flex gap-4'>
          <Button className="bg-[#1993be] p-5">Book Appointment</Button>
         <a href="#service"> <Button href="#service" className="bg-[#e3b285] p-5">Read More</Button></a>
        </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 px-8 text-[#747574] lg:px-40 p-8 '>
         <h3 className="font-semibold text-3xl pt-10 text-[#2d2d3e] ">
          {service.headline}
    </h3>
        <p id="service">
            {service.para1}
        </p>
        <p>
         {service.para2}
        </p>
        <p>
            {service.para3}
        </p>
        <p>
           {service.para4}
        </p>
        <p>
           {service.para5}
        </p>
      
</div>
<Footer/>
<Copyright/>
    </div>
  )
}


