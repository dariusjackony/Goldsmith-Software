
export default function Button( {children} ){
    return (
        <button className="
            mt-4 px-6 py-3 text-sm md:text-base font-semibold text-white
            bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900
            rounded-xl shadow-lg
            hover:from-blue-800 hover:via-blue-700 hover:to-indigo-800
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-700 cursor-pointer"
        >
            {children}
       </button>
    )
}