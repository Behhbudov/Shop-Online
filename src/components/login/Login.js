import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import Navbar from "../navbar/Navbar";
import "./Login.css";

function Login() {
  const naviagte = useNavigate();

  const handleHome = () => {
    naviagte("/");
  };

  const handleRegister = () => {
    naviagte("/register");
  };

  const handleReset = () => {
    naviagte("/reset");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="login--info">
        <div>
          <h1>Daxil ol</h1>
          <div>
            <p
              onClick={() => {
                handleHome();
              }}
            >
              Ana səhifə
            </p>
            <span>•</span>
            <span>Daxil ol</span>
          </div>
        </div>
      </div>
      <div className="login">
        <form className="form">
          <h2>Daxil ol</h2>
          <p>İstifadəçi məlumatlarınızı daxil edin.</p>
          <input type="tel" placeholder="+994 (__) ___-__-__" />
          <input type="password" placeholder="Şifrə" />
          <span
            className="forgot--password"
            onClick={() => {
              handleReset();
            }}
          >
            Şifrəni unutmusan?
          </span>
          <Button className="button">Daxil ol</Button>
          <span>
            Hesabınız yoxdur?
            <span
              onClick={() => {
                handleRegister();
              }}
            >
              Qeydiyyatdan keçin
            </span>
          </span>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
