import { Link } from "react-router-dom";
export default function Footer() {
  const ContactData = [
    {
      location: ["Kampala, Uganda","+256 779 287 395","@info@goldsmithsoftwares.com","Thank you for visiting us"],
      hours: ["Monday - Friday: 9:00 AM - 6:00 PM","Saturday: 10:00 AM - 4:00 PM","Sundays & Holidays: Closed","Open during business hours"]
    }
  ]
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="">
      <div className="bg-blue-950">
          <div className="px-4 grid lg:flex-row lg:flex lg:justify-around md:flex-row md:flex md:justify-around gap-3 text-gray-300 pt-8">
            {/*location*/}
            <div>
              <p className="font-bold">Quick Links</p>
              {ContactData[0].location.map((location, i) =>(
                <div key={i} className="mt-1">
                  <p>{location}</p>
                </div>
              ))}
            </div>
            
            {/*links*/}
            <div>
              <p className="font-bold">Quick Links</p>
            
                <div className="mt-1">
                  <Link to="/">
                    <p onClick={scrollToTop}>Home</p>
                  </Link>
                  <Link to="/about">
                     <p onClick={scrollToTop}>About</p>
                  </Link>
                 <Link to="/services">
                     <p onClick={scrollToTop}>Services</p>
                 </Link>
                  <Link to="/blogs">
                     <p onClick={scrollToTop}>Blog</p>
                  </Link>
                  <Link to="/">
                     <p onClick={scrollToTop}>Product</p>
                  </Link>
                </div>
            
            </div>
            {/*hours*/}
            <div>
              <p className="font-bold">Working Hours</p>
              {ContactData[0].hours.map((hour, i) =>(
                <div key={i} className="mt-1">
                  <p>{hour}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <hr className="text-gray-700" />
            <p className="text-gray-300 mt-1 text-center">&copy; {new Date().getFullYear()} Goldsmith Softwares Ltd All rights reserved. </p>
          </div>
      </div>
    </section>
  );
}