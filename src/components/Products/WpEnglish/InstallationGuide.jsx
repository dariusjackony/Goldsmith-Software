
export default function InstallationGuide(){
    return(
        <section className="px-4 mt-5 lg:flex lg:justify-center md:flex md:justify-center mb-5">
            <div>
                <span className="text-2xl lg:text-center lg:block md:text-center md:block">Installation Guide</span>
                <div className="mt-3 bg-blue-950 shadow-md text-white p-4 lg:p-6 lg:mt-5 rounded-lg lg:max-w-[800px]">
                    <p className="mt-2">✓ Upload the plugin folder to /wp-content/plugins/</p>
                    <p className="mt-2">✓ Activate via the WordPress 'Plugins' menu</p>
                    <p className="mt-2">✓ (Pro Only) Enter your license key in WPForms - English Only Pro</p>
                    <p className="mt-2">✓ Test your form by typing non-English characters (e.g., "Привет") to see the validation in action</p>
                </div>
            </div>
        </section>
    )
} 