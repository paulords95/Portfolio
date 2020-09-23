import React from "react";
import "./projects.css";

import CardProject from "./CardProject";

import winxp from "../imgs/winxp.PNG";

const Projects = () => {
  return (
    <div className="projectsWrap">
      <CardProject
        title="Windows XP"
        bgImg={winxp}
        description="Funcionalidades básicas do Windows XP desenvolvidas em React"
        liveLink="http://winxp.paulo.dev.br/"
        repoLink="https://github.com/paulords95/WindowsXP"
        func1="Menu Iniciar"
        func2="Relógio"
        func3="Paint"
        func4="Bloco de Notas"
      />
    </div>
  );
};

export default Projects;
