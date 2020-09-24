import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer id="footerSection" className="footer">
      <div className="footer-info">
        <h1 className="footer-title">Contato</h1>
        <hr></hr>
        <ul className="info-list">
          <li>E-mail: paulords95@gmail.com</li>
          <li>Tel.: (41) 99636-7447</li>
        </ul>
        <div className="footer-logos"></div>
      </div>
    </footer>
  );
};

export default Footer;
