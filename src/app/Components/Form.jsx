"use client"
import React from "react";
import toast from "react-hot-toast";

const Form = () => {

  const handleSubmit= async (e)=>{
     e.preventDefault();

    const form = new FormData(e.target);
    const formData = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      date: form.get("date"),
      message: form.get("message"),
    };

    const loadingToast = toast.loading("Sending your request...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss(loadingToast);

      if (res.ok) {
        e.target.reset();
        toast.success("Appointment booked successfully 🎉");
      } else {
        toast.error("Error sending message 😢");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong. Please try again 😢");
    }

  }
  return (
    <>
     <div id="contact" className='flex justify-center items-center flex-col text-center p-8'>
                <img src="/juvenius-bannes/female.png" alt='female'/>
                <h3 className='font-semibold text-3xl text-[#2d2d3e] '>We Are Always Ready to Help You. Book An Appointment</h3>
                <p className='font-normal p-2 text-[#888a8f]'>Consult our trusted doctor for dedicated, one-on-one care tailored to your needs.</p>
            </div>
    <div className="bg-white py-5 px-4 lg:px-10 flex items-center  ">
        
      <div className="max-w-9xl mx-auto  grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Form */}
        <div>

         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              type="date"
              name="date"
              className="border border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1893bf]"
            />

            {/* Textarea spans full width */}
            <textarea
            name="message"
              placeholder="Write Your Message Here....."
              className="md:col-span-2 h-32 border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#1893bf]"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 mt-4 bg-[#1893bf] text-white px-6 py-3 rounded-md hover:bg-[#147ba1] transition"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center items-end">
          <img
            src="/juvenius-bannes/contact-img.png" // replace with your actual path
            alt="Doctors"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
    </>
  )
}
export default Form;
