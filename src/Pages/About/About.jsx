import React from "react";
import Intro from "./Intro";
import Story from "./Story";
import Skills from "./Skills";
import Experience from "./Experience";
import CTA from "./CTA";
import SEO from "../../Utils/SEO";

const About = () => {
  return (
    <div>
      <SEO
        title="About | Click Nova"
        description="Learn more about Click Nova, our journey, skills and expertise in web development."
      />
      <Intro />
      <Story />
      <Skills />
      <Experience />
      <CTA />
    </div>
  );
};

export default About;
