// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: "90%" },
  { name: "Node.js", level: "85%" },
  { name: "MongoDB", level: "80%" },
  { name: "Express.js", level: "82%" },
  { name: "Tailwind CSS", level: "95%" },
  { name: "JavaScript", level: "92%" },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#faf5ff] via-[#f3e8ff] to-[#eef2ff]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#2a2540] dark:text-[#e6e1ff]">
            My Skills
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#5b5675] dark:text-[#b7b2d9]">
            Technologies I use to build modern web applications
          </p>

          {/* LINE */}
          <div className="mt-5 flex justify-center">
            <div className="w-24 h-0.5 bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full"></div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl
              bg-[#ffffff70] dark:bg-[#ffffff0a]
              backdrop-blur-xl
              border border-[#d6ccff60] dark:border-[#ffffff1a]
              shadow-sm hover:shadow-lg duration-300"
            >

              {/* TOP */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
                  {skill.name}
                </h3>

                <span className="text-sm text-indigo-500 font-medium">
                  {skill.level}
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-4 w-full h-2 rounded-full bg-[#e9e6ff] dark:bg-[#2a2347] overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  className="h-full rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500 duration-300"
                />

              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm text-[#5b5675] dark:text-[#b7b2d9]">
                Strong practical experience building real-world projects.
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;