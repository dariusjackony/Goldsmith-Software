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
     <section className="text-center mt-10 px-4">
        <span className="text-2xl">Why Choose Us?</span>
        <div className="mt-5 mb-4">
          {WhyGSSData.map((item,index) =>(
            <div className="bg-blue-950 mt-2 rounded-lg md:max-w-[500px] md:m-auto md:mt-2">
                <p className="text-gray-700 p-2 lg:p-5 lg:text-xl text-white">{item.description}</p>
            </div>
          ))}
        </div>
     </section>
    )
}