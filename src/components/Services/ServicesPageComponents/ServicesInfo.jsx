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
    return (
    <section className="px-4 mt-10 ">
      <p className="text-2xl lg:text-center lg:m-auto md:text-center md:m-auto">Our Expertise Areas</p>
      <div className="mt-5 flex flex-col lg:flex-row lg:flex-wrap lg:gap-6">
        {ServiceData.map((item, index) => (
          <div
            key={index}
            className="mt-4 bg-blue-950 text-white p-5 rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-center lg:justify-between
             lg:max-w-[1000px] lg:m-auto"
          >
            <div className="lg:w-2/3">
              <span className="font-bold lg:text-xl">{item.title}</span>
              <p className="mt-1 text-gray-200">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* Tags*/}
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className=" px-3 py-1 rounded-full bg-blue-850 border border-amber-100 hover:bg-blue-800 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-2/7 lg:ml-4">
              <img
                src={item.Image}
                alt={item.title}
                className="w-full hidden lg:block rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}