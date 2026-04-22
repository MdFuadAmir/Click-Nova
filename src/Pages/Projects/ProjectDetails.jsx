// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router";
import { projectsData } from "../../../public/Data/ProjectData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import SEO from "../../Utils/SEO";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }
  const metaData = [
    { label: "Client", value: project.client },
    { label: "Duration", value: project.duration },
    { label: "Role", value: project.role },
    { label: "Type", value: project.type },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <SEO title={`${project.title} | Click Nova`} description={project.desc} />
      {/* BG */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#f7f8ff] via-[#ede7ff] to-[#f2ecff]
        dark:from-[#0f0d1f] dark:via-[#141225] dark:to-[#0b0f19]"
      />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* 🔙 BACK BUTTON */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#5b5675] dark:text-[#b7b2d9] hover:text-indigo-500"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* 🔥 HERO */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-lg"
          />

          {/* INFO */}
          <div className="space-y-6">
            <h1
              className="text-3xl sm:text-4xl font-bold
            text-[#2a2540] dark:text-[#e6e1ff]"
            >
              {project.title}
            </h1>

            <p className="text-[#5b5675] dark:text-[#b7b2d9]">
              {project.longDesc}
            </p>

            {/* META GRID */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {metaData.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl
      bg-[#ffffff60] dark:bg-[#ffffff0a]
      border border-[#d6ccff60]"
                >
                  <p className="text-xs text-[#8b86a3]">{item.label}</p>
                  <p className="font-medium dark:text-gray-300">{item.value}</p>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-2">
              <a
                href={project.liveLink}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                bg-indigo-500 text-white hover:bg-indigo-600"
              >
                <FaExternalLinkAlt /> Live Preview
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                border border-gray-300 dark:border-gray-600
                text-[#2a2540] dark:text-[#e6e1ff]"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 🔥 FEATURES + TECH */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* FEATURES */}
          <div>
            <h2
              className="text-xl font-semibold mb-4
            text-[#2a2540] dark:text-[#e6e1ff]"
            >
              Key Features
            </h2>

            <ul className="space-y-2 text-[#5b5675] dark:text-[#b7b2d9]">
              {project.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>

          {/* TECH */}
          <div>
            <h2
              className="text-xl font-semibold mb-4
            text-[#2a2540] dark:text-[#e6e1ff]"
            >
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm
                  bg-indigo-500/10 text-indigo-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 CHALLENGE / SOLUTION */}
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="p-6 rounded-xl
          bg-[#ffffff60] dark:bg-[#ffffff0a]
          border border-[#d6ccff50]"
          >
            <h3 className="font-semibold mb-2 dark:text-gray-300">Challenge</h3>
            <p className="text-sm text-[#5b5675] dark:text-[#b7b2d9]">
              {project.challenge}
            </p>
          </div>

          <div
            className="p-6 rounded-xl
          bg-[#ffffff60] dark:bg-[#ffffff0a]
          border border-[#d6ccff50]"
          >
            <h3 className="font-semibold mb-2 dark:text-gray-300">Solution</h3>
            <p className="text-sm text-[#5b5675] dark:text-[#b7b2d9]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 🔥 RESULT */}
        <div>
          <h2
            className="text-xl font-semibold mb-3
          text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Outcome
          </h2>

          <p className="text-[#5b5675] dark:text-[#b7b2d9]">
            {project.outcome}
          </p>
        </div>

        {/* 🔥 CTA */}
        <div className="text-center pt-10">
          <h3 className="text-xl font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
            Want a similar project?
          </h3>

          <Link to="/contact">
            <button
              className="mt-4 px-6 py-2.5 rounded-lg text-white
            bg-indigo-500 hover:bg-indigo-600"
            >
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
