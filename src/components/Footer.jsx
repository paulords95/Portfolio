import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer id="footerSection" className="footer">
      <div className="footer-info">
        <h1 className="footer-title"></h1>
        <hr></hr>
        <ul className="info-list">
          <li>contato@paulo.dev.br</li>
        </ul>
        <hr style={{ marginTop: 40 }}></hr>
        <div className="footer-logos"></div>
        <h1 className="year">2021</h1>
      </div>
    </footer>
  );
};

export default Footer;
