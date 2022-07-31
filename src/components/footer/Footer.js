import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/images/logo-white.svg";
import { faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <div className="footer--container">
        <div className="single--div">
          <div className="footer--logo">
            <div>
              <img src={FooterLogo} alt="Footer Logo" />
            </div>
            <h3 className="h3">Shop Online</h3>
          </div>
        </div>
        <div className="single--div">
          <h3>Bizi izləyin</h3>
          <div>
            <FontAwesomeIcon className="brand" icon={faLinkedin} />
            <FontAwesomeIcon className="brand" icon={faFacebookF} />
          </div>
        </div>
        <div className="single--div">
          <h3>Əlaqə</h3>
          <span>+994501234567</span>
          <span>shoponline@gmail.com</span>
        </div>
        <div className="single--div">
          <h3>Ünvan</h3>
          <span>
            Nərimanov metrosu-Ağa Nemətulla 67 (Akkord plaza ilə üzbəüz)
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
