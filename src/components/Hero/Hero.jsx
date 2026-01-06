import HeroBg from "../../assets/hero.webp";
import { Link } from "react-router-dom";
import Button from "../Button";
export default function Hero() {
    return(
        <section className=" relative h-[65vh] lg:h-[90vh] md:h-[45vh] lg:text-center  md:text-center bg-cover bg-center "
         style={{backgroundImage: `url(${HeroBg})`}}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative pt-40 lg:pt-45 px-4 r" >
                <h1 className="text-4xl text-white max-w-[300px] md:max-w-[700px] md:text-center md:text-5xl lg:max-w-[800px] lg:text-6xl lg:m-auto font-bold">
                   <span className="text-5xl lg:text-6xl md:text-5xl">Goldsmith </span>Softwares Ltd
                </h1>
                <p className="text-gray-300 mt-2 max-w-[250px] lg:max-w-[700px] lg:mt-3 lg:text-xl lg:m-auto md:max-w-[700px] md:m-auto md:mt-5">
                    Crafting digital solutions and precisions
                </p>
                <Link to="/contact">
                    <Button>Get Started </Button>
                </Link>
            </div>
        </section>
    )
}