import "./Services.css";
import Tablet from "../../assets/code.png";
import boxes from "../../assets/boxes.png";
import star from "../../assets/star.png";
import desktop from "../../assets/tablet.png";
export default function Services(){
    const ServiceData = [
        {
            image: Tablet,
            title: 'Custom Software Development',
            description: 'ERP systems, inventory tools, automation workflows, desktop & mobile solution.'
        },
        {   
            image: boxes,
            title: 'Web & Mobile Apps',
            description: 'Corporate websites, e-commerce platforms, Android/IOS apps, UI/UX design.'
        },
        {
            image: star,
            title: 'AI & Data Solutions',
            description: 'Chatbots, predictive analytics, machine learning,automation systems.'
        },
        {
            image: desktop,
            title: 'System Design & Architecture',
            description: 'API development, database design, cloud infrastructure planning.'
        }
    ]
    return(
        <section className="services-main-container">
           <div className="services-content-container">
             <span className="service-title">Our Services</span>
             <div className="service-content">
                {ServiceData.map((item,index) =>(
                    <div className="service-card" key={index}>
                        <img src={item.image}  className="service-img"/>
                        <p className="service-subtitle">{item.title}</p>
                        <p className="service-description">{item.description}</p>
                    </div>
                ))}
             </div>
           </div>
        </section>
    )
}