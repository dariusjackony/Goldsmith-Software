import ExcellenceIcon from "../../../assets/excellence.png";
import Inovation from "../../../assets/innovation.png";
import Integrity from "../../../assets/integrity.png";
import Precision from "../../../assets/precision.png";
import customer from "../../../assets/customer.png";
export default function CoreValue(){
    const ValueData = [
        {
          image: Inovation,
          description: "Innovation – Modern technologies for smarter solutions"
        },
        {
          image: Precision ,
          description: "Precision – Systems engineered with care and efficiency"
        },
        {
          image: Integrity,
          description: "Integrity – Transparency and honesty in all projects"
        },
        {
          image: customer ,
          description: "Customer Focus – Your goals guide our solutions"
        },
        {
          image:ExcellenceIcon ,
          description: "Excellence – We deliver top-quality digital products"
        }
    ]
    return(
        <section className="px-4 mt-10 lg:text-center md:text-center">
            <span className="text-2xl">Core Values</span>
            <div className="mt-5 lg:flex-row lg:flex lg:gap-5 lg:flex-wrap md:flex md:gap-2 md:flex-wrap ">
               {ValueData.map((item, index) => (
                <div className="flex flex-col items-center justify-center text-center
                 shadow-2xl p-5 rounded-lg lg:m-auto lg:max-w-[400px] lg:mt-5 md:m-auto md:max-w-[340px]
                " key={index}>
                    <img src={item.image} className="w-10" />
                    <p className="mt-3 text-gray-700">
                        {item.description}
                    </p>
                </div>
               ))}
            </div>
        </section>
    )
}