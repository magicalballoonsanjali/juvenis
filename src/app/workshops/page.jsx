"use client";

import React from "react";
import { CalendarDays, MapPin, ArrowUpRight, Download } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Liposuction & Fat Grafting",
    date: "25th – 27th October 2026",
    location: "Mumbai, India",
    image: "/workshop/01.jpg",
  },
//   {
//     id: 2,
//     title: "International Faculty",
//     date: "25th – 27th October 2026",
//     location: "Mumbai, India",
//     image: "/workshop/02.jpg",
//   },
//   {
//     id: 3,
//     title: "Detailed Program",
//     date: "25th October 2026",
//     location: "Khar West, Mumbai",
//     image: "/workshop/03.jpg",
//   },
//   {
//     id: 4,
//     title: "Course Highlights",
//     date: "26th & 27th October 2026",
//     location: "Lilavati Hospital, Mumbai",
//     image: "/workshop/04.jpg",
//   },
];

const Page = () => {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#10145c]">

      {/* HERO */}

        <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-24 sm:px-10 lg:px-[8%] lg:py-32"
  style={{ backgroundImage: "url('workshop/bg2.png')" }}
>

        <div className="mx-auto max-w-7xl">

          <p className="mb-7 text-xs font-bold tracking-[0.3em] text-[#1893BF]">
            ISTAL · WORKSHOPS
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">

           Hands on 

            <span className="font-normal text-[#1893BF]">
              {" "}Training Workshops
            </span>

          </h1>

          <div className="my-10 h-px w-full bg-[#253B5B]/20" />

          <p className="max-w-2xl text-sm leading-8 text-[#253B5B]/70 sm:text-base">
            Explore our professional hands-on training programs,
            workshops and educational initiatives for dermatologists
            and plastic surgeons.
          </p>

        </div>

      </section>


      {/* WORKSHOPS */}

      <section className="px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28">

        <div className="mx-auto max-w-7xl">
          {/* WORKSHOP GRID */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {workshops.map((workshop, index) => (

              <article
                key={workshop.id}
                className="group overflow-hidden border border-[#e4e4df] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,20,92,0.12)]"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden bg-gray-100">

                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

              

                </div>


                {/* CONTENT */}

                <div className="p-6 sm:p-8">

                  <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#a07c24]">
                    ISTAL HANDS-ON TRAINING
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold text-[#10145c] sm:text-3xl">
                    {workshop.title}
                  </h3>


                  {/* DETAILS */}

                  <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">

                    <div className="flex items-center gap-3 text-xs text-gray-500 justify-between">

                        <div className="flex gap-2">

                      <CalendarDays
                        size={17}
                        className="shrink-0 text-[#a07c24]"
                      />

                      <span>{workshop.date}</span>
                    
                    </div>

                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeU9V3hmhFnlB89T95S1QosayKQrQPrT9pPu__DlkXsowQeuA/viewform" className="bg-[#FE033B] text-sm leading-7 text-white px-2 p-1 rounded-full">Register Now</a>

                      <a href="/workshop/liposuction-workshop.pdf" download>
  <Download size={20} />
</a>

                    </div>

                   

                  </div>

           

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* BOTTOM SECTION */}

      <section className="bg-[#10145c] px-6 py-20 text-white sm:px-10 lg:px-[8%] lg:py-28">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div>

            <span className="text-[10px] font-bold tracking-[0.3em] text-[#d6ad42]">
              PROFESSIONAL EDUCATION
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.9] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Learn from
              <br />
              <span className="font-normal text-[#d6ad42]">
                experienced faculty.
              </span>
            </h2>

          </div>

         
          
        </div>

      </section>
<section>
    
</section>
    </main>
  );
};

export default Page;