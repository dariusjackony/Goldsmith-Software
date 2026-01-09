import CloudGif from "../../../assets/cloud.gif";

export default function WhyChoose() {
  return (
    <section className="px-5 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
  
        <h2 className="text-2xl text-center md:text-center lg:text-center mb-10 md:mb-4 lg:mb-4">
          Why Choose Us
        </h2>

        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-16">
        
          <div className="w-full lg:max-w-xl text-center lg:text-center">
            <ul className="space-y-5 md:space-y-6 text-gray-700 leading-relaxed inline-block text-left mx-auto">
              <li className="flex items-start gap-4">
                <span className="text-blue-500 mt-0.5">•</span>
                Tailored technology built specifically for your business
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-500 mt-0.5">•</span>
                Professional development standards & best practices
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-500 mt-0.5">•</span>
                Scalable, secure, and future-ready systems
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-500 mt-0.5">•</span>
                Affordable solutions designed for African markets
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-500 mt-0.5">•</span>
                Long-term maintenance & reliable support services
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={CloudGif}
              alt="Cloud technology animation"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}