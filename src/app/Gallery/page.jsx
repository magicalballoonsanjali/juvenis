'use client'
import React, { useState } from 'react'

const page = () => {
    const images = [
  { src: "/gallery/g1.jpeg", alt: "Clinic Interior" },
  { src: "/gallery/g2.jpeg", alt: "Waiting Area" },
  { src: "/gallery/g3.jpeg", alt: "Doctor with Patient" },
  { src: "/gallery/g4.jpeg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Arms-liposuction-3-weeks.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Axillary-fat-pad-Liposuction.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/BCC on cheek excision and Flap closure.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Ear keloid triple combination and surgery.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Fat filling 38ml in young female.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Fat filling of face 35mls in young man.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Fat filling of face 40mls front view.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Fat Grafting 50mls 3rd day post op.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Frontal hairline restored with FUE HT.jpg", alt: "Reception" },

  { src: "/Juvenis-images-compress/FUE HT 1200 grafts to fronatl area.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Full face fat filling 40mls.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Grade 3 MPHL FUE HT 9 months.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Gynecomastia-Liposuction-3-weeks.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Hair regrowth within 2 months in 64 yr old diabetic (1).jpg", alt: "Reception" },

  { src: "/Juvenis-images-compress/HT young man 6 months.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Keloid CABG triple combination 3 sessions.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/2.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Liposuction abdomen right side view.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Morphea right face and forehead 2 sessions.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Multiple warts on shin treated with 5FU 2 sessions.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/SCC on back excised and primary closure.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Thread lift 39 yr old.jpg", alt: "Reception" },
  { src: "/Juvenis-images-compress/Thread lift 42 yr old.jpg" },
  { src: "/Juvenis-images-compress/Thread lift 46 yr old.jpg" },
  { src: "/Juvenis-images-compress/Thread lift and fat filling of face 61 yr old.jpg" },
  { src: "/Juvenis-images-compress/Thread lift cheeks and jowls 63 yr old on MTx .jpg" },
  { src: "/Juvenis-images-compress/Vitiligo repigmentation FUE pubic hair.jpg" },
  { src: "/Juvenis-images-compress/Lower-back-liposuction-4-ltrs-removed-01.jpg" },
  { src: "/Juvenis-images-compress/WhatsApp Image 2025-09-12 at 7.23.16 PM.jpeg" },

  

];
const [selectedImage, setSelectedImage] = useState(null)

  const handleClick = (img) => setSelectedImage(img)
  const handleClose = () => setSelectedImage(null)
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
         Our Patient Result
        </h1>
        {/* <p className="text-center mb-12 text-gray-600">
          A glimpse of our facilities and services
        </p> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 ">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={()=> handleClick(img)}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition shadow-gray-400"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 "
              />
            </div>
          ))}
        </div>
      </div>

          {selectedImage && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <div className="relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 font-bold hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default page
