// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="py-18 md:py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-10 sm:p-14 rounded-2xl
          bg-[#ffffff80] dark:bg-[#ffffff0a]
          backdrop-blur-xl
          border border-[#d6ccff80] dark:border-[#ffffff1a]
          shadow-[0_10px_40px_rgba(99,102,241,0.08)]"
        >
          {/* TITLE */}
          <h2
            className="text-3xl sm:text-4xl font-bold leading-snug
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Let’s Build Something
            <span
              className="block text-transparent bg-clip-text 
            bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500"
            >
              Amazing Together
            </span>
          </h2>

          {/* SUBTITLE */}
          <p
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto
          text-[#5b5675] dark:text-[#b7b2d9]"
          >
            I’m available for freelance work, full-time opportunities, and
            exciting collaborations. Let’s create something impactful.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* PRIMARY BUTTON */}
            <Link
              to={"/contact"}
              className="flex items-center justify-center gap-2
              px-6 py-3 rounded-lg text-white
              bg-indigo-600 hover:bg-indigo-700
              "
            >
              <FaPaperPlane />
              Hire Me
            </Link>

            {/* SECONDARY BUTTON */}
            <a
              href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
              download
              className="flex items-center justify-center gap-2
              px-6 py-3 rounded-lg
              border border-[#d6ccff] dark:border-[#ffffff20]
              text-[#2a2540] dark:text-[#e6e1ff]
              hover:bg-[#ede9fe] dark:hover:bg-[#ffffff10]
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

export default CTASection;
