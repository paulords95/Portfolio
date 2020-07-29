import React from "react";
import "./projects.css";

import CardProject from "./CardProject";

const Projects = () => {
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
