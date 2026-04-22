// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* BG (same as your body tone) */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#faf5ff] via-[#f3e8ff] to-[#eef2ff]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-6xl mx-auto text-center">
        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-wider duration-300 uppercase
          text-[#7c7399] dark:text-[#a59fcb]"
        >
          My Services
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-3xl duration-300 delay-75 sm:text-5xl font-bold leading-tight
          text-[#2a2540] dark:text-[#e6e1ff]"
        >
          Solutions I Provide
          <span
            className="block text-transparent bg-clip-text
          bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500"
          >
            For Modern Web Projects
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 max-w-2xl mx-auto duration-300 delay-100 text-sm sm:text-base leading-relaxed
          text-[#5b5675] dark:text-[#b7b2d9]"
        >
          I help businesses and individuals build fast, scalable and visually
          appealing web applications using modern technologies and clean
          development practices.
        </motion.p>



        {/* SUBTLE LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          className="mx-auto mt-10 h-0.5 duration-300 delay-100 rounded-full
          bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500"
        />
      </div>
    </section>
  );
};

export default Intro;
