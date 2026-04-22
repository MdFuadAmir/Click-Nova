import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/100?img=1",
    feedback:
      "Amazing developer! Delivered a clean and scalable solution on time.",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager",
    image: "https://i.pravatar.cc/100?img=2",
    feedback: "Great communication and modern UI skills. Highly recommended!",
  },
  {
    name: "David Kim",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=3",
    feedback: "Very professional and detail-oriented. Loved working together.",
  },
  {
    name: "Emma Wilson",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=4",
    feedback:
      "Super clean UI and attention to detail. Would definitely work again!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-18 md:py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold leading-snug
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Trusted by Clients
            <span
              className="block text-transparent bg-clip-text 
            bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500"
            >
              Worldwide Feedback
            </span>
          </h2>

          <p
            className="mt-4 text-sm sm:text-base
          text-[#5b5675] dark:text-[#b7b2d9]"
          >
            Real experiences from people I’ve worked with — focused on quality,
            performance, and clean development.
          </p>

          {/* line */}
          <div
            className="mt-4 w-20 h-1 rounded-full
          bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500"
          />
        </div>

        {/* SCROLL AREA */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-65 sm:min-w-[320px] lg:min-w-90
              snap-center p-6 rounded-2xl

              /* ✅ NEW CARD STYLE */
              bg-[#ffffff80] dark:bg-[#ffffff0a]
              backdrop-blur-xl
              border border-[#d6ccff80] dark:border-[#ffffff1a]
              shadow-[0_10px_30px_rgba(99,102,241,0.08)]

              hover:shadow-[0_15px_50px_rgba(99,102,241,0.12)]
              hover:-translate-y-1
              "
            >
              {/* QUOTE */}
              <FaQuoteLeft className="text-indigo-500 mb-4 text-xl" />

              {/* FEEDBACK */}
              <p
                className="text-sm sm:text-base leading-relaxed
              text-[#3f3a5a] dark:text-[#d1ccf5]"
              >
                “{t.feedback}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4
                    className="text-sm font-semibold
                  text-[#2a2540] dark:text-[#e6e1ff]"
                  >
                    {t.name}
                  </h4>

                  <span
                    className="text-xs
                  text-[#8b86a3] dark:text-[#8a85b3]"
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
