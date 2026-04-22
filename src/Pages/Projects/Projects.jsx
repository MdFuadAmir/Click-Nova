import SEO from "../../Utils/SEO";
import CTA from "./CTA";
import FeaturedProjects from "./FeaturedProjects";
import Intro from "./Intro";
import Stats from "./Stats";

const Projects = () => {
  return (
    <div>
      <SEO
        title="Projects | Click Nova Portfolio"
        description="Explore modern web development projects built by Click Nova including MERN stack and UI design."
      />
      <Intro />
      <FeaturedProjects />
      <Stats />
      <CTA />
    </div>
  );
};

export default Projects;
