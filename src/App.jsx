import Navbar from "./components/Navbar/Navbar"
import HeroPage from "./pages/Hero/HeroPage"
import AboutPage from "./pages/About/AboutPage";
import VisionMIssionPage from "./pages/VisionMission/VisionMissionPage";
import ServicesPage from "./pages/Services/ServicesPage";
import WhyGSSPage from "./pages/WhyGSS/WhyGSSPage";
import AboutSection from "./pages/About/AboutSection";
import ServicesPageSection from "./pages/Services/ServicesPageSection";
import ContactSectionPage from "./pages/Contact/ContactSectionPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailPage from "./pages/Blog/BlogDetailPage";
import Footer from "./components/Footer/Footer";
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
          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesPageSection />} />
        <Route path="/contact" element={<ContactSectionPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}