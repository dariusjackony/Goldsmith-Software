import Button from "../../Button";

export default function ContactField() {
  return (
    <section className="px-4 mt-6 grid place-items-center mb-5">
      <div className="bg-blue-950 text-white rounded-xl w-full max-w-lg shadow-lg">
        <form className="p-6 flex flex-col gap-4">
          <span className="lg:text-xl md:text-xl font-semibold">Talk to us today</span>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="bg-slate-700 w-full text-white placeholder-gray-100 rounded-md p-3
                       focus:outline-none "
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="bg-slate-700 w-full text-white placeholder-gray-100 rounded-md p-3
                       focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            required
            rows="5"
            className="bg-slate-700 w-full text-white placeholder-gray-100 rounded-md p-3
                       focus:outline-none resize-none"
          ></textarea>
          <Button className="mt-2 self-start">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
