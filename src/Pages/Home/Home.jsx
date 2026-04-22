import SEO from "../../Utils/SEO";
import CTA from "./CTA";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";
import Services from "./Servises";
import Stats from "./Stats";
import Testimonials from "./Testmonials";
import WhyMe from "./WhyMe";

const Home = () => {
  return (
    <div>
      <SEO
        title="Click Nova | Modern Web Development"
        description="Click Nova builds modern, scalable and high-performance web applications using the latest technologies."
      />
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Services />
      <WhyMe />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
