import "./WhyGSS.css";
export default function WhyGSS(){
    const WhyGSSData = [
        {
            description: 'Secure, scalable, world-class systems'
        },
        {
            description: 'Fast and professional development standards'
        },
        {
            description: 'Affordable and tailored'
        },
        {
            description: 'Long term support, training and maintenance'
        }
    ]
    return(
     <section className="whygss-main-container">
        <span className="whygss-title">Why Choose Us?</span>
        <div className="whygss-content">
          {WhyGSSData.map((item,index) =>(
            <div className="whyGSS-card">
                <p>{item.description}</p>
            </div>
          ))}
        </div>
     </section>
    )
}