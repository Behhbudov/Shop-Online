import React, { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import headerImage from "../../assets/images/headerImg.svg";
import "./Header.css";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const naviagte = useNavigate();

  const handleNavigation = () => {
    naviagte("/products");
  };
  return (
    <Fragment>
      <Navbar />
      <div className="header">
        <div className="header--container">
          <div>
            <h1>Shop Online ilə dünyadan evinizə.</h1>
            <span>
              Shop Online sadəcə mövsümə uyğun və istəyəcəyiniz məhsullar
              gətirir.
            </span>
            <Button
              onClick={() => {
                handleNavigation();
              }}
              className="button"
            >
              Məhsullar səhifəsinə keçid →
            </Button>
          </div>
          <div>
            <img src={headerImage} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
