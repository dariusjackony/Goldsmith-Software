import "./WhyChoose.css";
import CloudGif from "../../../assets/cloud.gif";
export default function WhyChoose(){
    return(
        <section className="why-choose-main-content">
          <span className="why-choose-title">Why Choose Us</span>
          <div className="why-choose-content-container">
            <div className="why-list-content">
                <ul className="why-list">
                    <li>Tailored technology built for your business</li>
                    <li>Professional development standards</li>
                    <li>Scalable and secure systems</li>
                    <li>Affordable solutions for African markets</li>
                    <li>Long-term maintenance and support Services</li>
                </ul>
            </div>
            <div className="why-choose-gif">
                <img src={CloudGif} className="cloud-img" />
            </div>
          </div>
        </section>
    )
}