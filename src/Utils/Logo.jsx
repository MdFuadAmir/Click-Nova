
import { Link, } from "react-router";

const Logo = () => {

  // smooth scroll to top
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      to="/"
      onClick={handleScrollTop}
      className="inline-flex items-center group"
    >
      <h1
        className="text-xl sm:text-2xl font-bold tracking-wide
        text-transparent bg-clip-text
        bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500
        group-hover:scale-105 transition-transform duration-300"
      >
        ClickNova
      </h1>

      {/* small dot accent */}
      <span
        className="ml-1 w-2 h-2 rounded-full
        bg-indigo-500 group-hover:animate-pulse"
      ></span>
    </Link>
  );
};

export default Logo;