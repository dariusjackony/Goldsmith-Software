export default function PricingCards() {
    const PriceData = [
        {
         head: "Lite",
         price: "Free",
         description: ["Basic Spam Protection", "Lightweight & Fast","No external data sharing","WPForms compatible"]
        },
        
    ]
    return(
       <section className="px-4 mt-5">
         <span className="text-2xl">Choose your plan</span>
         <div className="mt-5">
            {PriceData.map((item, i) =>(
              <div key={i} className="border-2 border-blue-600 p-5 rounded-lg">
                <span className="text-xl">{item.head}</span>
                <p className="text-blue-700 text-2xl mt-2">{item.price}</p>
                <div className="mt-2">
                    {item.description.map((desc, i) =>(
                        <p key={i} className="text-gray-700">✓{desc}</p>
                    ))}
                </div>
                <button
                 className="bg-gray-400 w-full mt-5 p-2 rounded-lg"
                >
                 Download Lite
                </button>
              </div>  
            ))}
             <div className="border-2 border-blue-600 p-5 rounded-lg mt-4">
                <span className="bg-blue-800 p-1 rounded-full px-[10px] py-1 text-xs text-white">most popular</span>
                <p className="text-xl mt-4">Pro</p>
                <p className="text-gray-700"><span className="text-blue-800 text-xl">$14.99</span> /one-time</p>
                <p className="text-blue-700 text-2xl mt-2"></p>
                <div className="mt-2 text-gray-700">
                    <p>✓Advanced spam filtering</p>
                    <p>✓Foreign script blocking</p>
                    <p>✓Priority support</p>
                    <p>✓Future updates included</p>
                </div>
                <button className="
                    mt-4 px-6 py-3 text-sm md:text-base font-semibold text-white
                    bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900
                    rounded-xl shadow-lg w-full
                    hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800
                    transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-blue-700 cursor-pointer"
                >
                 Get Pro
              </button>
            </div>  
         </div>
       </section>
    )
}