import Navbar from "./components/Navbar/Navbar"
import HeroPage from "./pages/Hero/HeroPage"
import AboutPage from "./pages/About/AboutPage";
import VisionMIssionPage from "./pages/VisionMission/VisionMissionPage";
import ServicesPage from "./pages/Services/ServicesPage";
import WhyGSSPage from "./pages/WhyGSS/WhyGSSPage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutSection from "./pages/About/AboutSection";
import ServicesPageSection from "./pages/Services/ServicesPageSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroPage />
            <AboutPage />
            <VisionMIssionPage />
            <ServicesPage />
            <WhyGSSPage />
            <ContactPage />
          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesPageSection />} />
      </Routes>
    </BrowserRouter>
  )
}