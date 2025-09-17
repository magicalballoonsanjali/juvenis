'use client'; 

import { Button } from '@/components/ui/button'
import React, { useState, use } from 'react';
import Footer from '../../Components/Footer'
import Copyright from '../../Components/Copyright'
import { ServicesData } from '../../ServicesData'
import { ArrowBigLeft, ArrowBigRight} from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Servicepage({ params }) {

  const { slug } = React.use(params);
    const router = useRouter();

  const service = ServicesData.find((item) => item.slug === slug);


  const images = service?.images || [];
  const [startIndex, setStartIndex] = useState(0)

  if (!service) return <p>not found</p>;

  const visibleCount = Math.min(3, images.length); 

  const visibleImages = Array.from({ length: visibleCount }).map((_, i) => {
    const idx = (startIndex + i) % images.length;
    return images[idx];
  });

  const handlePrev = () => {
    if (images.length === 0) return;
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (images.length === 0) return;
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <div
        className="flex flex-col h-[350px] w-full justify-center lg:items-end bg-cover bg-center p-5 md:p-10 md:pr-20 lg:h-[600px] gap-5 md:gap-8 bg-white/60 lg:bg-white/0 bg-blend-overlay"
        style={{ backgroundImage: `url(${service.img})` }}
      >
        <div className="flex flex-col gap-6 lg:pl-[750px]">
          <h1 className="text-3xl font-semibold lg:text-5xl text-[#2d2d3e] lg:font-bold">
            {service.title}{' '}
            <span className="text-[#1994c1] font-semibold lg:font-bold">
              {service.spantext}
            </span>{' '}
            {service.halftitle}
          </h1>
          <p className="font-normal">{service.subtitle}</p>
          <div className="flex gap-4">
            <Button onClick={() => router.push('/Appointment')} className="bg-[#1993be] p-5">Book Appointment</Button>
            <a href="#service">
              <Button className="bg-[#e3b285] p-5">Read More</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-8 text-[#747574] lg:px-40 p-8">
        <h3 className="font-semibold text-3xl pt-10 text-[#2d2d3e] ">
          {service.headline}
        </h3>
        <p id="service">{service.para1}</p>
        <p>{service.para2}</p>
        <p>{service.para3}</p>
        <p>{service.para4}</p>
        <p>{service.para5}</p>

         {service.treatheadline && (
  <div className="flex flex-col gap-4 ">
    <h3 className="font-semibold text-3xl pt-10 text-[#2d2d3e] ">
      {service.treatheadline}
    </h3>
    {service.treat1 && <p>{service.treat1}</p>}
    {service.treat2 && <p>{service.treat2}</p>}
    {service.treat3 && <p>{service.treat3}</p>}
    {service.treat4 && <p>{service.treat4}</p>}
    {service.treat5 && <p>{service.treat5}</p>}
    {service.treat6 && <p>{service.treat6}</p>}
    {service.treat7 && <p>{service.treat7}</p>}
    {service.treat8 && <p>{service.treat8}</p>}
  </div>
)}


    {images.length > 0 && (
  <div className=" pt-5">
    <h2 className="text-2xl font-bold text-stone-700 mb-4">Results</h2>

    <div className="relative flex items-center justify-center">
      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded opacity-45 z-50  hover:opacity-80"
      >
       <ArrowBigLeft />
      </button>

      {/* images */}
     <div className="flex gap-4 overflow-hidden justify-center">
  {visibleImages.map((img, idx) => (
    <div
      key={idx}
      className="
        flex-shrink-0
        transform
        transition-transform
        duration-300
        ease-in-out
        hover:scale-105
      "
    >
      <img
        src={img}
        alt={`Result ${idx + 1}`}
        className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
  ))}
</div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded opacity-45 z-50 hover:opacity-80"
      >
     <ArrowBigRight />
      </button>
    </div>
  </div>
)}

       
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}
