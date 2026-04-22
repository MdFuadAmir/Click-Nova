import React from "react";
import Intro from "./Intro";
import ServiceOverview from "./ServiceOverview";
import Process from "./Process";
import TechStack from "./TechStack";
import Pricing from "./Pricing";
import CTA from "./CTA";
import SEO from "../../Utils/SEO";

const Services = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Services | Click Nova"
        description="Professional web development services including frontend, backend and fullstack solutions by Click Nova."
      />
      <Intro />
      <ServiceOverview />
      <Process />
      <TechStack />
      <Pricing />
      <CTA />
    </div>
  );
};

export default Services;
