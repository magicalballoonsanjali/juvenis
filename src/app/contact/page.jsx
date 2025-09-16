"use client";
import React from "react";
import Copyright from "../Components/Copyright";
import { Clock4, LocationEdit, Mail, MapPin, Phone } from "lucide-react";
import Footer from "../Components/Footer";
import toast from "react-hot-toast";

const Page = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

     const loadingId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss(loadingId); // remove loading toast

      if (res.ok) {
        e.target.reset();
        toast.success("Message sent successfully! 🎉");
      } else {
        toast.error("Error sending message.");
      }
    } catch (err) {
      toast.dismiss(loadingId);
      toast.error("Something went wrong.");
    }
  };


  return (
    <div>
      {/* Contact Section */}
      <div className="bg-white py-5 px-2 lg:mx-40 lg:mt-15 flex justify-center items-center shadow-2xl ">
        {/* Main container with flex-row on large screens */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-center p-10">
          {/* ✅ Left Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7256.36332307175!2d72.832351091126!3d19.083092917763434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c908f4f7fb09%3A0xb42b8e68849104a1!2sJuvenis!5e1!3m2!1sen!2sin!4v1748334577947!5m2!1sen!2sin"
              className="w-full h-[500px]"
            ></iframe>
          </div>

          {/* ✅ Right Side: Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4  p-10">
              <h3 className="font-bold text-3xl text-[#2d2d3e] ">
                Contact With Us
                 <hr className="h-[3px] w-[70px] font-bold bg-[#1893bf] mt-2"></hr>
              </h3>
              
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1893bf]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1893bf]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1893bf]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1893bf]"
              />
              <textarea
                placeholder="Write Your Message Here....."
                name="message" 
                className="h-32 border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#1893bf]"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-[#1893bf] text-white px-6 py-3 rounded-md hover:bg-[#147ba1] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center p-2 md:px-10 lg:px-30 pt-10 gap-2 md:gap-8 lg:flex-row ">

        <div className="flex bg-[#cba176] text-white gap-3 lg:justify-center items-center p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_15px_30px_-10px_rgb(227,178,133)] ">
          <div className="">
            <Phone className="size-20 "/>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-3xl lg:text-2xl">Contact Us</h2>
            <h3>+91 9769966696</h3>
            <h3>getyoung@juvenis.in</h3>
          </div>
        </div>
        <div className="flex bg-[#cba176] text-white gap-3 lg:justify-center items-center p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_15px_30px_-10px_rgb(227,178,133)]">
          <div>
            <MapPin className="size-20"/>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-3xl lg:text-2xl ">Location</h2>
            <h3>4, Adarsh, Santacruz (W), Mumbai–400 054</h3>
          </div>
        </div>
        <div className="flex bg-[#cba176] text-white gap-3 lg:justify-center items-center p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 ease-out hover:shadow-[0_15px_30px_-10px_rgb(227,178,133)]">
          <div>
            <Clock4 className="size-20 "/>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold  lg:text-2xl">Time</h2>
            <h3>Wednesday/Friday/Monday: 5 pm – 8 pm</h3>
            <h3>Tuesday/Saturday/Thursday: 10 am – 5 pm</h3>
          </div>
        </div>
      </div> */}
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 py-12 bg-white">
  {/* Contact Card */}
  <div className="w-72 h-auto bg-[#b98f6a] text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 text-center">
    <div className="bg-white text-[#cba176] p-4 rounded-full mb-6 mx-auto w-fit">
      <Phone className="size-12" />
    </div>
    <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
    <p className="text-base font-medium">+91 9769966696</p>
    <p className="text-base font-medium">getyoung@juvenis.in</p>
  </div>

  {/* Location Card */}
  <div className="w-72 h-auto bg-[#b98f6a] text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 text-center">
    <div className="bg-white text-[#cba176] p-4 rounded-full mb-6 mx-auto w-fit">
      <MapPin className="size-12" />
    </div>
    <h2 className="text-2xl font-bold mb-2">Location</h2>
    <p className="text-base font-medium">4, Adarsh, Santacruz (W)</p>
    <p className="text-base font-medium">Mumbai – 400 054</p>
  </div>

  {/* Time Card */}
  <div className="w-72 h-auto bg-[#b98f6a] text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 text-center">
    <div className="bg-white text-[#cba176] p-4 rounded-full mb-6 mx-auto w-fit">
      <Clock4 className="size-12" />
    </div>
    <h2 className="text-2xl font-bold mb-2">Timings</h2>
    <p className="text-base font-medium">Mon / Wed / Fri: 5 PM – 8 PM</p>
    <p className="text-base font-medium">Tue / Thu / Sat: 10 AM – 5 PM</p>
  </div>
</div>

      <Footer/>
      <Copyright/>
    </div>
  );
};

export default Page;
