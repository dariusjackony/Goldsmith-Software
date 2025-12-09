import "./About.css";
import techSoln from "../../assets/tech.webp";
export default function About(){
    return(
        <section className="about-main-container">
          <div className="about-content-container">
            <div className="about-content">
              <span className="about-title">About Us</span>
              <p className="about-subtitle">
                Goldsmith is a moderntech company building custom systems that
                help businesses operate effeciently automate processes and scale.
                We design every product with precision, stability and innovation.
              </p>
           </div>
           <div className="about-img">
             <img src={techSoln} className="goldsmith-abt-img" />
           </div>
          </div>
           
        </section>
    )
}