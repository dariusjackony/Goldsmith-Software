import VisionMissionImg from "../../assets/white.gif";

export default function VisionMission() {
  return (
    <section className="px-4 mt-10">
      <div className="flex flex-col-reverse sm:flex-col md:flex-col md:items-center lg:flex-row md:justify-center md:items-center md:flex-row lg:justify-center lg:items-center">
        <div className="mb-6 md:mb-4 lg:mb-0 lg:mr-10 flex justify-center lg:justify-center">
          <img
            src={VisionMissionImg}
            className="w-full lg:w-3/4 h-auto"
          />
        </div>
        <div className="md:text-center lg:text-left md:text-left">
          <div>
            <p className="text-2xl ">Our Vision</p>
            <p className="mt-2 text-gray-700 lg:w-2/3 ">
              To become Africa's most trusted software innovation company shaping
              smarter businesses through intelligent technology.
            </p>
          </div>

          <div className="mt-5">
            <p className="text-2xl ">Our Mission</p>
            <p className="mt-2 text-gray-700 ">
              Deliver high-quality, scalable, and secure systems.
            </p>
            <p className="mt-2 text-gray-700">
              Empower organization with automation and data-driven tools.
            </p>
            <p className="mt-2 text-gray-700">
              Provide affordable digital solutions for African businesses.
            </p>
            <p className="mt-2 text-gray-700">
              Integrate AI, IoT, and cloud into modern digital infrastructure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
