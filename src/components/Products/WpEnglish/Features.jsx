export default function Features() {
    const Data = [
        {
          title: "Lightweight",
          description: "Less than 10kb of code. Won't slow down your site",
        },
        {
          title: "Privacy Focused",
          description: "No user data is sent to external servers",
        },
        {
          title: "Developer Friendly",
          description: "Built specifically for the WPForms ecosystem using official hooks",
        },
    ]
    return(
       <section className="px-4 mt-5 lg:text-center md:text-center">
        <span className="text-2xl">Features</span>
        <div className="mt-3 lg:flex lg:justify-center lg:gap-2 md:flex md:justify-center md:gap-2">
            {Data.map((each, i) =>(
                <div key={i} className="mt-2 p-3 shadow-lg rounded-lg lg:max-w-[400px] md:max-w-[230px]">
                    <p className="lg:text-xl">{each.title}</p>
                    <p className="mt-2 text-gray-700">{each.description}</p>
                </div>
            ))}
        </div>
       </section>
    )
}