import "./ContactInfo.css";
import ContactGif from "../../../assets/contactInfo.gif";
export default function ContactInfo() {
    return (
        <section className="contact-info-main-ct">
            <span className="ci-title">Contact & Working Hours</span>
             <section className="ci-content-container">
                <div className="ci-content">
                <span className="ci-subtitle">Contact</span>

                <div className="ci-details">
                    <p>Phone: +256 xxx xxx xxx</p>
                    <p>Email: info@goldsmithsoftwares.com</p>
                    <p>Location: Kampala, Uganda</p>
                </div>

                <p className="ci-message">
                    We offer project consultations and technical evaluations.
                    Send a brief message or email to schedule a call.
                </p>
                <div className="working-hours">
                    <span className="wh-head">Working Hours</span>
                    <div className="wh-details">
                        <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                        <p>Saturday: 10:00 AM – 2:00 PM</p>
                        <p>Sunday & Holidays: Closed</p>
                    </div>
               </div>
              </div>
                <div className="ci-image">
                    <img src={ContactGif} className="ci-gif"/>
                </div>
             </section>
            
        </section>
    );
}
