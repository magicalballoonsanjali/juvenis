import React from 'react'

const page = () => {
    const images = [
  { src: "/gallery/g1.jpeg", alt: "Clinic Interior" },
  { src: "/gallery/g2.jpeg", alt: "Waiting Area" },
  { src: "/gallery/g3.jpeg", alt: "Doctor with Patient" },
  { src: "/gallery/g4.jpeg", alt: "Reception" },

];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Clinic Gallery
        </h1>
        <p className="text-center mb-12 text-gray-600">
          A glimpse of our facilities and services
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 ">
          {images.map((img, idx) => (
            <div
              key={idx}
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
    </div>
  );
}

export default page
