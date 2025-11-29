import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChoseUs";
import ReadyTo from "./components/ReadyTo";
import Footer from "./components/Footer";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
       <Awards/>
      <AboutSection/>
      <OurServices/>
      <WhyChooseUs/>
      <ReadyTo/>
      <Footer/>
    </>
  );
}
