import React from "react";

import "./skills.css";

const Skills = () => {
  return (
    <div id="about-section">
      <section className="about">
        <h1>Sobre</h1>
        <p className="about-me">
          {/*Olá, meu nome é Paulo. Tenho 25 anos e trabalho com tecnologia a quase
          3 anos, tenho dedicado o último ano na aprendizagem de tecnologias
          para desenvolvimento web. Tenho formação em Gestão da Tecnologia da
          Informação e possuo experiência profissional em suporte e
          administração de data centers e redes estruturadas, trabalhei também
          juntamente a equipe de desenvolimento dando suporte a servidores e
          ambientes de implantação. Atualmente tenho como foco a aprendizagem e
          aprofundamento na área de Desenvolvimento Front End.*/}
          Desenvolvedor Front End com sólidos conhecimentos em HTML/CSS,
          JavaScript ES6, React e Git para versionamento de código.
        </p>
        <p className="about-me">
          Possuo também familiaridade com as tecnologias React Native, Node.js,
          mongoDB e linguagem SQL.
        </p>
        {/* <h2 className="skills">Minhas Habilidades</h2>*/}
      </section>
    </div>
  );
};

export default Skills;
