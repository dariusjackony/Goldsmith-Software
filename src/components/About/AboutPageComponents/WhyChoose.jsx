import CloudGif from "../../../assets/cloud.gif";
export default function WhyChoose(){
    return(
        <section className="px-4 mt-10">
          <span className="text-2xl">Why Choose Us</span>
          <div className="mt-2 lg:flex lg:justify-between lg:items-center lg:gap-5">
            <div className=" text-gray-700">
                <p>Tailored technology built for your business.</p>
                <p>Professional development standards.</p>
                <p>Scalable and secure systems.</p>
                <p>Affordable solutions for African markets.</p>
                <p>Long-term maintenance and support Services.</p>
            </div>
            <div className="mt-2">
                <img src={CloudGif} className="lg:w-2/4 " />
            </div>
          </div>
        </section>
    )
}