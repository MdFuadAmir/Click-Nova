// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    image,
    desc,
    tech = [],
    type,
    liveLink,
    githubLink,
  } = project;

  return (
    <motion.div
      className="
        group rounded-2xl overflow-hidden
        bg-[#ffffff70] dark:bg-[#ffffff0a]
        backdrop-blur-xl
        border border-[#d6ccff50] dark:border-[#ffffff1a]
        shadow-sm hover:shadow-xl
        
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover
          group-hover:scale-110 duration-300"
        />

        {/* TYPE BADGE */}
        <span
          className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full
        bg-indigo-500 text-white"
        >
          {type}
        </span>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <span className="text-white text-sm font-medium">View Project</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        {/* TITLE */}
        <h3
          className="text-lg font-semibold
        text-[#2a2540] dark:text-[#e6e1ff]"
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="text-sm
        text-[#5b5675] dark:text-[#b7b2d9] line-clamp-2"
        >
          {desc}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="
                text-xs px-2 py-1 rounded-full
                bg-indigo-500/10 text-indigo-500
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-between pt-3">
          {/* DETAILS */}
          <Link to={`/projectDetails/${id}`}>
            <button
              className="
              text-sm px-4 py-2 rounded-lg
              bg-indigo-500 text-white
              hover:bg-indigo-600 
            "
            >
              Details
            </button>
          </Link>

          {/* LINKS */}
          <div className="flex gap-3 text-[#5b5675] dark:text-[#b7b2d9]">
            <a href={githubLink} target="_blank">
              <FaGithub className="hover:text-indigo-500 cursor-pointer " />
            </a>

            <a href={liveLink} target="_blank">
              <FaExternalLinkAlt className="hover:text-indigo-500 cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
