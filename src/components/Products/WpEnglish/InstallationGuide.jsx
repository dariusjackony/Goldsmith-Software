
export default function InstallationGuide(){
    return(
        <section className="px-4 mt-5 ">
            <span className="text-2xl">Installation Guide</span>
            <div className="mt-3 bg-blue-950 shadow-md text-white p-4 rounded-lg lg:max-w-[800px]">
               <p className="mt-2">✓ Upload the plugin folder to /wp-content/plugins/</p>
               <p className="mt-2">✓ Activate via the WordPress 'Plugins' menu</p>
               <p className="mt-2">✓ (Pro Only) Enter your license key in WPForms - English Only Pro</p>
               <p className="mt-2">✓ Test your form by typing non-English characters (e.g., "Привет") to see the validation in action</p>
            </div>
        </section>
    )
} 