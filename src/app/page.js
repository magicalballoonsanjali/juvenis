import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Content from "./Components/Content";
import Details from "./Components/Details";
import Services from "./Components/Services";
import ContactBanner from "./Components/ContactBanner";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

import Copyright from "./Components/Copyright";

export default function Home() {

  return (
   <div className="overflow-x-hidden">
    
    
    <Main />
    <Content/>
    <Details/>
    <Services/>
    <ContactBanner/>
    <Form />
    <Footer/>
    <Copyright/>

   </div>
  );
}
