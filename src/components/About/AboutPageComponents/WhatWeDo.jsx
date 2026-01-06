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
        <section className="px-4 mt-10 lg:mt-20 lg:text-center md:text-center">
            <div className="">
                <span className="text-2xl">
                    What We Do
                </span>
                <div className="mt-5 lg:flex lg:justify-center md:flex md:justify-center md:gap-6 lg:gap-8">
                    {WorkData.map((item,index) => (
                        <div className="shadow-lg p-5 rounded-lg lg:text-xl lg:max-w-[300px] md:max-w-[360px] text-gray-700" key={index}>
                            <span className="">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}