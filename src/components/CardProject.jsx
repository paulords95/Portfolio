import React, { useEffect } from "react";
import "./CardProject.css";

import Aos from "aos";
import "aos/dist/aos.css";

const CardProject = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="projectCard">
      <h1 className="projectTitle">Windows XP</h1>
      <div className="projectPreview"></div>
      <div className="viewWrap">
        <svg
          className="liveView"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M508.177,245.995C503.607,240.897,393.682,121,256,121S8.394,240.897,3.823,245.995c-5.098,5.698-5.098,14.312,0,20.01
			C8.394,271.103,118.32,391,256,391s247.606-119.897,252.177-124.995C513.274,260.307,513.274,251.693,508.177,245.995z M256,361
			c-57.891,0-105-47.109-105-105s47.109-105,105-105s105,47.109,105,105S313.891,361,256,361z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M271,226c0-15.09,7.491-28.365,18.887-36.53C279.661,184.235,268.255,181,256,181c-41.353,0-75,33.647-75,75
			c0,41.353,33.647,75,75,75c37.024,0,67.668-27.034,73.722-62.358C299.516,278.367,271,255.522,271,226z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <svg
          className="githubLogo"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </div>
      <div className="projectDescription">
        <p>Funcionalidades básicas do Windows XP desenvolvidas em React</p>
        <ul>
          <li>
            <h1>Funcionalidades</h1>
          </li>
          <li>Menu Iniciar</li>
          <li>Relógio</li>
          <li>Paint</li>
          <li>Bloco de Notas</li>
        </ul>
      </div>
    </div>
  );
};

export default CardProject;
