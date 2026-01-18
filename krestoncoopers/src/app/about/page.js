import Header from "../components/Header";
import HeroAbout from "../components/HeroAbout";
import ComponentA from "../components/ComponentA";
import Mission from "../components/Mission";
import HowWeServeSection from "../components/HowServe";
import WhoWeAre from "../components/WhoWeAre";
import Ethics from "../components/Ethics";
import Network from "../components/Network";
import OurClients from "../components/OurClients";
import Discuss from "../components/Discuss";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
        <Header />
       <HeroAbout />
       <ComponentA/>
       <Mission/>
       <HowWeServeSection/>
       <Ethics/>
       <WhoWeAre/>
       <OurClients/>
       <Network/>
       <Discuss/>
         <Footer/>
    </>
  );
}
