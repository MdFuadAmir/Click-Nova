import { FaBolt, FaShieldAlt, FaClock, FaLayerGroup } from "react-icons/fa";

const points = [
  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    desc: "I focus on shipping clean and production-ready code quickly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Clean Code",
    desc: "Maintainable, scalable and industry-standard code structure.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Work",
    desc: "I respect deadlines and always deliver within time.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Modern Stack",
    desc: "React, Node, MongoDB, Tailwind & latest web technologies.",
  },
];

const WhyMe = () => {
  return (
    <section className="py-18 md:py-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <h2
            className="text-3xl sm:text-5xl font-bold
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Why Work With Me
          </h2>

          <p className="text-[#5b5675] dark:text-[#b7b2d9]">
            I don’t just build websites — I build fast, scalable and clean
            digital products.
          </p>

          {/* BIG FEATURE */}
          <div
            className="p-8 rounded-2xl

            /* ✅ NEW CARD STYLE */
            bg-[#ffffff80] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff80] dark:border-[#ffffff1a]
            shadow-[0_10px_40px_rgba(99,102,241,0.08)]
            hover:shadow-[0_15px_50px_rgba(99,102,241,0.12)]"
          >
            <div className="text-indigo-500 text-3xl mb-3">
              <FaBolt />
            </div>

            <h3
              className="text-xl font-semibold
            text-[#2a2540] dark:text-[#e6e1ff]"
            >
              Performance First Approach
            </h3>

            <p
              className="text-sm mt-2
            text-[#5b5675] dark:text-[#b7b2d9]"
            >
              Every project is optimized for speed, scalability and real-world
              usage.
            </p>
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="space-y-5">
          {points.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl

              /* ✅ NEW CARD STYLE */
              bg-[#ffffff80] dark:bg-[#ffffff0a]
              backdrop-blur-xl
              border border-[#d6ccff80] dark:border-[#ffffff1a]
              shadow-[0_6px_20px_rgba(99,102,241,0.06)]

              hover:shadow-[0_10px_35px_rgba(99,102,241,0.1)]
              hover:-translate-y-0.5"
            >
              {/* ICON */}
              <div className="text-indigo-500 text-xl mt-1">{item.icon}</div>

              {/* TEXT */}
              <div>
                <h3
                  className="font-semibold
                text-[#2a2540] dark:text-[#e6e1ff]"
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm mt-1
                text-[#5b5675] dark:text-[#b7b2d9]"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
