import React from "react";
import { Facebook } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";

const header = () => {
  return (
    // <div className='flex justify-center md:justify-between items-center gap-2 p-4 bg-[#efd5bb] text-sm w-full'>

    //  <div className='flex justify-between gap-10 items-center'>
    //    <div className='flex items-center gap-1'><Facebook className='w-4 text-[#1893bf]'/>Facebook</div>
    //    <div className='flex items-center gap-1'><Instagram  className='w-4 text-[#1893bf]' />Instagram</div>
    // </div>

    // <div className='justify-between gap-10 items-center hidden md:flex'>
    //    <div className='flex items-center gap-1'><Phone className='w-4 text-[#1893bf]'/>+91 9769966696</div>
    //    <div className='flex items-center gap-1'>
    //     <Mail className='w-4 text-[#1893bf]'/>getyoung@juvenis</div>
    // </div>

    // </div>
    <div className="flex justify-center md:justify-between items-center gap-2 p-4 bg-[#efd5bb] text-sm w-full">
      {/* Social Icons */}
      <div className="flex justify-between gap-10 items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          <Facebook className="w-4 text-[#1893bf]" />
          Facebook
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <Instagram className="w-4 text-[#1893bf]" />
          Instagram
        </div>
      </div>

      {/* Contact Info */}
      <div className="justify-between gap-10 items-center hidden md:flex">
        {/* Phone link */}
        <a
          href="tel:+919769966696"
          className="flex items-center gap-1 text-inherit "
        >
          <Phone className="w-4 text-[#1893bf]" />
          +91 9769966696
        </a>

        {/* Email link */}
        <a
          href="mailto:getyoung@juvenis.com"
          className="flex items-center gap-1 text-inherit"
        >
          <Mail className="w-4 text-[#1893bf]" />
          getyoung@juvenis.com
        </a>
      </div>
    </div>
  );
};

export default header;
