import "./Footer.css";
export default function Footer(){
    return(
        <section className="footer-container">
           <div className="footer-content">
            <hr />
              <span className="ft-deta">&copy; {new Date().getFullYear()} Goldsmith Softwares Ltd. All rights reserved. </span>
           </div>
        </section>
    )
}