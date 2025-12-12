import "./ContactField.css";
export default function ContactField(){
    return(
        <section className="cf-main-container">
            <form action="" className="cf-details">
                <span className="cf-head">Talk to us today</span>
                <input type="text"  placeholder="Your Name" required/>
                <input type="text" placeholder="Your Email" required />
                <textarea name="" id="" placeholder="Your Message" required></textarea>
                <button className="cta-btn">Send Message</button>
            </form>
        </section>
    )
}