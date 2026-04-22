import { projectsData } from "../../../public/Data/ProjectData"; // path adjust korba
import ProjectCard from "../Projects/ProjectCard";
import { Link } from "react-router";

const FeaturedProjects = () => {
  // 👉 only first 3 project
  const featured = projectsData.slice(0, 3);

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#f3e8ff] via-[#e0f2fe] to-[#dcfce7]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold
            text-[#2a2540] dark:text-[#e6e1ff]"
          >
            Featured Projects
          </h2>

          <p
            className="mt-3 text-sm sm:text-base
            text-[#5b5675] dark:text-[#b7b2d9]"
          >
            Some selected works that represent my best work
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <Link to="/projects">
            <button
              className="px-6 py-3 rounded-lg text-sm text-white
              bg-indigo-500 hover:bg-indigo-600"
            >
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
