import "./CoreValue.css";
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
        <section className="core-value-main-container">
            <span className="cv-title">Core Values</span>
            <div className="core-value-content">
               {ValueData.map((item, index) => (
                <div className="cv-card" key={index}>
                    <img src={item.image} className="cv-img" />
                    <p className="cv-paragraph">
                        {item.description}
                    </p>
                </div>
               ))}
            </div>
        </section>
    )
}