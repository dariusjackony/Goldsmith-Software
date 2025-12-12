import "./About.css";
import techSoln from "../../assets/tech.webp";
import { Link } from "react-router-dom";
export default function About(){
    return(
        <section className="about-main-container">
          <div className="about-content-container">
            <div className="about-content">
              <span className="about-title">About Us</span>
              <p className="about-subtitle">
                Goldsmith is a modern tech company building custom systems that
                help businesses operate effeciently automate processes and scale.
                We design every product with precision, stability and innovation.
              </p>
              <Link to="/about">
                <button className="learn-btn">Learn More</button>
              </Link>
           </div>
           <div className="about-img">
             <img src={techSoln} className="goldsmith-abt-img" />
           </div>
          </div>
           
        </section>
    )
}