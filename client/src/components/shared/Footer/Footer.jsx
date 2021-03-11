import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Githublogo from "../../../assets/Githublogo.png";
import drlogo from "../../../assets/drlogo.png";
import Linkedinlogo from "../../../assets/Linkedinlogo.png";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <h1 className="footer-h1">Neighbor.ly</h1>
      </Link>
      <div className="three-logos">
        <div className="first-one">
          <img src={Githublogo} />
          <a href="https://github.com/dantheman491/Neighbor.ly"></a>
        </div>
        <div className="second-one">
          <a href="https://www.linkedin.com/in/danielatilio/"></a>
          <img src={Linkedinlogo} />
        </div>
        <div className="third-one">
          <a href="https://www.danielramirez.design/"></a>
          <img src={drlogo} />
        </div>
      </div>
      <div className="footer-text">
        <h4 className="footer-h4">Daniel Ramirez 2021</h4>
        <div>
          <a
            className="footer-a"
            href="https://github.com/dantheman491"
            target="blank"
          >
            {/* <i className="fab fa-github"></i> &nbsp; Daniel Ramirez */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
