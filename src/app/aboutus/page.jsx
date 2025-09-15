import React from 'react'
import Navbar from '../Components/Navbar'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import Copyright from '../Components/Copyright'

const page = () => {
  return (
    <div>
     
         <div className="flex justify-center items-start flex-col p-8 lg:px-40">
          <img src="/juvenius-bannes/female.png" alt="female" />
          <h3 className="font-semibold text-3xl text-[#1892be] ">
            Juvenis - About us
          </h3>
          </div>

          <div className='flex flex-col gap-4 px-8 text-[#747574] lg:px-40 '>
        <p>
            Juvenis Clinic in Santacruz west, Mumbai is the creation of Dr Nilesh N Goyal, a prominent dermatosurgeon trained in India, UK and USA. The clinic caters to real world skin diseases and provides solutions for dermatologic and cosmetic issues.
        </p>
        <p>
          Dr Nilesh Goyal has more than 30 years of experience in solving dermatologic diseases like psoriasis, eczema, vitiligo, lichen planus, acne, skin cancer and drug reactions. His training across the world has made him an expert in skin diseases affecting all skin types (white, brown, black and yellow). He has worked across continents getting trained in all types of dermatosurgery. He is an expert in skin cancer surgery (trained in UK).  
        </p>
        <p>
            He is also an expert cosmetic surgeon. He does hair transplant surgery (trained in Toronto, CANADA) and Liposuction surgery (+/- fat grafting) (trained in California, USA). In addition, he is an expert in scar revision surgery and acne scar surgery. Dr Nilesh Goyal is the inventor of Triple drug combination injection for Keloids and hypertrophic scars. His invention is now adopted by the world consensus on treatments for Keloids and hypertrophic scars. Dermatologists across many countries are now using this combination for their patients with keloids.
        </p>
        <p>
            Dr Nilesh Goyal has acquired training in lasers from his work in UK and USA. His experience has helped him achieve great results for his patients over decades. Juvenis Clinic has latest Fractional CO2 laser which helps in scars modification and skin rejuvenation. Patients can also avail of Pico laser for pigmentation removal and Laser hair reduction at the clinic.
        </p>
        <p>
            There is a constant endeavour to bring in newer treatments that are scientifically proven to give results. Dr Nilesh Goyal travels abroad and within India for conferences and teaching assignments. He is updated with latest developments in the world of dermatology and skin care.
        </p>
        <p>
           Dr Nilesh Goyal is the only Indian dermatologist to specialize in the manufacturing of cosmetics. He has been conferred the diploma in Cosmetic Science from the Society of Cosmetic Scientists, UK. This has led to manufacturing his own range of shampoos and conditioners which are big hit amongst his patients. Many other innovative products are in the pipeline which are aimed at improving patient outcomes. 
        </p>
        <p>
            Juvenis Clinic offers real world solutions for all skin, hair and nail diseases. It does not believe in attracting patients by online promotions. Do not fall prey to online advertisements from dermatology clinics as you will meet a dermatologists who is only interested in doing cosmetic procedures and has no knowledge of treatment of diseases.
        </p>
</div>
<div className='flex flex-col gap-4 px-8 text-[#747574] lg:px-40' >
    <h3 className="font-semibold text-3xl text-[#1892be] pt-10 ">
           Qualifications
    </h3>
    <p>MBBS – Univ of Mumbai / Topiwala National Medical College (Mumbai) – 1995.</p>
    <p>Diploma in Dermatology & Venereology (DVD) – Univ of Mumbai / LTMG Hospital (Mumbai) – 1997.</p>
    <p>DNB (Dermatology & Venereology) – National Board, New Delhi – 2001.</p>
    <p>MRCP UK – Royal College of Physicians, London – 2005.</p>
    <p>Diploma in Cosmetic Science (DCS) – Society of Cosmetic Scientists, London – 2008.</p>
</div>

<div className='flex flex-col gap-4 px-8 text-[#747574] lg:px-40' >
    <h3 className="font-semibold text-3xl text-[#1892be] pt-10 ">
           Clinical Experience
    </h3>
    <p>Residency program in Dermatology & Venereology/ HIV at LTMG Hospital, Mumbai under the guidance of Drs H R Jerajani & S T Amladi (Mar 96 – Jan 99).</p>
    <p>Clinical Attachment in Dermatology at Monklands DGH, Airdrie with Dr WS Douglas (Nov 00 – April 01).</p>
    <p>Medical Rotation in general medicine including Neurology, Gastroenterology, Diabetes, Dermatology, Genitourinary Medicine & Emergency Medicine at Royal Hallamshire Hospital, Sheffield and Chesterfield Royal Hospital (July 01 – July 05).</p>
    <p>Clinical Fellow (Registrar) in Dermatology at Northwick Park Hospital, London (Aug 05 – Feb 06).</p>
    <p>LAT Specialist Registrar in Dermatology at Royal Liverpool & Broadgreen Hospital, Liverpool (Mar 06 – Aug 07).</p>
    <p>Consultant (Locum) in Dermatology at Hope Hospital, Salford, Manchester (Feb 08 – July 08).</p>
    <p>Consultant (Locum) in Dermatology at Royal Berkshire Hospital, Reading (Aug 08 – Sept 08).</p>
    <p>Consultant Cosmetic Dermatologist at Bombay Hospital, Lilavati Hospital & Juvenis Clinic, Mumbai (Jan 09 – today).</p>
</div>   
<Form/>
<Footer/>
<Copyright/>     
    </div>
  )
}

export default page
