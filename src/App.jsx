import Navbar from "./components/Navbar/Navbar"
import HeroPage from "./pages/Hero/HeroPage"
import AboutPage from "./pages/About/AboutPage";
import VisionMIssionPage from "./pages/VisionMission/VisionMissionPage";
import ServicesPage from "./pages/Services/ServicesPage";
import WhyGSSPage from "./pages/WhyGSS/WhyGSSPage";
import ContactPage from "./pages/Contact/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroPage />
            <VisionMIssionPage />
            <ServicesPage />
            <WhyGSSPage />
            <ContactPage />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}