import "./WhatWeDo.css";

export default function WhatWeDo(){
    const WorkData = [
        {
          title: "Custom software & business management systems"
        },
         {
          title: "Web and mobile application development"
         },
         {
          title: "AI-powered tools and automation systems"
        },
         {
          title: "Future-focused IoT systems for agriculture and smart operations"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}