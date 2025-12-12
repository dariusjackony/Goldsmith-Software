import ServicesHero from "../../components/Services/ServicesPageComponents/ServicesHero";
import ServicesInfo from "../../components/About/AboutPageComponents/ServicesInfo";
import CtaSection from "../../components/Services/ServicesPageComponents/CtaSection";
import Contact from "../../components/Contact/Contact"
export default function ServicesPageSection(){
    return(
        <>
          <ServicesHero />
          <ServicesInfo />
          <CtaSection />
          <Contact />
        </>
    )
}