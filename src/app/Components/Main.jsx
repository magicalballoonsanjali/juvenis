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
        <div className="flex justify-center flex-col items-start w-full bg-[#e2b284] md:w-[350px] h-[300px] p-5 rounded-md gap-5 hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_20px_30px_-10px_rgb(227,178,133)]">
          <h4 className="">Skin Emergency?</h4>
          <h2 className="font-bold text-3xl">Immediate Dermatology Care</h2>
          <p>
            Experience a sudden rash, allergic reaction, or severe acne
            flare-up?
          </p>
          <Link href="#contact" className="group relative inline-block ">
            LEARN MORE
            <hr
              className="absolute bottom-[-2px] left-0 h-[2px] w-0 transition-all duration-200 ease-in-out group-hover:w-full"
            />
          </Link>
        </div>

        <div className="flex justify-center flex-col items-start bg-[#e2b284] md:w-[350px] h-[300px] p-5 rounded-md gap-5 w-full hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_20px_30px_-10px_rgb(227,178,133)]">
          <h4>Dermatologist Schedule</h4>
          <h2 className="font-bold text-3xl">Doctors Timetable</h2>
          <div className="flex justify-between items-center w-full">
            <div className="text-start">
              <p>Lilavati Hospital</p>
              <p>Juvenis Clinic</p>
              <p>bombay Hospital</p>
            </div>
            <div className="text-end">
              <p>Monday- Thursday</p>
              <p>Friday- Saturday</p>
              <p>Tuesday - Wednesday</p>
            </div>
          </div>
         <Link href="#contact" className="group relative inline-block ">
            LEARN MORE
            <hr
              className="absolute bottom-[-2px] left-0 h-[2px] w-0 transition-all duration-200 ease-in-out group-hover:w-full"
            />
          </Link>
        </div>

        <div className="flex justify-center flex-col items-start bg-[#e2b284] md:w-[350px] h-[300px] p-5 rounded-md gap-5 md:flex-1 md:max-w-[730px] lg:max-w-[350px] w-full hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_20px_30px_-10px_rgb(227,178,133)]">
          <h4>Clinic Hours</h4>
          <h2 className="font-bold text-3xl">Opening Hours</h2>
          <div className="flex justify-between items-center w-full">
            <div className="text-start">
              <p>Monday - Friday</p>
              <p>Saturday</p>
              <p>Monday - Thusday</p>
            </div>

            <div className="text-end">
              <p>8.00-20.00</p>
              <p>9.00-18.30</p>
              <p>9.00-15.00</p>
            </div>
          </div>

          <Link href="#contact" className="group relative inline-block ">
            LEARN MORE
            <hr
              className="absolute bottom-[-2px] left-0 h-[2px] w-0 transition-all duration-200 ease-in-out group-hover:w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
