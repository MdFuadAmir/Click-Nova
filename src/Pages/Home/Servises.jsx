// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Building clean and modern UI with React, Tailwind & animations.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Robust API & server logic using Node.js, Express & MongoDB.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Mobile-first layouts that look perfect on all devices.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "User-focused design with modern aesthetics and usability.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-18 md:py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug
          text-[#2a2540] dark:text-[#e6e1ff]">
            Services I Provide
          </h2>

          <p className="mt-4 max-w-md
          text-[#5b5675] dark:text-[#b7b2d9]">
            I help businesses and individuals build modern, scalable and
            user-friendly web applications using the latest technologies.
          </p>

          {/* line */}
          <div className="mt-6 w-20 h-1 rounded-full
          bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500" />
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-4 top-0 w-0.5 h-full
          bg-linear-to-b from-indigo-400 via-purple-400 to-violet-400 opacity-40" />

          <div className="space-y-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-14 group"
              >

                {/* ICON */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full
                  bg-[#ffffff80] dark:bg-[#ffffff0a]
                  backdrop-blur-xl
                  border border-[#d6ccff80] dark:border-[#ffffff1a]
                  flex items-center justify-center
                  text-indigo-500
                  group-hover:scale-110"
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold
                text-[#2a2540] dark:text-[#e6e1ff]">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-sm mt-1 max-w-md
                text-[#5b5675] dark:text-[#b7b2d9]">
                  {service.desc}
                </p>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;