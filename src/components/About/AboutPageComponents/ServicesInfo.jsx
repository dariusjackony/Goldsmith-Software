import "./ServicesInfo.css";
import srImage from "../../../assets/about-us.gif";
export default function ServicesInfo(){
    const ServiceData = [
        {
          Image: srImage,
          title: "Custom Software Development",
          description: "Business management systems, ERP & workflow automation Inventory, sales & financial management systems, Desktop & mobile apps",
        },
        {
          Image: srImage,
          title: "Web & Mobile App Development",
          description: "Corporate websites, E-commerce systems, Android & iOS mobile apps, UI/UX design",
        },
        {
          Image: srImage,
          title: "AI & Data Solutions",
          description: "Chatbots & intelligent assistants, Predictive analytics,Machine learning systems, Computer vision",
        },
        {
          Image: srImage,
          title: "System Design & Architecture",
          description: "API development, Database design, Cloud & server infrastructure",
        },
        {
          Image: srImage,
          title: "Wordpress Design and Maintainance",
          description: "Design business websites fit to grow your business, build and maintain the websites to ensure it's up 24/7",
        },
        {
          Image: srImage,
          title: "IT Consultancy & Support",
          description: "Digital transformation consulting, Cybersecurity best practices, System maintenance",
        }
    ]
    return(
        <section className="services-info-container">
            <span className="sr-head">Services</span>
            <div className="service-info-content">
               <div className="si-content">
                  {ServiceData.map((item,index) => (
                    <div className="si-card" key={index}>
                        <div className="si-card-details">
                            <span className="si-title">{item.title}</span>
                            <p className="si-paragraph">{item.description}</p>
                        </div>
                        <div className="sr-image">
                           <img src={item.Image} className="sr-img"/>
                        </div>
                    </div>
                  ))}
               </div>
            </div>
        </section>
    )
}