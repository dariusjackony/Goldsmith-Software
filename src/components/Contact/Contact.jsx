import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="contact-main-container">
      <div className="contact-content-container">
        <div className="where-to-find-us">
          <span className="contact-head">Where to find Us</span>
          <div className="info-box">
            <span>Kampala, Uganda</span>
          </div>
          <div className="info-box">
            <span>+256 779 287 395</span>
          </div>
          <div className="info-box">
            <span>info@goldsmithsoftwares.com</span>
          </div>
          <div className="info-box">
            <span>Thank you for visiting us.</span>
          </div>
        </div>

        <div className="quick-links">
          <span className="contact-head">Quick Links</span>
          <div className="info-box">
            <Link to="/" className="footer-link" onClick={scrollToTop}>
              <span>Home</span>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/about" className="footer-link" onClick={scrollToTop}>
              <span>About</span>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/services" className="footer-link" onClick={scrollToTop}>
              <span>Services</span>
            </Link>
          </div>
          <div className="info-box">
            <Link to="/contact" className="footer-link" onClick={scrollToTop}>
              <span>Contact</span>
            </Link>
          </div>
        </div>

        <div className="working-hours">
          <span className="contact-head">Working Hours</span>
          <div className="info-box">
            <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
          </div>
          <div className="info-box">
            <span>Saturday: 10:00 AM - 4:00 PM</span>
          </div>
          <div className="info-box">
            <span>Sundays & Holidays: Closed</span>
          </div>
          <div className="info-box">
            <span>Open during business hours.</span>
          </div>
        </div>
      </div>
    </section>
  );
}