// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import profile from "../../../public/Images/pro1.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="md:min-h-screen flex items-center px-6 sm:px-10 lg:px-20 py-20 relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#f7f6ff] via-[#f1f3ff] to-[#f8f9ff]
        dark:from-[#12101f] dark:via-[#17142a] dark:to-[#0f0d1f]
      "
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-6 text-center lg:text-left">
          <h2
            className="text-2xl sm:text-3xl font-semibold
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Modern Web Developer
          </h2>

          {/* CODE BLOCK */}
          <div
            className="text-left mx-auto lg:mx-0 max-w-xs sm:max-w-sm
            bg-[#ffffff70] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff60] dark:border-[#ffffff1a]
            rounded-lg p-4 text-xs sm:text-sm font-mono"
          >
            <pre className="text-[#3f3a5a] dark:text-[#d1ccf5]">
              <span className="text-[#6d28d9]">const</span>{" "}
              <span className="text-[#2563eb]">developer</span> = {"{"}
              {"\n  "}
              <span className="text-[#059669]">name</span>:{" "}
              <span className="text-[#ef4444]">"Click Nova"</span>,{"\n  "}
              <span className="text-[#059669]">role</span>:{" "}
              <span className="text-[#ef4444]">"MERN Stack Dev"</span>,{"\n  "}
              <span className="text-[#059669]">position</span>:{" "}
              <span className="text-[#ef4444]">"Frontend Focused"</span>,{"\n"}
              {"};"}
            </pre>
          </div>

          <p
            className="text-sm sm:text-base
          text-[#5b5675] dark:text-[#b7b2d9]"
          >
            I build scalable and clean web apps with modern technologies.
          </p>

          <Link
            to={"/contact"}
            className="px-5 py-2.5 rounded-lg text-sm text-white
            bg-indigo-500 hover:bg-indigo-600"
          >
            Hire Me
          </Link>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex justify-center">
          {/* ICONS */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-2 left-2 text-[#5b8cff] text-2xl"
          >
            <FaReact />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-2 left-4 text-[#22c55e] text-2xl"
          >
            <FaNodeJs />
          </motion.div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute right-2 top-6 text-[#a855f7] text-2xl"
          >
            <FaDatabase />
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-1/2 left-0 text-[#ec4899] text-xl"
          >
            <FaCode />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-1/2 right-0 text-[#6b7280] dark:text-[#c7c3e6] text-xl"
          >
            <FaGithub />
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-60 h-75 sm:w-70 sm:h-90 overflow-hidden
            bg-[#ffffff60] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff60] dark:border-[#ffffff1a]"
            style={{
              borderRadius: "50% 50% 20% 80% / 60% 40% 60% 40%",
            }}
          >
            <img src={profile} className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 text-left lg:text-right">
          <h2
            className="text-2xl sm:text-3xl font-semibold
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            What I Deliver
          </h2>

          <ul
            className="space-y-3 text-sm sm:text-base
          text-[#5b5675] dark:text-[#b7b2d9]"
          >
            {[
              "Clean & maintainable code",
              "Responsive modern UI",
              "Fast & optimized performance",
              "Scalable architecture",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 lg:justify-end items-start">
                <FaCheckCircle className="text-indigo-500 mt-1 block lg:hidden" />
                <span>{item}</span>
                <FaCheckCircle className="text-indigo-500 mt-1 hidden lg:block" />
              </li>
            ))}
          </ul>

          <div className="flex justify-start lg:justify-end">
            <Link
              to={"/projects"}
              className="px-5 py-2.5 rounded-lg text-sm
              border border-[#d6ccff80] dark:border-[#ffffff1a]
              text-[#2a2540] dark:text-[#e6e1ff]
              hover:bg-[#f3f0ff] dark:hover:bg-[#1a1730]
              "
            >
              View Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
