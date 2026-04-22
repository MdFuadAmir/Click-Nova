import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const techs = [
  { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
  { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
  { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
  { icon: <FaNodeJs className="text-[#3C873A]" />, name: "Node.js" },
  { icon: <FaDatabase className="text-[#10B981]" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-[#F1502F]" />, name: "Git" },
  { icon: <FaGithub className="text-[#111827] dark:text-[#E5E7EB]" />, name: "GitHub" },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold
          text-[#2a2540] dark:text-[#e6e1ff]">
            Tech Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base
          text-[#5b5675] dark:text-[#b7b2d9]">
            Technologies I use to build modern web apps
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {techs.map((t, i) => (
            <div
              key={i}
              className="
                group p-6 rounded-2xl text-center
                bg-[#ffffff80] dark:bg-[#ffffff0a]
                backdrop-blur-xl
                border border-[#d6ccff50] dark:border-[#ffffff1a]
                shadow-sm hover:shadow-lg
                hover:-translate-y-2
              "
            >
              {/* ICON */}
              <div className="text-4xl flex justify-center group-hover:scale-110">
                {t.icon}
              </div>

              {/* NAME */}
              <h3 className="mt-3 text-sm font-medium
              text-[#2a2540] dark:text-[#e6e1ff]">
                {t.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechStack;