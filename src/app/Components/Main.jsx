"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Main = () => {
    const router = useRouter();

  return (
    <div className="flex flex-col h-[350px]  w-full bg-[url('/b4.jpg')]  bg-cover bg-center p-5 md:p-10 md:pr-20  lg:h-[600px] gap-5 md:gap-3 items-center bg-white/60 lg:bg-white/0 bg-blend-overlay">
      <div className="flex lg:pl-[50%] flex-col justify-evenly pt-10 md:pt-8 lg:p-20 gap-10 items-start text-[#2c2d3f] ">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold  ">
          Skin Solution Backed by
           <span className="text-[#1893bf]"> Science</span> Guided by{" "}
          <span className="text-[#1893bf]">Care</span>
        </h2>

        <p className="text-sm md:text-lg">
          Personalized treatments for healthy, radiant skin — delivered with
          expertise and compassion
        </p>

        <Button className="bg-[#e2b284] w-full p-3 md:w-fit md:px-5" onClick={() => router.push('/aboutus')}>
          Know More
        </Button>
      </div>

      <div className="flex-col md:flex-row flex items-center justify-center gap-8 lg:w-full p-5 text-white pt-18 w-[400px] md:w-[950px] flex-wrap md:pl-20">
        
       {/* <div className="flex justify-center flex-col items-start w-full bg-[#e2b284] md:w-[350px] h-[315px] p-5 rounded-md gap-5 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_20px_30px_-10px_rgb(227,178,133)]">


  <h2 className="font-bold text-3xl text-white leading-tight">
     Consultant to Dr
  </h2>

  <div className="w-full bg-white/30 rounded-lg p-4 text-sm text-[#2c2d3f] leading-relaxed">
    <p>
      +91 9769966696
    </p>
    <p>getyoung@juvenis.in</p>
  </div>

  <Link
    href="#contact"
    className="group relative inline-block font-medium"
  >
      LEARN MORE
            <hr
              className="absolute bottom-[-2px] left-0 h-[2px] w-0 transition-all duration-200 ease-in-out group-hover:w-full "
            />
  </Link>

</div> */}
{/* new  */}
<div className="flex flex-col items-start justify-center bg-[#e2b284] md:w-[390px] h-[320px] p-5 rounded-md gap-5 w-full
  hover:-translate-y-2 transition-transform duration-500 ease-out
  hover:shadow-[0_20px_30px_-10px_rgb(227,178,133)]">

  {/* Title */}
  <h2 className="font-bold text-3xl">
    Contact Consultant
  </h2>

  {/* Glass Table */}
  <div className="w-full bg-white/30 backdrop-blur-sm rounded-lg p-3">
    <table className="w-full text-sm text-[#2c2d3f] border-collapse">
      <tbody className="leading-relaxed">
        <tr className="border-b border-black/10">
          <td className="py-2 font-semibold text-left">
            Phone
          </td>
          <td className="py-2 text-right font-medium">
            +91 97699 66696
          </td>
        </tr>

        <tr className="border-b border-black/10">
          <td className="py-2 font-semibold text-left">
            Email
          </td>
          <td className="py-2 text-right font-medium">
            getyoung@juvenis.in
          </td>
        </tr>

        <tr>
          <td className="py-2 font-semibold text-left">
            Availability
          </td>
          <td className="py-2 text-right font-medium">
            By Appointment
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* CTA */}
  <div className="pb-2">
    <Link
      href="#contact"
      className="group relative inline-block font-medium"
    >
      LEARN MORE
      <hr
        className="absolute bottom-[-2px] left-0 h-[2px] w-0 transition-all duration-200 ease-in-out group-hover:w-full"
      />
    </Link>
  </div>
</div>


        <div className="flex justify-center flex-col items-start bg-[#e2b284] md:w-[390px] h-[325px] p-5  rounded-md gap-5 w-full hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_20px_30px_-10px_rgb(227,178,133)]">
          {/* <h4>Consulting times</h4> */}
          <h2 className="font-bold text-3xl pt-3 ">Consultant Dermatosurgeon</h2>
         
           <div className="w-full bg-white/30 backdrop-blur-sm rounded-lg p-2">
  <table className="w-full text-sm text-[#2c2d3f] border-collapse">
    <thead>
      <tr className="border-b border-black/20">
        <th className="pb-2 text-left font-semibold">Hospital</th>
        <th className="pb-2 text-left font-semibold">Days</th>
        <th className="pb-2 text-right font-semibold">Time</th>
      </tr>
    </thead>

    <tbody className="leading-relaxed">
      <tr className="border-b border-black/10">
        <td className="py-2 font-medium">
          Lilavati Hospital
        </td>
        <td className="py-2">
          Mon<br />
          Thu & Sat<br />
          Fri
        </td>
        <td className="py-2 text-right">
          11 AM – 2 PM<br />
          2 PM – 5 PM<br />
          9 AM – 2 PM
        </td>
      </tr>

      <tr>
        <td className="py-2 font-medium px-1">
          Bombay Hospital
        </td>
        <td className="py-2">
          Mon / Wed / Fri
        </td>
        <td className="py-2 text-right">
          3 PM – 4 PM
        </td>
      </tr>
    </tbody>
  </table>
</div>
        <div className="pb-2"><Link href="#contact" className="group relative inline-block ">
            LEARN MORE
            <hr
              className="absolute bottom-[-2px] left-0 h-[2px] w-0 transition-all duration-200 ease-in-out group-hover:w-full "
            />
          </Link>
          </div> 
        </div>

        <div className="flex justify-center flex-col items-start bg-[#e2b284] md:w-[390px] h-[320px] p-5 rounded-md gap-5 md:flex-1 md:max-w-[730px] lg:max-w-[350px] w-full backdrop-blur-sm hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_20px_30px_-10px_rgb(227,178,133)]">
  {/* <h4 className="uppercase tracking-wide text-sm text-black/70">
    Clinic Hours
  </h4> */}

  <h2 className="font-bold text-3xl">
    Clinic Consulting Times
  </h2>

  {/* Schedule Box */}
  <div className="w-full bg-white/30 rounded-lg p-4 text-sm text-[#2c2d3f]">
    <div className="flex justify-between items-center border-b border-black/10 pb-3 mb-3">
      <div className="font-bold">
        Days
      </div>
      <div className="font-bold">
        Time
      </div>
    </div>
    <div className="flex justify-between items-center border-b border-black/10 pb-3 mb-3">
      <div className="font-medium">
        Monday – Friday
      </div>
      <div className="font-semibold">
        5:00 PM – 7:00 PM
      </div>
    </div>

    <div className="flex justify-between items-center">
      <div className="font-medium">
        Tue / Wed / Thu / Sat
      </div>
      <div className="font-semibold">
        10:00 AM – 2:00 PM
      </div>
    </div>
  </div>

  <Link
    href="#contact"
    className="group relative inline-block font-medium text-white"
  >
    LEARN MORE
    <hr className="absolute bottom-[-2px] left-0 h-[2px] w-0 transition-all duration-200 ease-in-out group-hover:w-full"
            />
  </Link>
</div>

      </div>
    </div>
  );
};

export default Main;
