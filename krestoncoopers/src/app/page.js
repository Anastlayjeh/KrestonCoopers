import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChoseUs";
import ReadyTo from "./components/ReadyTo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection/>
      <OurServices/>
      <WhyChooseUs/>
      <ReadyTo/>
      <Footer/>
    </>
  );
}
