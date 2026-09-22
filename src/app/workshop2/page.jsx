
"use client";

import React from "react";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const workshops = [
  {
    id: 1,
    number: "01",
    title: "Liposuction & Fat Grafting",
    year: "2026",
    date: "25th – 27th October 2026",
    location: "Mumbai, India",
    image: "/workshop/01.jpg",
    type: "featured",
  },
  {
    id: 2,
    number: "02",
    title: "International Faculty",
    date: "25th – 27th October 2026",
    location: "Mumbai, India",
    image: "/workshop/02.jpg",
    bg: "#E5F0F1",
  },
  {
    id: 3,
    number: "03",
    title: "Detailed Program",
    date: "25th October 2026",
    location: "Khar West, Mumbai",
    image: "/workshop/03.jpg",
    bg: "#F3E4D8",
  },
  {
    id: 4,
    number: "04",
    title: "Course Highlights",
    date: "26th & 27th October 2026",
    location: "Lilavati Hospital, Mumbai",
    image: "/workshop/04.jpg",
    bg: "#E7EBDC",
  },
];

const Page = () => {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#665A52]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-url(`./bg.webp`) px-6 py-24 sm:px-10 lg:px-[8%] lg:py-32">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/30" />

        <div className="absolute bottom-[-100px] left-[5%] h-56 w-56 rounded-full border border-[#B99A62]/20" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-6 text-[10px] font-bold tracking-[0.35em] text-[#A17D45]">
            ISTAL · WORKSHOPS
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[96px]">

            Hands on

            <br />

            <span className="font-normal text-[#8EABB1]">
              Training Workshops
            </span>

          </h1>

          <div className="mt-10 flex max-w-3xl items-start gap-6">

            <div className="mt-3 h-px w-14 shrink-0 bg-[#B99A62]" />

            <p className="max-w-xl text-sm leading-8 text-[#665A52]/70 sm:text-base">
              Explore our professional hands-on training programs,
              workshops and educational initiatives for dermatologists
              and plastic surgeons.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          UPCOMING WORKSHOP
      ====================================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <span className="text-[10px] font-bold tracking-[0.3em] text-[#A17D45]">
                UPCOMING PROGRAM
              </span>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">

                Liposuction & Fat
                <br />

                <span className="font-normal text-[#8EABB1]">
                  Grafting 2026
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#665A52]/60">
              A three-day international hands-on training course featuring
              experienced national and international faculty.
            </p>

          </div>


          {/* FEATURED WORKSHOP */}

          <article className="grid overflow-hidden rounded-[2px] lg:grid-cols-[1.1fr_0.9fr]">

            {/* IMAGE */}

            <div className="relative min-h-[400px] overflow-hidden sm:min-h-[520px] lg:min-h-[590px]">

              <img
                src="/workshop/01.jpg"
                alt="Liposuction & Fat Grafting"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* NUMBER */}

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF8F3]/90 text-xs font-semibold text-[#665A52] backdrop-blur-sm">
                01
              </div>

            </div>


            {/* INFORMATION */}

            <div className="flex flex-col justify-center bg-[#F4E9DE] p-8 sm:p-12 lg:p-14">

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-[#B99A62]/50 bg-[#FAF8F3]/60 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-[#9A7847]">
                  UPCOMING
                </span>

                <span className="text-xs tracking-[0.2em] text-[#665A52]/40">
                  2026
                </span>

              </div>


              <h3 className="mt-10 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">

                Liposuction
                <br />

                <span className="font-normal text-[#8EABB1]">
                  & Fat Grafting
                </span>

              </h3>


              <div className="mt-10 border-t border-[#665A52]/15 pt-7">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                  <div className="flex gap-3">

                    <CalendarDays
                      size={18}
                      strokeWidth={1.4}
                      className="mt-0.5 shrink-0 text-[#A17D45]"
                    />

                    <div>

                      <p className="text-[9px] font-bold tracking-[0.2em] text-[#A17D45]">
                        DATE
                      </p>

                      <p className="mt-1 text-xs leading-5">
                        25th – 27th
                        <br />
                        October 2026
                      </p>

                    </div>

                  </div>


                  <div className="flex gap-3">

                    <MapPin
                      size={18}
                      strokeWidth={1.4}
                      className="mt-0.5 shrink-0 text-[#A17D45]"
                    />

                    <div>

                      <p className="text-[9px] font-bold tracking-[0.2em] text-[#A17D45]">
                        LOCATION
                      </p>

                      <p className="mt-1 text-xs leading-5">
                        Mumbai,
                        <br />
                        India
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              <a
                href="/workshops/1"
                className="group mt-10 flex items-center justify-between border-t border-[#665A52]/15 pt-5"
              >

                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  View Workshop
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A17D45] text-[#A17D45] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#A17D45] group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>

              </a>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          OTHER WORKSHOPS
      ====================================================== */}

      <section className="px-6 pb-24 sm:px-10 lg:px-[8%] lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex items-end justify-between">

            <div>

              <span className="text-[10px] font-bold tracking-[0.3em] text-[#A17D45]">
                WORKSHOP INFORMATION
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Explore the program
              </h2>

            </div>

            <span className="hidden text-xs text-[#665A52]/30 sm:block">
              02 — 04
            </span>

          </div>


          {/* 2 COLUMN */}

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

            {workshops.slice(1).map((workshop) => (

              <article
                key={workshop.id}
                className="group overflow-hidden"
                style={{ backgroundColor: workshop.bg }}
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  {/* NUMBER */}

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF8F3]/90 text-xs font-semibold text-[#665A52] backdrop-blur-sm">
                    {workshop.number}
                  </div>

                </div>


                {/* INFORMATION — beside image on desktop */}

                <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">

                  <div>

                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#665A52] sm:text-3xl">
                      {workshop.title}
                    </h3>

                    <div className="mt-6 flex flex-col gap-3">

                      <div className="flex items-center gap-3 text-xs text-[#665A52]/65">

                        <CalendarDays
                          size={16}
                          strokeWidth={1.4}
                          className="shrink-0 text-[#A17D45]"
                        />

                        <span>
                          {workshop.date}
                        </span>

                      </div>


                      <div className="flex items-center gap-3 text-xs text-[#665A52]/65">

                        <MapPin
                          size={16}
                          strokeWidth={1.4}
                          className="shrink-0 text-[#A17D45]"
                        />

                        <span>
                          {workshop.location}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* ARROW */}

                  <a
                    href={`/workshops/${workshop.id}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#A17D45] text-[#A17D45] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#A17D45] group-hover:text-white"
                  >

                    <ArrowUpRight size={17} />

                  </a>

                </div>

              </article>

            ))}

          </div>


          {/* LAST WIDE WORKSHOP */}

          <article
            className="group mt-7 overflow-hidden"
            style={{ backgroundColor: workshops[3].bg }}
          >

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={workshops[3].image}
                  alt={workshops[3].title}
                  className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF8F3]/90 text-xs font-semibold text-[#665A52] backdrop-blur-sm">
                  04
                </div>

              </div>


              {/* CONTENT */}

              <div className="flex flex-col justify-center p-7 sm:p-10">

                <p className="text-[9px] font-bold tracking-[0.25em] text-[#8C795C]">
                  ISTAL PROGRAM
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#665A52]">
                  Course Highlights
                </h3>


                <div className="mt-8 space-y-4 border-t border-[#665A52]/15 pt-6">

                  <div className="flex items-center gap-3 text-xs text-[#665A52]/65">

                    <CalendarDays
                      size={16}
                      strokeWidth={1.4}
                      className="text-[#A17D45]"
                    />

                    <span>
                      26th & 27th October 2026
                    </span>

                  </div>


                  <div className="flex items-center gap-3 text-xs text-[#665A52]/65">

                    <MapPin
                      size={16}
                      strokeWidth={1.4}
                      className="text-[#A17D45]"
                    />

                    <span>
                      Lilavati Hospital, Mumbai
                    </span>

                  </div>

                </div>


                <a
                  href="/workshops/4"
                  className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#665A52]"
                >

                  View Workshop

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A17D45] text-[#A17D45] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#A17D45] group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </span>

                </a>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <section className="bg-[#DCEBED] px-6 py-20 sm:px-10 lg:px-[8%] lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <span className="text-[10px] font-bold tracking-[0.3em] text-[#8C795C]">
                PROFESSIONAL EDUCATION
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#665A52] sm:text-5xl lg:text-6xl">

                Learn from

                <br />

                <span className="font-normal text-[#8EABB1]">
                  experienced faculty.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#665A52]/60">
              Our workshops combine expert knowledge with practical,
              hands-on learning to provide a focused professional
              training experience.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Page;

