import React from "react";
import "./App.css";
import downloadIcon from "./imgs/download.svg";
import Projects from "./components/project.jsx";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

function App() {
  const styleHeader = () => {
    const appHeader = document.querySelector(".header");
    const menu = document.querySelector(".menu");
    const menuText = document.querySelector(".menu > ul");
    const downloadBtn = document.querySelector(".downloadCV");
    const scrollArrow = document.querySelector(".scrollArrow");
    const socialLogos = document.querySelector(".socialMediaLogos");
    const github = document.querySelector(".github");
    const linkedin = document.querySelector(".linkedin");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      scrollArrow.classList.remove("jump");
      appHeader.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
      scrollArrow.style.opacity = "0";
      menuText.style.color = "white";
      appHeader.style.height = "60px";
      downloadBtn.style.color = "rgb(180, 169, 169)";
      menu.style.marginTop = "5px";
      socialLogos.style.transform = "rotate(90deg)";
      socialLogos.style.right = "1%";
      socialLogos.style.bottom = "3%";
      github.style.transform = "rotate(-90deg)";
      linkedin.style.transform = "rotate(-90deg)";
    } else {
      appHeader.style.backgroundColor = "";
      menuText.style.color = "black";
      appHeader.style.height = "100px";
      downloadBtn.style.color = "rgb(87, 80, 80)";
      menu.style.marginTop = "40px";
      scrollArrow.style.opacity = "1";
      socialLogos.style.transform = "rotate(0deg)";
      socialLogos.style.right = "10%";
      socialLogos.style.bottom = "5%";
      github.style.transform = "rotate(0deg)";
      linkedin.style.transform = "rotate(0deg)";
    }
  };

  window.onscroll = function () {
    styleHeader();
  };

  useBottomScrollListener(() => {
    const socialLogos = document.querySelector(".socialMediaLogos");
    const github = document.querySelector(".github");
    const linkedin = document.querySelector(".linkedin");
    socialLogos.style.width = "100%";
    socialLogos.style.marginLeft = "10%";
    socialLogos.style.bottom = "2%";
    github.style.transform = "rotate(0deg)";
    linkedin.style.transform = "rotate(0deg)";
  });
  return (
    <div className="wrap">
      <div className="App">
        <header className="header">
          <div className="menu">
            <ul>
              <li>Projetos</li>
              <li>Contato</li>
              <li className="downloadCV">
                Download CV
                <img alt="Download" id="downloadIcon" src={downloadIcon}></img>
              </li>
            </ul>
          </div>
        </header>
        <div className="name">
          <h1>Paulo Ricardo</h1>
          <hr></hr>
          <h1>Desenvolvedor Front End</h1>
        </div>
        <section>
          <svg
            className="scrollArrow"
            width="68"
            height="42"
            viewBox="0 0 68 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M31.1716 34.8284C32.7337 36.3905 35.2663 36.3905 36.8284 34.8284L62.2843 9.37259C63.8464 7.81049 63.8464 5.27783 62.2843 3.71573C60.7222 2.15364 58.1895 2.15363 56.6274 3.71573L34 26.3431L11.3726 3.71573C9.81049 2.15363 7.27783 2.15363 5.71573 3.71572C4.15364 5.27782 4.15363 7.81048 5.71573 9.37258L31.1716 34.8284ZM30 29L30 32L38 32L38 29L30 29Z"
                fill="#FFF3F3"
                fillOpacity="0.38"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0.544155"
                y="0.544151"
                width="66.9117"
                height="41.4559"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <div className="socialMediaLogos">
            <svg
              className="github"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <svg
              className="linkedin"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>
        </section>
      </div>
      <div className="projectsContainer">
        <div className="projects">
          <h1 className="projctTitle">Projetos</h1>
          <Projects />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-info">
          <h1 className="footer-title">Contato</h1>
          <hr></hr>
          <ul className="info-list">
            <li>E-mail: paulords95@gmail.com</li>
            <li>Tel.: (41) 99636-7447</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
