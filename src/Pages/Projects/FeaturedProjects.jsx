import { useState } from "react";
import Filter from "./Filter";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../../public/Data/ProjectData";

const FeaturedProjects = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === active);

  return (
    <section className="px-6 pb-16 max-w-6xl mx-auto">
      {/* FILTER */}
      <Filter active={active} setActive={setActive} />

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
