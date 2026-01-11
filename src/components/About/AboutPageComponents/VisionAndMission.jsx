import MissionIcon from "../../../assets/mission.svg";
export default function VisionAndMission(){
  const Data = [
    {
      icon: MissionIcon,
      title: "Vision",
      description: "To become Africa’s most trusted software innovation company delivering world-class digital solutions that transform businesses and communities."
    },
    {
      icon: MissionIcon,
      title: "Mission",
      description: "To build trusted software solutions that help African organizations grow smarter by integrating automation, cloud, AI, and modern digital infrastructure."
    },
  ]
    return(
        <section className="px-4 mt-10 lg:text-center md:text-center">
          <div className="">
              <span className="text-2xl">Vision & Mission</span>
              <div className="mt-5 lg:flex lg:justify-center lg:gap-4 md:m-auto">
                {Data.map((each, i) =>(
                  <div key={i} className="
                  bg-blue-950 text-white mt-2 p-5 shadow-lg rounded-lg flex flex-col items-center 
                   justify-center text-center lg:max-w-[500px]  md:max-w-[400px] lg:mx-0 md:mx-auto md:items-center md:mt-5
                  ">
                    <img src={each.icon} className="w-10"/>
                    <p className="mt-2">{each.description}</p>
                  </div>
                ))}
              </div>
          </div>
        </section>
    )
}