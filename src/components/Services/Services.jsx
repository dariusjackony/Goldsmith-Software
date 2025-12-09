import "./Services.css";
export default function Services(){
    const ServiceData = [
        {
            title: 'Custom Software Development',
            description: 'ERP systems, inventory tools, automation workflows, desktop & mobile solution'
        },
        {
            title: 'Web & Mobile Apps',
            description: 'Corporate websites, e-commerce platforms, Android/IOS apps, UI/UX design'
        },
        {
            title: 'AI & Data Solutions',
            description: 'Chatbots, predictive analytics, machine learning,automation systems'
        },
        {
            title: 'System Design & Architecture',
            description: 'API development, database design, cloud infrastructure planning'
        }
    ]
    return(
        <section className="services-main-container">
           <div className="services-content-container">
             <span className="service-title">Our Services</span>
             <div className="service-content">
                {ServiceData.map((item,index) =>(
                    <div className="service-card" key={index}>
                        <p className="service-subtitle">{item.title}</p>
                        <p className="service-description">{item.description}</p>
                    </div>
                ))}
             </div>
           </div>
        </section>
    )
}