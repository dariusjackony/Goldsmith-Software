import Button from "../../Button";
import { Link } from "react-router-dom";
export default function CtaSection(){
    return(
       <section className="px-4 mt-10 mb-5">
        <div className="">
            <div className="">
             <span className="text-2xl">Ready to Build a Powerful System For Your Business?</span>
             <p className="mt-3 text-gray-700">
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