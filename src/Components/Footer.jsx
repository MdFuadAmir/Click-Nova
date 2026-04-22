import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import Logo from "../Utils/Logo";

const Footer = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative pt-20 pb-10 px-6 sm:px-10 lg:px-20 overflow-hidden">
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-t
        from-[#f2ecff] via-[#ede7ff] to-[#f7f8ff]
        dark:from-[#141225] dark:via-[#18142f] dark:to-[#0f0d1f]"
      />

      <div className="max-w-6xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ABOUT */}
          <div>
            <Logo />

            <p className="text-sm mt-4 leading-relaxed text-[#5b5675] dark:text-[#b7b2d9]">
              A passionate MERN Stack Developer focused on building modern,
              scalable and user-friendly web applications.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
              Quick Links
            </h3>

            <ul className="mt-3 space-y-2 text-sm">
              {links.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`relative inline-block 
                        ${
                          isActive
                            ? "text-purple-500 font-medium"
                            : "text-[#5b5675] dark:text-[#b7b2d9] hover:text-purple-500"
                        }
                      `}
                    >
                      {item.name}

                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
              Contact
            </h3>

            <p className="text-sm mt-3 text-[#5b5675] dark:text-[#b7b2d9]">
              Email: mdfuadamir@gmail.com
            </p>

            <div className="flex gap-4 mt-5 text-lg text-[#5b5675] dark:text-[#b7b2d9]">
              <FaGithub className="hover:text-purple-500 cursor-pointer" />
              <FaLinkedin className="hover:text-purple-500 cursor-pointer" />
              <FaFacebook className="hover:text-purple-500 cursor-pointer" />
              <FaEnvelope className="hover:text-purple-500 cursor-pointer" />
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-[#d6ccff40] dark:border-[#ffffff12]" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-[#5b5675] dark:text-[#b7b2d9]">
          © 2026 Md Fuad Amir. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;