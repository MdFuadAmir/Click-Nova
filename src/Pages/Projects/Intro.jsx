// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="pt-20 md:pt-28 pb-12 px-6 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#faf5ff] via-[#f3e8ff] to-[#eef2ff]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-6xl mx-auto text-center">

        {/* SMALL TAG */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full text-xs
          bg-[#ffffff70] dark:bg-[#ffffff10]
          border border-[#d6ccff50] dark:border-[#ffffff1a]
          text-[#5b5675] dark:text-[#b7b2d9]"
        >
          ✨ My Work Showcase
        </motion.span>

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-5 text-4xl sm:text-6xl font-bold leading-tight
          text-[#2a2540] dark:text-[#e6e1ff]"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text
          bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500">
            Projects
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 text-sm sm:text-base max-w-2xl mx-auto
          text-[#5b5675] dark:text-[#b7b2d9]"
        >
          A curated collection of modern web applications built with React,
          Node.js, and MongoDB. Each project reflects clean code, scalable
          architecture, and real-world problem solving.
        </motion.p>

      </div>
    </section>
  );
};

export default Intro;