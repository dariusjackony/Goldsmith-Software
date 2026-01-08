import wpBg from "../../../assets/back.jpg";
export default function WpHero(){
    return(
        <section
  className="relative bg-cover bg-center min-h-screen text-center"
  style={{ backgroundImage: `url(${wpBg})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[300px] md:max-w-[700px] lg:max-w-[800px]">
      Clean Up Your WPForms Submissions
    </h2>
    <p className="text-gray-300 mt-4 text-sm md:text-lg lg:text-xl max-w-[250px] md:max-w-[700px] lg:max-w-[700px]">
      The Simplest way to block foreign script spam without using CAPTCHAs.
    </p>
  </div>
</section>

    )
}