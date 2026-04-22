// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { useState } from "react";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Modern UI with React, Tailwind & smooth animations.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Secure APIs using Node, Express & MongoDB.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Mobile-first layouts for all devices.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Clean and user-focused design systems.",
  },
];

const ServiceOverview = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2
            className="text-3xl sm:text-5xl font-bold leading-tight
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Services That
            <span
              className="block text-transparent bg-clip-text
            bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500"
            >
              Drive Results
            </span>
          </h2>

          <p
            className="text-sm sm:text-base leading-relaxed max-w-md
          text-[#5b5675] dark:text-[#b7b2d9]"
          >
            I build high-quality web solutions with performance, scalability and
            user experience in mind.
          </p>

          {/* dynamic highlight */}
          <div
            className="mt-6 p-5 rounded-xl
          bg-[#ffffff70] dark:bg-[#ffffff0a]
          backdrop-blur-xl border border-[#d6ccff60] dark:border-[#ffffff1a]"
          >
            <h3
              className="font-semibold
            text-[#2a2540] dark:text-[#e6e1ff]"
            >
              {services[active].title}
            </h3>

            <p
              className="text-sm mt-2
            text-[#5b5675] dark:text-[#b7b2d9]"
            >
              {services[active].desc}
            </p>
          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              className={`cursor-pointer p-5 rounded-xl flex items-center gap-4

              ${
                active === i
                  ? "bg-[#ffffff80] dark:bg-[#ffffff12] border border-[#a78bfa80]"
                  : "bg-[#ffffff50] dark:bg-[#ffffff08] border border-[#d6ccff40]"
              }
              backdrop-blur-lg`}
            >
              {/* ICON */}
              <div className="text-indigo-500 text-xl">{service.icon}</div>

              {/* TEXT */}
              <div>
                <h4
                  className="font-medium
                text-[#2a2540] dark:text-[#e6e1ff]"
                >
                  {service.title}
                </h4>

                <p
                  className="text-xs
                text-[#6b6685] dark:text-[#a9a4d4]"
                >
                  {service.desc}
                </p>
              </div>

              {/* RIGHT BAR */}
              <div
                className={`ml-auto w-1 h-10 rounded-full 
                ${
                  active === i
                    ? "bg-linear-to-b from-indigo-500 to-purple-500"
                    : "bg-transparent"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
