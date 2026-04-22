// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#faf5ff] via-[#f3e8ff] to-[#eef2ff]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>

          {/* SMALL LABEL */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-indigo-500 rounded-full"></div>
            <span className="text-sm tracking-widest text-indigo-500">
              MY STORY
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-[#2a2540] dark:text-[#e6e1ff]">
            Building ideas into
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500">
              real digital products
            </span>
          </h2>

          {/* TEXT */}
          <p className="mt-6 text-[#5b5675] dark:text-[#b7b2d9] text-sm sm:text-base leading-relaxed">
            I started my journey with curiosity about how websites work. That curiosity
            slowly turned into passion and then into a profession.
          </p>

          <p className="mt-4 text-[#5b5675] dark:text-[#b7b2d9] text-sm sm:text-base leading-relaxed">
            Today I build modern MERN stack applications focused on performance,
            scalability and clean UI experience.
          </p>

          <p className="mt-4 text-[#5b5675] dark:text-[#b7b2d9] text-sm sm:text-base leading-relaxed">
            My goal is not just to code, but to create smooth digital experiences that
            feel simple, fast and meaningful.
          </p>

        </div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -6 }}
        
          className="p-8 sm:p-10 rounded-2xl relative duration-100
          bg-[#ffffff70] dark:bg-[#ffffff0a]
          backdrop-blur-xl
          border border-[#d6ccff60] dark:border-[#ffffff1a]
          shadow-[0_10px_40px_rgba(99,102,241,0.08)]"
        >

          {/* DECOR LINE */}
          <div className="absolute top-6 left-6 w-20 h-0.5 bg-linear-to-r from-indigo-500 via-purple-500 to-transparent rounded-full"></div>

          <h3 className="text-xl font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
            Developer Mindset
          </h3>

          <p className="mt-4 text-sm sm:text-base text-[#5b5675] dark:text-[#b7b2d9] leading-relaxed">
            I believe in writing clean, scalable and maintainable code. Every project
            I build follows real-world standards and focuses on user experience first.
          </p>

          {/* HIGHLIGHT BOX */}
          <div className="mt-6 p-4 rounded-xl bg-white/40 dark:bg-white/10 border border-white/20">
            <p className="text-sm text-[#3f3a5a] dark:text-[#d1ccf5]">
              “Good design is invisible — users should feel speed, not complexity.”
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Story;