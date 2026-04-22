// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaPaperPlane, FaGithub } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#f3e8ff] via-[#e0f2fe] to-[#dcfce7]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-4xl mx-auto text-center">

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="
            p-10 sm:p-14 rounded-2xl

            bg-[#ffffff60] dark:bg-[#ffffff0a]
            backdrop-blur-xl

            border border-[#d6ccff60] dark:border-[#ffffff1a]

            shadow-lg
          "
        >

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a2540] dark:text-[#e6e1ff]">
            Got a Project in Mind?
          </h2>

          {/* TEXT */}
          <p className="mt-4 text-sm sm:text-base text-[#5b5675] dark:text-[#b7b2d9] max-w-xl mx-auto">
            Let’s work together to build something modern, fast and scalable.
            I’m available for freelance projects and collaborations.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

            {/* Primary */}
            <Link to="/contact">
              <button className="
                flex items-center justify-center w-full gap-2
                px-6 py-3 rounded-lg text-white
                bg-indigo-500 hover:bg-indigo-600
                
              ">
                <FaPaperPlane />
                Contact Me
              </button>
            </Link>

            {/* Secondary */}
            <a
              href="https://github.com/MdFuadAmir"
              target="_blank"
              className="
                flex items-center justify-center gap-2
                px-6 py-3 rounded-lg
                border border-[#d6ccff80] dark:border-[#ffffff1a]
                text-[#2a2540] dark:text-[#e6e1ff]
                hover:bg-[#ffffff40] dark:hover:bg-[#ffffff10]
                
              "
            >
              <FaGithub />
              View GitHub
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;