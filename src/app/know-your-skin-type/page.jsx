// src/app/skin-type/page.jsx
import React from "react";

export default function SkinTypePage() {
  return (
    <div className="bg-[#e2b284] p-5">
      <div className="bg-[#fff8f3] text-[#3a2e25] px-6 md:px-12 py-12 max-w-5xl mx-auto rounded-xl shadow-md space-y-8">
  {/* Section Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-[#a77f5b] text-center">
    Discover Your Skin Type
  </h2>

  {/* Paragraph 1 */}
  <p className="text-lg leading-relaxed">
    The trick to having a great skin is to know your skin type. This can help
    in buying and using products that suit your skin and give the best results.
  </p>

  {/* Paragraph 2 */}
  <p className="text-lg leading-relaxed">
    <span className="font-semibold">Dr. Leslie Baumann</span> from Miami,
    Florida, USA has conceptualized and described the{' '}
    <span className="font-semibold">16 different skin types</span> across the
    world. She has divided the entire human population into these skin types
    based on an extensive questionnaire. These types are categorized using 4
    subgroups:
    <br />
    <span className="block mt-2 ml-4">
      • <span className="font-medium">Oily vs Dry</span>
    </span>
    <span className="block ml-4">
      • <span className="font-medium">Sensitive vs Resistant</span>
    </span>
    <span className="block ml-4">
      • <span className="font-medium">Wrinkled vs Tight</span>
    </span>
    <span className="block ml-4">
      • <span className="font-medium">Pigmented vs Nonpigmented</span>
    </span>
  </p>

  {/* Paragraph 3 */}
  <p className="text-lg leading-relaxed">
    Knowing your skin type helps avoid the purchase of expensive products that
    may not suit your skin. Using unsuitable products can lead to issues like
    acne, pigmentation, and rashes. It can also cause increased sensitivity to
    certain ingredients.
  </p>

  {/* Paragraph 4 */}
  <p className="text-lg leading-relaxed">
    At <span className="font-semibold text-[#a77f5b]">Juvenis Clinic</span>, Dr.
    Nilesh Goyal — trained at the Baumann Cosmetic Research Institute in Miami —
    assists patients in identifying the right skincare products. Choosing the
    right product depends on factors like age, gender, daily routine, sun
    exposure, and local weather, in addition to your skin type.
  </p>

  {/* Paragraph 5 */}
  <p className="text-lg leading-relaxed">
    Juvenis Clinic offers a wide range of skincare products tailored to your
    unique skin type and lifestyle. You can explore and purchase them through
    our official website at{' '}
    <a
      href="https://magicalballoonsdigital.com/juvenis-ecommerce" // Replace with your actual link
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#a77f5b] underline hover:text-[#8a684a]"
    >
      www.juvenis/innovation.in
    </a>
    .
  </p>
</div>

      <div className="flex flex-col lg:mx-40 p-10  bg-[#fff8f0] my-5">
        <div className="bg-[#f8dfc5]  p-4 rounded-lg text-center mb-10">
          <h1 className="text-3xl font-bold text-stone-700 ">
            How to identify your skin type
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          {/* step 1 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 bg-white rounded-full p-4 sm:mr-8 mb-4 sm:mb-0">
              <img
                alt="Person washing face"
                className="w-40 h-40 rounded-full object-cover"
                src="/skin/washingface.png"
              />
            </div>
            <div className="">
              <h2 className="text-stone-700 text-lg font-bold mb-2 ">
                STEP 1:
              </h2>
              <p className="text-gray-700 text-2xl font-semibold">
                Wash your face with a gentle cleanser and pat it dry.
              </p>
            </div>
          </div>
          {/* step2 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 bg-white rounded-full p-4 sm:mr-8 mb-4 sm:mb-0">
              <img
                alt="Clock showing 2 hours"
                className="w-40 h-40 rounded-full object-cover"
                src="/skin/clock.png"
              />
            </div>
            <div>
              <h2 className="text-stone-700 text-lg font-bold mb-2">STEP 2:</h2>
              <p className="text-gray-700 text-2xl font-semibold">
                Do not use any products on your face and wait for 2 hours in a
                non-air-conditioned room.
              </p>
            </div>
          </div>
          {/* step-3 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 bg-white rounded-full p-4 sm:mr-8 mb-4 sm:mb-0">
              <img
                alt="Person patting face with finger"
                className="w-40 h-40 rounded-full object-cover"
                src="/skin/tappingface.png"
              />
            </div>
            <div>
              <h2 className="text-stone-700 text-lg font-bold mb-2">STEP 3:</h2>
              <p className="text-gray-700 text-2xl font-semibold">
                After waiting, take tissue paper or your finger and pat it on
                different parts of your face.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-15 pb-16 bg-[#e2b284] min-h-screen">
        {/* <div className="max-w-6xl mx-auto px-4">
         
          <div className="">
            <h2 className="text-2xl font-bold text-stone-700 text-center mb-8">
              Your Skin Type Results
            </h2>

         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
              <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
                <img
                  alt="Normal Skin"
                  className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                  src="/skin/normal.jpg"
                />
                <h3 className="text-xl font-bold text-stone-700 mb-2">
                  Normal Skin
                </h3>
                <p className="text-gray-700">
                  Well-balanced skin, not too oily or too dry. It has fine
                  pores, a smooth texture, and no blemishes.
                </p>
              </div>

      
              <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
                <img
                  alt="Oily Skin"
                  className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                  src="/skin/oilyskin.png"
                />
                <h3 className="text-xl font-bold text-stone-700 mb-2">
                  Oily Skin
                </h3>
                <p className="text-gray-700">
                  Characterized by excess sebum production, leading to a shiny
                  appearance, enlarged pores, and a tendency for acne.
                </p>
              </div>

           
              <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
                <img
                  alt="Dry Skin"
                  className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                  src="/skin/dryskin2.webp"
                />
                <h3 className="text-xl font-bold text-stone-700 mb-2">
                  Dry Skin
                </h3>
                <p className="text-gray-700">
                  Lacks moisture, feeling tight, rough, and sometimes flaky. It
                  may be more prone to wrinkles and fine lines.
                </p>
              </div>

             
              <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
                <img
                  alt="Combination Skin"
                  className="w-40 h-40 object-cover rounded-full mb-4 shadow-md "
                  src="/skin/combinationskin.png"
                />
                <h3 className="text-xl font-bold text-stone-700 mb-2">
                  Combination Skin
                </h3>
                <p className="text-gray-700">
                  A mix of oily and dry areas. Typically, the T-zone (forehead,
                  nose, chin) is oily, while the cheeks are dry or normal.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-stone-600">
              Disclaimer: This guide is for informational purposes only. For an
              accurate diagnosis and personalized advice, please consult a
              dermatologist.
            </p>
          </div>
        </div> */}

        <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div>
          <h2 className="text-3xl font-bold text-stone-700 text-center mb-8">
            The 4 Skin-Type Subgroups
          </h2>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {/* Oily vs Dry */}
            <div className="bg-white/80 w-full md:w-[45%] p-8 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
              <img
                alt="Oily vs Dry skin spectrum"
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#f8dfc5] shadow-md"
                src="skin/3.jpg" 
              />
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                Oily vs Dry
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Differentiates between skin that produces excess sebum (oily) and skin lacking moisture (dry). This subgroup is foundational in the Baumann classification.
              </p>
            </div>

            {/* Sensitive vs Resistant */}
            <div className="bg-white/80 w-full md:w-[45%] p-8 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
              <img
                alt="Sensitive vs Resistant skin reaction"
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#f8dfc5] shadow-md"
                src="skin/1.jpg"
              />
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                Sensitive vs Resistant
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Indicates whether your skin reacts easily with redness, irritation or discomfort (sensitive) or tolerates products and environmental stressors better (resistant).
              </p>
            </div>

            {/* Wrinkled vs Tight */}
            <div className="bg-white/80 w-full md:w-[45%] p-8 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
              <img
                alt="Wrinkled vs Tight skin"
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#f8dfc5] shadow-md"
                src="skin/2.jpg" 
              />
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                Wrinkled vs Tight
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Describes whether skin shows signs of aging like fine lines, sagging or loss of firmness (wrinkled) versus being more firm, elastic and smooth (tight).
              </p>
            </div>

            {/* Pigmented vs Nonpigmented */}
            <div className="bg-white/80 w-full md:w-[45%] p-8 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
              <img
                alt="Pigmented vs Non-Pigmented skin tones"
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#f8dfc5] shadow-md"
                src="skin/4.jpg" 
              />
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                Non-Pigmented vs Pigmented 
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Identifies whether skin tends to develop uneven coloration, dark spots, freckles, or melasma (pigmented) or maintains more even tone with minimal discoloration (non-pigmented).
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs md:text-sm text-stone-600 italic">
            Disclaimer: This overview explains the Baumann skin‐type subgroups for informational purposes only. For an accurate diagnosis and personalized advice, please consult a dermatologist.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
