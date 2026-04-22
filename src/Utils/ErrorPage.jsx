// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import SEO from "./SEO";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <SEO
        title="404 | Page Not Found - Click Nova"
        description="This page does not exist. Explore Click Nova website."
      />

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#f3e8ff] via-[#e0f2fe] to-[#dcfce7]
        dark:from-[#0f0d1f] dark:via-[#141225] dark:to-[#0b0f19]"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md p-10 rounded-2xl

        bg-[#ffffff60] dark:bg-[#ffffff0a]
        backdrop-blur-xl
        border border-[#d6ccff60] dark:border-[#ffffff1a]
        shadow-lg"
      >
        {/* BIG NUMBER */}
        <h1 className="text-7xl font-bold text-indigo-500">404</h1>

        {/* TITLE */}
        <h2
          className="mt-4 text-2xl font-semibold
        text-[#2a2540] dark:text-[#e6e1ff]"
        >
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm text-[#5b5675] dark:text-[#b7b2d9]">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* ANIMATION DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-2 bg-indigo-500 rounded-full"
          />
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
            className="w-2 h-2 bg-purple-500 rounded-full"
          />
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
            className="w-2 h-2 bg-pink-500 rounded-full"
          />
        </div>

        {/* BUTTON */}
        <Link to="/">
          <button
            className="mt-8 px-6 py-2 rounded-lg text-white
          bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Go Home
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
