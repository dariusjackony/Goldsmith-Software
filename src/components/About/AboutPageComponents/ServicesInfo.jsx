import "./ServicesInfo.css";
import aiDev from "../../../assets/ai-dev.jpg";
import ItSupport from "../../../assets/it-support.jpg";
import mobileDev from "../../../assets/mobile-and-web-dev.jpg";
import SoftwareDev from "../../../assets/software-dev.jpg";
import systemDev from "../../../assets/sys-dev.jpg";
import wordPress from "../../../assets/wordpress.jpg";
export default function ServicesInfo(){
    const ServiceData = [
        {
          Image: SoftwareDev,
          title: "Custom Software Development",
          description: "Business management systems, ERP & workflow automation Inventory, sales & financial management systems, Desktop & mobile apps",
          tags: ["ERP", "Workflow Automation", "Inventory", "Desktop Apps", "Mobile Apps"]
        },
        {
          Image: mobileDev,
          title: "Web & Mobile App Development",
          description: "Corporate websites, E-commerce systems, Android & iOS mobile apps, UI/UX design",
          tags: ["Web Apps", "Mobile Apps", "E-commerce", "UI/UX", "Responsive Design"]
        },
        {
          Image: aiDev,
          title: "AI & Data Solutions",
          description: "Chatbots & intelligent assistants, Predictive analytics,Machine learning systems, Computer vision",
          tags: ["AI", "Machine Learning", "Data Analytics", "Chatbots", "Computer Vision"]

        },
        {
          Image: systemDev,
          title: "System Design & Architecture",
          description: "API development, Database design, Cloud & server infrastructure",
          tags: ["APIs", "Databases", "Cloud", "Microservices", "Scalability"]

        },
        {
          Image: wordPress,
          title: "Wordpress Design and Maintainance",
          description: "Design business websites fit to grow your business, build and maintain the websites to ensure it's up 24/7",
          tags: ["WordPress", "Elementor", "SEO", "Speed Optimization", "Maintenance"]
        },
        {
          Image: ItSupport,
          title: "IT Consultancy & Support",
          description: "Digital transformation consulting, Cybersecurity best practices, System maintenance",
          tags: ["Cloud Support", "IT Support", "System Monitoring"] 
        }
    ]
    return(
        <section className="services-info-container">
            <span className="sr-head">Our Expertise Areas</span>
            <div className="service-info-content">
               <div className="si-content">
                  {ServiceData.map((item,index) => (
                    <div className="si-card" key={index}>
                        <div className="si-card-details">
                            <span className="si-title">{item.title}</span>
                            <p className="si-paragraph">{item.description}</p>
                            <div className="si-tags">
                              {item.tags.map((tag, index) => (
                                  <span className="tag" key={index}>{tag}</span>
                              ))}
                          </div>
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