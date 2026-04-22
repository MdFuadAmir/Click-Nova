// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            relative text-center p-12 sm:p-16 rounded-2xl
            bg-[#ffffff80] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff50] dark:border-[#ffffff1a]
            shadow-sm hover:shadow-xl
          "
        >
          {/* TITLE */}
          <h2
            className="text-3xl sm:text-4xl font-bold
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Let’s Build Something Great Together
          </h2>

          {/* SUBTITLE */}
          <p
            className="mt-4 text-sm sm:text-base max-w-2xl mx-auto
          text-[#5b5675] dark:text-[#b7b2d9]"
          >
            I’m available for freelance work and collaborations. Let’s turn your
            idea into a real product with clean & scalable code.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* PRIMARY */}
            <Link to={'/contact'}
              className="
                px-6 py-3 rounded-lg text-sm text-white
                bg-indigo-500 hover:bg-indigo-600
              "
            >
              Hire Me
            </Link>

            {/* SECONDARY */}
            {/* SECONDARY BUTTON */}
            <a
              href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
              download
              className="
                px-6 py-3 rounded-lg text-sm
                border border-[#d6ccff80] dark:border-[#ffffff1a]
                text-[#2a2540] dark:text-[#e6e1ff]
                hover:bg-white/40 dark:hover:bg-white/10
                flex items-center gap-2
              "
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
