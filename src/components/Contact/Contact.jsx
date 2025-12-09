import "./Contact.css";
export default function Contact(){
    return(
        <section className="contact-main-container">
          <div className="contact-content-container">
                    <div className="where-to-find-us">
                        <span className="contact-head">Where to find Us</span>
                        <div className="info-box">
                            <span>Kampala,Uganda</span>
                        </div>
                        <div className="info-box">
                            <span>+256 7EE GSS 000</span>
                        </div>
                        <div className="info-box">
                            <span>
                                info@goldsmithsoftwares.com
                            </span>
                        </div>
                        <div className="info-box">
                            <span>
                                Thank you for visiting us.
                            </span>
                        </div>
                    </div>
                    <div className="quick-links">
                    <span className="contact-head">Quick Links</span>
                        <div className="info-box">
                            <span>Home</span>
                        </div>
                        <div className="info-box">
                            <span>About</span>
                        </div>
                        <div className="info-box">
                            <span>
                                Services
                            </span>
                        </div>
                        <div className="info-box">
                            <span>
                                Contact
                            </span>
                        </div>
                    </div>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required /><br></br>
                        <input type="email" placeholder="Your Email" required/><br></br>
                        <textarea placeholder="Your Message" required></textarea><br></br>
                        <button className="send-btn">Send Message</button>
                    </form>
          </div>
        </section>
    )
}