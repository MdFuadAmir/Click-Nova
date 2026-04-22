// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profile from "../../../public/Images/pro2.png";

const Intro = () => {
  return (
    <section className="py-20 md:py-32 px-6 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#f7f6ff] via-[#f1f3ff] to-[#f8f9ff]
        dark:from-[#12101f] dark:via-[#17142a] dark:to-[#0f0d1f]
      " />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div className="space-y-5 text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold
            text-[#2a2540] dark:text-[#e6e1ff]
            hover:tracking-wide"
          >
            About Me
          </motion.h1>

          <p className="text-sm sm:text-base leading-relaxed
          text-[#5b5675] dark:text-[#b7b2d9]
          hover:text-[#3f3a5a] dark:hover:text-[#dcd7ff]
          ">
            I am a passionate <span className="text-indigo-500">MERN Stack Developer</span> 
            who loves building modern, scalable, and user-friendly web applications.
            I focus on clean code, performance, and smooth UI experiences.
          </p>

          <p className="text-sm sm:text-base leading-relaxed
          text-[#5b5675] dark:text-[#b7b2d9]
          hover:text-[#3f3a5a] dark:hover:text-[#dcd7ff]
          ">
            My goal is to create impactful digital products that solve real-world problems
            and deliver great user experience.
          </p>

          {/* TECH TAGS */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">

            {["React", "Node.js", "MongoDB", "Tailwind"].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full cursor-pointer
                bg-[#ffffff60] dark:bg-[#ffffff0a]
                text-[#5b5675] dark:text-[#b7b2d9]
                border border-[#d6ccff40] dark:border-[#ffffff1a]
                hover:scale-105 hover:bg-[#ffffff90] dark:hover:bg-[#ffffff15]
               "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* IMAGE SIDE */}
        <div className="flex justify-center">

          <motion.div
            initial={{ scale: 0.95, y: 0 }}
            animate={{ y: [0, -10, 0] }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-64 h-80 sm:w-72 sm:h-96 overflow-hidden
            bg-[#ffffff60] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff60] dark:border-[#ffffff1a]
            shadow-sm hover:shadow-xl "
            style={{
              borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
            }}
          >
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Intro;