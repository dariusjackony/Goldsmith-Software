import "./CtaSection.css";
import { Link } from "react-router-dom";
export default function CtaSection(){
    return(
       <section className="CtaSection-main-container">
        <div className="cta-details">
            <div className="CtaSection-content">
             <span className="cta-title">Ready to Build a Powerful System For Your Business?</span>
             <p className="cta-subtitle">
                Whether you need a website, automation software, databases, or a full custom
                system, our team is ready to turn your idea into a real solution.
             </p>
          </div>
          <div className="Cta-button">
            <Link to="/contact">
              <button className="cta-btn">
                Contact Us Today
             </button>
            </Link>
          </div>
        </div>
       </section>
    )
}