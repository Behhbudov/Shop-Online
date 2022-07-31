import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const naviagte = useNavigate();

  const handleCart = () => {
    naviagte("/cart");
  };

  const handleLogin = () => {
    naviagte("/login");
  };

  const handleRegister = () => {
    naviagte("/register");
  };

  const [dropDown, setDropDown] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(true);
  return (
    <div className="nav">
      <div className="nav--container">
        <div>
          <img src={Logo} alt="Kəndi Gətir Logo" />
        </div>
        <ul className={hiddenMenu ? "hidden" : ""}>
          <li>
            <span>Kateqoriya</span>
          </li>
          <li>
            <span>Haqqımızda</span>
          </li>
          <li>
            <span>Kampaniyalar</span>
          </li>
          <li>
            <span>Məhsullar</span>
          </li>
          <li>
            <span>Əlaqə</span>
          </li>
        </ul>
        <div className="actions">
          <span
            onClick={() => {
              handleCart();
            }}
            className="cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span className="user">
            <FontAwesomeIcon
              onClick={() => setDropDown(!dropDown)}
              icon={faCircleUser}
            />
            {dropDown && (
              <div className="sign">
                <span
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Daxil ol<div className="line"></div>
                </span>
                <span
                  onClick={() => {
                    handleRegister();
                  }}
                >
                  Qeydiyyatdan
                  <br />
                  keç<div className="line"></div>
                </span>
              </div>
            )}
          </span>
        </div>
        <span onClick={() => setHiddenMenu(!hiddenMenu)} className="burgerMenu">
          {hiddenMenu ? "☰" : "🗙"}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
