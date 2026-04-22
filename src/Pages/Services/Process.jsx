import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Understand Requirement",
    desc: "I analyze goals, users and project requirements deeply.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Planning & Design",
    desc: "I create UI structure and system architecture plan.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "I build scalable, clean and optimized web applications.",
  },
  {
    icon: <FaRocket />,
    title: "Deploy & Improve",
    desc: "I deploy and continuously optimize performance.",
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold
          text-[#2a2540] dark:text-[#e6e1ff]">
            My Process
          </h2>

          <p className="mt-3 text-sm sm:text-base
          text-[#5b5675] dark:text-[#b7b2d9]">
            Step-by-step workflow I follow for every project
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5
          bg-linear-to-b from-indigo-300 via-purple-300 to-cyan-300 opacity-40
          hidden md:block" />

          <div className="space-y-14">

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col md:flex-row items-center"
              >

                {/* DOT */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full
                bg-indigo-500 shadow-lg shadow-indigo-300" />

                {/* LEFT CARD */}
                <div
                  className={`w-full md:w-1/2 flex ${
                    i % 2 === 0 ? "md:justify-end md:pr-10" : "md:order-2 md:pl-10"
                  }`}
                >
                  <div
                    className="w-full md:max-w-sm p-6 rounded-2xl

                    bg-[#ffffff70] dark:bg-[#ffffff0a]
                    backdrop-blur-xl

                    border border-[#d6ccff60] dark:border-[#ffffff1a]

                    shadow-sm hover:shadow-xl
                    hover:-translate-y-1"
                  >
                    <div className="text-indigo-500 text-xl mb-3">
                      {step.icon}
                    </div>

                    <h3 className="text-lg font-semibold
                    text-[#2a2540] dark:text-[#e6e1ff]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm
                    text-[#5b5675] dark:text-[#b7b2d9]">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* SPACER (CENTER) */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;