import Button from "../../Button";
import { Link } from "react-router-dom";
export default function CtaSection(){
    return(
       <section className="px-4 mt-10 mb-5 lg:text-center md:text-center">
        <div className="">
            <div className="">
             <span className="text-2xl">Ready to Build a Powerful System For Your Business?</span>
             <p className="mt-3 text-gray-700 lg:text-xl lg:max-w-[800px] lg:m-auto md:mt-3 md:max-w-[600px] md:m-auto">
                Whether you need a website, automation software, databases, or a full custom
                system, our team is ready to turn your idea into a real solution.
             </p>
          </div>
          <div className="">
            <Link to="/contact">
             <Button>
                 Contact Us Today
             </Button>
            </Link>
          </div>
        </div>
       </section>
    )
}