import AboutHero from "../../components/About/AboutPageComponents/AboutHero";
import WhatWeDo from "../../components/About/AboutPageComponents/WhatWeDo";
import VisionAndMission from "../../components/About/AboutPageComponents/VisionAndMission";
import CoreValue from "../../components/About/AboutPageComponents/CoreValue";
import WhyChoose from "../../components/About/AboutPageComponents/WhyChoose";
//import ContactInfo from "../../components/About/AboutPageComponents/ContactInfo";
export default function AboutSection(){
    return(
     <>
       <AboutHero />
       <WhatWeDo />
       <VisionAndMission />
       <CoreValue />
       <WhyChoose />
      {/* <ContactInfo /> */}
      </>
    )
}