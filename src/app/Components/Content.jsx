import { CirclePlay } from "lucide-react";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="flex flex-col mt-[990px] md:mt-[750px] lg:mt-[300px] items-center  ">

        <div className="flex justify-center items-center flex-col text-center">
          <img src="/juvenius-bannes/female.png" alt="female" />
          <h3 className="font-semibold text-3xl text-[#2d2d3e] ">
            Welcome to Juvenis Experience
          </h3>
          <p className="font-normal p-2 text-[#888a8f]">
            We Offer Different Services To Improve Your Skin Health
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center p-5 lg:px-30 w-full">
          <div className="flex flex-col gap-5 text-[#78757f] lg:w-1/2 lg:p-4">
            <h2 className="text-[#2d2d3e] text-2xl font-bold">Who We Are</h2>
            <hr></hr>
            <p className="text-md">
              Juvenis Clinic in Santacruz west, Mumbai is the creation of{" "}
              <span className="text-[#747574] font-bold">
                {" "}
                Dr Nilesh N Goyal
              </span>{" "}
              , a prominent dermatosurgeon trained in India, UK and USA. The
              clinic caters to real world skin diseases and provides solutions
              for dermatologic and cosmetic issues.
            </p>
            <p>
              Dr Nilesh Goyal has more than{" "}
              <span className="text-[#747574] font-bold">
                30 years of experience{" "}
              </span>
              in solving dermatologic diseases like psoriasis, eczema, vitiligo,
              lichen planus, acne, skin cancer and drug reactions. His training
              across the world has made him an expert in skin diseases affecting
              all skin types (white, brown, black and yellow). He has worked
              across continents getting trained in all types of dermatosurgery.
              He is an expert in skin cancer surgery (trained in UK).
            </p>
            <div className="flex flex-col     lg:flex-row lg:gap-6 gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <CirclePlay />
                  <p>Cosmetic Dermatology</p>
                </div>
                <div className="flex gap-2">
                    <CirclePlay />
                <p>Medical Dermatology</p>
                </div>
                <div className="flex gap-2">
                    <CirclePlay />
                <p>Surgical Dermatology</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <CirclePlay />
                <p>Hair Loss Treatment</p>
                </div>
                <div className="flex gap-2">
                    <CirclePlay />
                <p>Acne Treatment</p>
                </div>
                <div className="flex gap-2">
                    <CirclePlay />
                <p>Laser Hair Removal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-center p-5 ">
            <img
              src="/juvenius-bannes/dr.jpg"
              alt="Dr. Nilesh Goyal"
              className=" rounded-md "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
