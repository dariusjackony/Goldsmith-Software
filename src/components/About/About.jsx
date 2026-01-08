import Button from "../Button";
import techSoln from "../../assets/tech.webp";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="px-4 mt-10">
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center lg:gap-10 md:flex-row  md:justify-between md:items-center md:gap-10 ">
        <div className="md:text-center lg:text-left lg:w-2/3 md:text-left  md:ml-18 lg:ml-48">
          <span className="text-2xl">About Us</span>
          <p className="mt-2 text-gray-700 ">
            Goldsmith is a modern tech company building custom systems that
            help businesses operate efficiently, automate processes, and scale.
            We design every product with precision, stability, and innovation.
          </p>
          <Link to="/about">
            <Button className="mt-4">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="mt-5 ">
          <img src={techSoln} className="w-full lg:w-2/3 h-auto" />
        </div>

      </div>
    </section>
  );
}
