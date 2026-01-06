import Tablet from "../../assets/code.png";
import boxes from "../../assets/boxes.png";
import star from "../../assets/star.png";
import desktop from "../../assets/tablet.png";
export default function Services(){
    const ServiceData = [
        {
            image: Tablet,
            title: 'Custom Software Development',
            description: 'ERP systems, inventory tools, automation workflows & apps.'
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
        <section className="px-4 mt-10 text-center">
           <div className="">
             <span className="text-2xl">Our Services</span>
             <div className="lg:flex lg:flex-row lg:justify-center lg:text-center lg:text-xl lg:gap-2 md:flex-row md:text-center md:flex-col">
                {ServiceData.map((item,index) =>(
                    <div className="  mt-8 shadow-lg p-5 rounded-lg flex flex-col  items-center text-center
                    md:max-w-[500px] md:m-auto md:mt-5  lg:max-w-[300px] 
                    " 
                    key={index}>
                        <img src={item.image}  className="w-10"/>
                        <p className="mt-3">{item.title}</p>
                        <p className="mt-1 text-gray-700">{item.description}</p>
                    </div>
                ))}
             </div>
           </div>
        </section>
    )
}