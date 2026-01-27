import Header from "../components/Header";
import Hero3 from "../components/hero3";
import Footer from "../components/Footer";
import Why from "../components/Why";
import Our from "../components/Our";
import How from "../components/How";
import Proff from "../components/Proff";

import ContactNow from "../components/Contacnow";
export default function Home() {
  return (
    <>
        <Header />
        <Hero3/>
        
        <Our/>
        <How/>
        <Proff/>
       
        <ContactNow/>
         <Footer/>
    </>
  );
}