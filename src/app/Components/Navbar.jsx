"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HamburgerIcon, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between p-2 lg:px-15 items-center sticky top-0 bg-white shadow-md">
        <div>
          <Image
            src="https://magicalballoonsdigital.com/juvenis/img/juvenis-logo%20(1).jpg"
            className="flex "
            alt="logo"
          />
        </div>
        <div className="flex-row gap-10 font-semibold text-gray-700 hidden md:flex text-sm lg:text-[15px]">
          <Link
            className="relative group inline-block hover:text-[#1893bf]"
            href="/"
          >
            Home
            <hr
              className="  absolute left-0 -bottom-7 h-[4px] w-0 bg-[#1893bf] 
      transition-all duration-300 ease-in-out
      group-hover:w-[50px]"
            ></hr>
          </Link>

          <Link
            className="relative group inline-block hover:text-[#1893bf]"
            href="/aboutus"
          >
            About us
            <hr
              className="  absolute left-0 -bottom-7 h-[4px] w-0 bg-[#1893bf] 
      transition-all duration-300 ease-in-out
      group-hover:w-[60px]"
            ></hr>
          </Link>
       
          <div
            className="relative group inline-block hover:text-[#1893bf] cursor-pointer"
            
          >
            Services  
            <div>
            <ChevronDown className="absolute top-0 left-12 pl-3 font-bold" />
              </div>
            <hr className="  absolute left-0 -bottom-7 h-[4px] w-0 bg-[#1893bf] 
      transition-all duration-300 ease-in-out
      group-hover:w-[60px]"></hr>

    <div className="absolute left-0 mt-4 w-48 rounded-md bg-white shadow-lg opacity-0
      invisible group-hover:visible group-hover:opacity-100
      transition-all duration-300 z-50 border-l-4 border-[#1893bf]"
  >
    <ul className="py-2 text-sm text-gray-700">
      {/* Medical with nested dropdown */}
      <li className="relative group/item">
        <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf] cursor-pointer">
          Medical
          <ChevronDown size={16} />
        </span>

        {/* Nested dropdown */}
        <div
          className="absolute top-0 left-full ml-1 w-48 rounded-md bg-white shadow-lg opacity-0
            invisible group-hover/item:visible group-hover/item:opacity-100
            transition-all duration-300 z-50 border-l-4 border-[#1893bf]"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link
                href="/services/hairfall"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Hair Fall & Remedy
              </Link>
            </li>
            <li>
              <Link
                href="/services/Psoriasis" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Psoriasis Treatment
              </Link>
            </li>
            <li>
              <Link
                href="/services/vitiligo-treatment"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                 Vitiligo Treatment
              </Link>
            </li>
            <li>
              <Link
                href="/services/eczema"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                 Eczema
              </Link>
            </li>
            <li>
              <Link
                href="/services/acne-treatment"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Acne Treatment
              </Link>
            </li>
            <li>
              <Link
                href="/services/pigmentation-treatment"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Pigmentation Treatment
              </Link>
            </li>
            <li>
              <Link
                href="/services/anti-aging"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Anti-Aging
              </Link>
            </li>
            <li>
              <Link
                href="/know-your-skin-type"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Know your Skin Type
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/* Surgical */}
      <li className="relative group/item">
        <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf] cursor-pointer">
          Surgical
          <ChevronDown size={16} />
        </span>
        <div
          className="absolute top-0 left-full ml-1 w-48 rounded-md bg-white shadow-lg opacity-0
            invisible group-hover/item:visible group-hover/item:opacity-100
            transition-all duration-300 z-50 border-l-4 border-[#1893bf]"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link
                href="/services/filler"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Filler
              </Link>
            </li>
            <li>
              <Link
                href="/services/Hairtransplant"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                Hair Transplant
              </Link>
            </li>
            <li>
              <Link
                href="/services/acne-surgery"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                 Acne Scar Surgery

              </Link>
            </li>
            <li>
              <Link
                href="/services/vitiligo-surgery"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                 Vitiligo Surgery

              </Link>
            </li>
            <li>
              <Link
                href="/services/Liposuction"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                 Liposuction / Body Sculpting

              </Link>
            </li>
            <li>
              <Link
                href="/services/"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                 Scar Revision

              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1893bf]"
              >
                 Thread Lift

              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
          </div>

          <Link
            className="relative group inline-block hover:text-[#1893bf]"
            href="/Gallery"
          >
            Gallery
            <hr className="  absolute left-0 -bottom-7 h-[4px] w-0 bg-[#1893bf] 
      transition-all duration-300 ease-in-out
      group-hover:w-[60px]"></hr>
          </Link>
          <Link
            className="relative group inline-block hover:text-[#1893bf]"
            href="/contact"
          >
            Contact Us
            <hr className="  absolute left-0 -bottom-7 h-[4px] w-0 bg-[#1893bf] 
      transition-all duration-300 ease-in-out
      group-hover:w-[80px]"></hr>
          </Link>
          <Link
            className="relative group inline-block hover:text-[#1893bf]"
            href="https://magicalballoonsdigital.com/juvenis-ecommerce"
          >
            Shop
            <hr className="  absolute left-0 -bottom-7 h-[4px] w-0 bg-[#1893bf] 
      transition-all duration-300 ease-in-out
      group-hover:w-[50px]"></hr>
          </Link>
        </div>
        <div>
          <button onClick={() => router.push('/Appointment')} className="hidden md:flex text-white text-sm font-normal rounded-md p-2 bg-[#1893bf] ">
            Book Appointment
          </button>
        </div>

        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={()=>setIsOpen(!isOpen)}>
  <SheetTrigger>
    <Menu onClick={()=>setIsOpen(true)} />
  </SheetTrigger>
  <SheetContent className="h-full">
    <SheetHeader>
      <SheetTitle>
        <X className="absolute right-5" size={20} onClick={()=>setIsOpen(false)} />
      </SheetTitle>
      <div className="flex flex-col h-full gap-6 pt-4">

        <div className="flex flex-col gap-4">
          <Link href="/" onClick={()=>setIsOpen(false)} className="block active:font-semibold">Home</Link>
          <Link  onClick={()=>setIsOpen(false)} href="/aboutus" className="block">About Us</Link>

          {/* Services Accordion */}
          <Accordion type="single" collapsible>
            <AccordionItem value="services">
              <AccordionTrigger className="font-normal text-lg flex items-center " >Services</AccordionTrigger>
              <AccordionContent className="ml-4 p-2 flex gap-2 flex-col ">

                {/* Medical Sub-Accordion */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="medical">
                    <AccordionTrigger className="">Medical</AccordionTrigger>
                    <AccordionContent className="ml-4 flex flex-col gap-2 p-2">
                      <Link href="/services/hairfall">Hair Fall & Remedy</Link>
                      <Link href="/services/Psoriasis">Psoriasis Treatment</Link>
                      <Link href="/services/vitiligo">Vitiligo Treatment</Link>
                      <Link href="/services/eczema">Eczema</Link>
                      <Link href="/services/acne-treatment">Acne Treatment</Link>
                      <Link href="/services/pigmentation-treatment">Pigmentation Treatment</Link>
                      <Link href="/services/anti-aging">Anti-Aging</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Surgical Sub-Accordion */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="surgical">
                    <AccordionTrigger>Surgical</AccordionTrigger>
                    <AccordionContent className="ml-4 flex flex-col gap-2 p-2">
                      <Link href="/services/filler">Filler</Link>
                      <Link href="/services/Hairtransplant">Hair Transplant</Link>
                      <Link href="/services/acne-surgery">Acne Scar Surgery</Link>
                      <Link href="/services/vitiligo-surgery">Vitiligo Surgery</Link>
                      <Link href="/services/Liposuction">Liposuction / Body Sculpting</Link>
                      <Link href="/services/surgical/emergency">Scar Revision</Link>
                      <Link href="/services/surgical/emergency">Thread Lift</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Other Links */}
          <Link href="/gallery" className="block">Gallery</Link>
          <Link href="/contact" className="block">Contact Us</Link>
          <Link href="/shop" className="block">Shop</Link>
        </div>

        <Button onClick={() => router.push('/Appointment')} className="text-white bg-[#1893bf]">Book Appointment</Button>
      </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
