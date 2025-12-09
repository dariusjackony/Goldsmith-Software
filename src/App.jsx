import Navbar from "./components/Navbar/Navbar"
import HeroPage from "./pages/Hero/HeroPage"
import AboutPage from "./pages/About/AboutPage";
import VisionMIssionPage from "./pages/VisionMission/VisionMissionPage";
import ServicesPage from "./pages/Services/ServicesPage";
import WhyGSSPage from "./pages/WhyGSS/WhyGSSPage";
import ContactPage from "./pages/Contact/ContactPage";
export default function App(){
  return(
    <>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <VisionMIssionPage />
      <ServicesPage />
      <WhyGSSPage />
      <ContactPage />
    </>
  )
}