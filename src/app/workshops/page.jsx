"use client";

import React from "react";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Download,
  Eye,
  ExternalLink,
} from "lucide-react";

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
      {" "}
      {/* HERO */}{" "}
      <section
        className="bg-cover bg-center bg-no-repeat px-6 py-24 sm:px-10 lg:px-[8%] lg:py-32"
        style={{ backgroundImage: "url('/workshop/bg2.png')" }}
      >
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <p className="mb-7 text-xs font-bold tracking-[0.3em] text-[#1893BF]">
            {" "}
            ISTAL · WORKSHOPS{" "}
          </p>{" "}
          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[#253B5B] sm:text-6xl md:text-7xl lg:text-8xl">
            {" "}
            Hands on{" "}
            <span className="font-normal text-[#1893BF]">
              {" "}
              Training Workshops{" "}
            </span>{" "}
          </h1>{" "}
          <div className="my-10 h-px w-full bg-[#253B5B]/20" />{" "}
          <p className="max-w-2xl text-sm leading-8 text-[#253B5B]/70 sm:text-base">
            {" "}
            Explore our professional hands-on training programs, workshops and
            educational initiatives for dermatologists and plastic surgeons.{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* WORKSHOPS */}{" "}
      <section className="px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {" "}
            {workshops.map((workshop) => (
              <article
                key={workshop.id}
                className="group overflow-hidden rounded-2xl border border-[#e7e2dc] bg-white shadow-[0_8px_30px_rgba(37,59,91,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,59,91,0.12)]"
              >
                {" "}
                {/* IMAGE */}{" "}
                <div className="overflow-hidden bg-[#f1f1ef]">
                  {" "}
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />{" "}
                </div>{" "}
                {/* CONTENT */}{" "}
                <div className="p-5 sm:p-6">
                  {" "}
                  <div className="flex items-start justify-between gap-4">
                    {" "}
                    <div>
                      {" "}
                      <span className="text-[8px] font-extrabold tracking-[0.2em] text-[#a07c24]">
                        {" "}
                        ISTAL HANDS-ON TRAINING{" "}
                      </span>{" "}
                      <h3 className="mt-2 text-xl font-semibold leading-tight text-[#253B5B] sm:text-2xl">
                        {" "}
                        {workshop.title}{" "}
                      </h3>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* DATE + ACTIONS */}{" "}
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#ece9e5] pt-5">
                    {" "}
                    <div className="flex min-w-0 items-center gap-2 text-xs text-gray-500">
                      {" "}
                      <CalendarDays
                        size={16}
                        strokeWidth={1.6}
                        className="shrink-0 text-[#a07c24]"
                      />{" "}
                      <span> {workshop.date} </span>{" "}
                    </div>{" "}
                    <div className="flex shrink-0 items-center gap-2">
                      {" "}
                      {/* KNOW MORE */}{" "}
                      <a
                        href={workshop.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full bg-[#253B5B] px-4 py-2 text-[12px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#1893BF]"
                      >
                        {" "}
                        Know More <ExternalLink size={13} />{" "}
                      </a>{" "}
                      {/* DOWNLOAD */}{" "}
                      <a
                        href={workshop.pdf}
                        download
                        aria-label={`Download ${workshop.title} PDF`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d4ce] text-[#253B5B] transition-all duration-300 hover:border-[#a07c24] hover:bg-[#a07c24] hover:text-white"
                      >
                        {" "}
                        <Download size={16} />{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* REGISTER */}{" "}
                  <div className="mt-5 border-t border-[#ece9e5] pt-5">
                    {" "}
                    <a
                      href={workshop.register}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-full bg-[#FE033B] px-5 py-3 text-xl font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#e60035]"
                    >
                      {" "}
                      Register Now{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </article>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* BOTTOM SECTION */}{" "}
      <section className="bg-[#EFD5BB] px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            {" "}
            <div>
              {" "}
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#a07c24]">
                {" "}
                PROFESSIONAL EDUCATION{" "}
              </span>{" "}
              <h2 className="mt-6 text-4xl font-semibold leading-[0.9] tracking-[-0.04em] text-[#253B5B] sm:text-5xl lg:text-7xl">
                {" "}
                Learn from <br />{" "}
                <span className="font-normal text-[#1893BF]">
                  {" "}
                  experienced faculty.{" "}
                </span>{" "}
              </h2>{" "}
            </div>{" "}
            <p className="max-w-md text-sm leading-7 text-[#253B5B]/60">
              {" "}
              Our workshops combine expert knowledge with practical, hands-on
              learning to provide a focused professional training experience.{" "}
            </p>{" "}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
