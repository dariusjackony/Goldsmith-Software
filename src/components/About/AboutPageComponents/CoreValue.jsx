import "./CoreValue.css";
import ExcellenceIcon from "../../../assets/excellence.svg";
export default function CoreValue(){
    const ValueData = [
        {
          description: "Innovation – Modern technologies for smarter solutions"
        },
        {
          description: "Precision – Systems engineered with care and efficiency"
        },
        {
          description: "Integrity – Transparency and honesty in all projects"
        },
        {
          description: "Customer Focus – Your goals guide our solutions"
        },
        {
          description: "Excellence – We deliver top-quality digital products"
        }
    ]
    return(
        <section className="core-value-main-container">
            <span className="cv-title">Core Values</span>
            <div className="core-value-content">
               {ValueData.map((item, index) => (
                <div className="cv-card" key={index}>
                    <img src={ExcellenceIcon} alt="" />
                    <p className="cv-paragraph">
                        {item.description}
                    </p>
                </div>
               ))}
            </div>
        </section>
    )
}