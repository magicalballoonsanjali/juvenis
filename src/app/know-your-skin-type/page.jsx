// src/app/skin-type/page.jsx
import Image from "next/image";
import React from "react";

export default function SkinTypePage() {

  return (
    <div className="bg-[#e2b284] p-5">
      <div className="flex flex-col lg:mx-40 p-10  bg-[#fff8f0]">
   
        <div className="bg-[#f8dfc5]  p-4 rounded-lg text-center mb-10">
          <h1 className="text-3xl font-bold text-stone-700 ">
            How to identify your skin type
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          {/* step 1 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 bg-white rounded-full p-4 sm:mr-8 mb-4 sm:mb-0">
              <Image
                alt="Person washing face"
                className="w-40 h-40 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLM4TuWYfqFAdhE9_eMejaFFiHqaWQhIfoxf4Y89gJKuUzDwT_bVfA1aqYE9vYGlkUTeUGwtnCp3p9uTyhMcpg1YoJ8gVu8OygjW2vbdjX-zHefg0epeATIVDFjW-20kxo2i9wGifeleD0hG8gA_NNYaFgCBpx47g0CCL5hQ98h9rkTctltj7olu0k1F8AkQSDLptk6We-kiNj6Sw3ql7Z9P_8oY9Fe4Oxv_Bi4Yq169gKF-_XTe8sIBovv7B-C11GR0kNO25vfmff"
              />
            </div>
            <div className="">
              <h2 className="text-stone-700 text-lg font-bold mb-2 ">STEP 1:</h2>
              <p className="text-gray-700 text-2xl font-semibold">
                Wash your face with a gentle cleanser and pat it dry.
              </p>
            </div>
          </div>
          {/* step2 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 bg-white rounded-full p-4 sm:mr-8 mb-4 sm:mb-0">
              <Image
                alt="Clock showing 2 hours"
                className="w-40 h-40 rounded-full object-cover"
                src="/knowyourskin-clock.png"
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
              <Image
                alt="Person patting face with finger"
                className="w-40 h-40 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnWnq6Uyr6YHZbUJ-WLAG9_AhOC8p9nh_g47TtR5v478lwZBaKAmcUMnYMpW3MlOwSUnRXCo60xjKjhkE9YHOANfuhCM8WYerZbjNhXfmH7U5P6JVhu7e2v9frEndJsPh1LPa-qHh266sYBiYfVBNDgwy38lOkQELvWo36pFtlpK8PdkdEQlfBHRjoo04f6i0yviwa4fk2ssGvEaC6LyaGOyrhISwC7P4zyQEBbQkQDQLINTC2VF_EulhPhdDS1ccuTrLAT938Y0Km"
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
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="">
          <h2 className="text-2xl font-bold text-stone-700 text-center mb-8">
           Your Skin Type Results
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Normal Skin */}
            <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
              <Image
                alt="Normal Skin"
                className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                src="/normal.jpg"
              />
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                Normal Skin
              </h3>
              <p className="text-gray-700">
                Well-balanced skin, not too oily or too dry. It has fine pores,
                a smooth texture, and no blemishes.
              </p>
            </div>

            {/* Oily Skin */}
            <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
              <Image
                alt="Oily Skin"
                className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBtQ7mXSIbsl8WmdGEK6elD-10oBKOfmUKRhMY3by8Vs7TTtd66b5z9RmfvtZ8EQqjwy0Cx9TTgOjEgXVGFX7JKo-owCDK8-mvV9bHLEr4SZrUSUVpUhADANK9oT8-JXrHbNBPteJ4Hu9zSbMBBE4b5N9tS65h7XXncZ28dMwg6A95dNmI9KMTVH0sRVSel0T99ZbDCsmOaD90Gi8fs_cTvsS6OJveIhmVWKSHstHBhdGXbsTbo-Qad9JIUdMH8ah3Uf5lWhz16S0F"
              />
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                Oily Skin
              </h3>
              <p className="text-gray-700">
                Characterized by excess sebum production, leading to a shiny
                appearance, enlarged pores, and a tendency for acne.
              </p>
            </div>

            {/* Dry Skin */}
            <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
              <Image
                alt="Dry Skin"
                className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
                src="dryskin2.webp"
              />
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                Dry Skin
              </h3>
              <p className="text-gray-700">
                Lacks moisture, feeling tight, rough, and sometimes flaky. It
                may be more prone to wrinkles and fine lines.
              </p>
            </div>

            {/* Combination Skin */}
            <div className="bg-white/80 p-6 rounded-lg flex flex-col items-center text-center">
              <Image
                alt="Combination Skin"
                className="w-40 h-40 object-cover rounded-full mb-4 shadow-md "
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdksVSp1HyMQq05EWX1FEetqD3Qp_egzgZZDnID8FRlqahHXyrzFr_J9OD969VO9_kUK1dR4bp_QwM_fClIahsh0kSDPk2QgPJuBG9LqIBBGBGXV8ePmvKFJmxmseCGfsSQgm_-v5xzwCPuJmsok0gZYLojdPKkdXhZBExW3-GJgwF98VruaX3pe9GKDdDDka9HHkhZLUO2btdZ6a_DtCoIs4C3qsZ7ZWrSkSOaFvZHjy_Qk9PuRx-ZFykZ326Su3cw8CY_3TNAQ0D"
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

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-stone-600">
            Disclaimer: This guide is for informational purposes only. For an
            accurate diagnosis and personalized advice, please consult a
            dermatologist.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
