import React, { useEffect } from "react";
import "./projects.css";

import Aos from "aos";
import "aos/dist/aos.css";

import CardProject from "./CardProject";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projectsWrap">
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </div>
  );
};

export default Projects;
