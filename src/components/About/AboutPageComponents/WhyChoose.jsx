import CloudGif from "../../../assets/cloud.gif";
export default function WhyChoose(){
    return(
        <section className="px-4 mt-10">
          <span className="text-2xl">Why Choose Us</span>
          <div className="mt-5 lg:flex lg:justify-center lg:items-center lg:gap-5">
            <div className=" text-gray-700">
                <ul className="mt-2">
                    <li>Tailored technology built for your business.</li>
                    <li>Professional development standards.</li>
                    <li>Scalable and secure systems.</li>
                    <li>Affordable solutions for African markets.</li>
                    <li>Long-term maintenance and support Services.</li>
                </ul>
            </div>
            <div className="mt-2">
                <img src={CloudGif} className="lg:w-2/3 h-auto" />
            </div>
          </div>
        </section>
    )
}