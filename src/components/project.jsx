import React from "react";
import "./projects.css";

import CardProject from "./CardProject";

const Projects = () => {
  return (
    <div id="projectSection" className="projectsContainer">
      <div className="projects">
        <h1 className="projctTitle">Projetos</h1>
        <div className="projectsWrap">
          <CardProject
            title="Windows XP"
            bgImg="https://raw.githubusercontent.com/paulords95/Portfolio/master/src/imgs/winxp.PNG"
            description="Funcionalidades básicas do Windows XP desenvolvidas em React, incluindo Menu Iniciar, Bloco de Notas e MS Paint. Entre as opções, é possivel mover janelas, alterar dimensões do bloco de notas e mudar foco entre Menu Iniciar e área de trabalho. Não é possível redimensionar o Paint devido a limitação de recursos do Canvas."
            liveLink="http://winxp.paulo.dev.br/"
            repoLink="https://github.com/paulords95/WindowsXP"
            func1="Menu Iniciar"
            func2="Relógio"
            func3="Paint"
            func4="Bloco de Notas"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
