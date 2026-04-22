// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance Projects",
    period: "2024 - Present",
    desc: "Building modern UI with React, Tailwind CSS and animations. Focus on performance and responsiveness.",
  },
  {
    role: "MERN Stack Learner",
    company: "Self Learning",
    period: "2023 - 2024",
    desc: "Learned full stack development including React, Node.js, Express and MongoDB with real projects.",
  },
  {
    role: "Web Development Basics",
    company: "Programming Journey",
    period: "2022 - 2023",
    desc: "Started learning HTML, CSS, JavaScript and built basic responsive websites.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#faf5ff] via-[#f3e8ff] to-[#eef2ff]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#2a2540] dark:text-[#e6e1ff]">
            Experience
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#5b5675] dark:text-[#b7b2d9]">
            My learning and professional journey so far
          </p>

          <div className="mt-5 flex justify-center">
            <div className="w-24 h-0.5 bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full"></div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-[#d6ccff60] dark:border-[#ffffff1a] ml-3 sm:ml-6">

          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="mb-10 ml-6 sm:ml-10"
            >

              {/* DOT */}
              <span className="absolute -left-1.75 w-3 h-3 rounded-full bg-indigo-500 shadow-md"></span>

              {/* CARD */}
              <div
                className="p-5 rounded-2xl
                bg-[#ffffff70] dark:bg-[#ffffff0a]
                backdrop-blur-xl
                border border-[#d6ccff60] dark:border-[#ffffff1a]
                shadow-sm hover:shadow-md hover:-translate-y-1"
              >

                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h3 className="text-lg font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
                    {item.role}
                  </h3>

                  <span className="text-xs text-indigo-500 font-medium">
                    {item.period}
                  </span>
                </div>

                {/* COMPANY */}
                <p className="text-sm text-[#5b5675] dark:text-[#b7b2d9] mt-1">
                  {item.company}
                </p>

                {/* DESCRIPTION */}
                <p className="text-sm mt-3 text-[#3f3a5a] dark:text-[#d1ccf5] leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;