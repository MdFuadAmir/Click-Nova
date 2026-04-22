// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#faf5ff] via-[#f3e8ff] to-[#eef2ff]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 sm:p-14 rounded-2xl
          bg-[#ffffff70] dark:bg-[#ffffff0a]
          backdrop-blur-xl
          border border-[#d6ccff60] dark:border-[#ffffff1a]
          shadow-sm hover:shadow-lg "
        >
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a2540] dark:text-[#e6e1ff]">
            Let’s Work Together
          </h2>

          {/* TEXT */}
          <p className="mt-4 text-sm sm:text-base text-[#5b5675] dark:text-[#b7b2d9] leading-relaxed">
            I’m always open to new opportunities, freelance projects and
            collaborations. Feel free to check my CV or contact me directly.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* CV DOWNLOAD */}
            <a
              href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
              download
              className="flex items-center justify-center gap-2
              px-6 py-3 rounded-lg text-white text-sm
              bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500
              hover:scale-105 duration-300"
            >
              <FaDownload />
              Download CV
            </a>

            {/* CONTACT */}
            <a
              href="/contact"
              className="flex items-center justify-center gap-2
              px-6 py-3 rounded-lg text-sm
              border border-[#d6ccff60] dark:border-[#ffffff1a]
              text-[#2a2540] dark:text-[#e6e1ff]
              hover:bg-white/40 dark:hover:bg-white/10
              "
            >
              <FaPaperPlane />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
