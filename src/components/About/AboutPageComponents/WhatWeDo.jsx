import "./WhatWeDo.css";

export default function WhatWeDo(){
    const WorkData = [
        {
          title: "Custom software & business management systems",
          description: "Business management systems ERP & workflow automation inventory, sales & financial management."
        },
         {
          title: "Web and mobile application development",
          description: "Business management systems ERP & workflow automation inventory, sales & financial management."
        },
         {
          title: "AI-powered tools and automation systems",
          description: "Business management systems ERP & workflow automation inventory, sales & financial management."
        },
         {
          title: "Future-focused IoT systems",
          description: "Business management systems ERP & workflow automation inventory, sales & financial management."
        }
    ]
    return(
        <section className="what-we-do-main-container">
            <div className="what-we-do-content">
                <span className="wwd-head">
                    What We Do
                </span>
                <div className="wwd-content-container">
                    {WorkData.map((item,index) => (
                        <div className="wwd-card" key={index}>
                            <span className="wwd-title">
                                {item.title}
                            </span>
                            <p className="wwd-paragraph">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}