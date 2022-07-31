import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import Navbar from "../navbar/Navbar";
import "./ForgotPassword.css";

function Login() {
  const naviagte = useNavigate();

  const handleHome = () => {
    naviagte("/");
  };

  const handleRegister = () => {
    naviagte("/register");
  };

  const handleLogin = () => {
    naviagte("/login");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="reset--info">
        <div>
          <h1>Şifrəni yenilə</h1>
          <div>
            <p
              onClick={() => {
                handleHome();
              }}
            >
              Ana səhifə
            </p>
            <span>•</span>
            <span
              onClick={() => {
                handleLogin();
              }}
            >
              Daxil ol
            </span>
            <span>•</span>
            <span>Şifrəni yenilə</span>
          </div>
        </div>
      </div>
      <div className="login">
        <form className="form">
          <h2>Şifrəni unutmusunuz?</h2>
          <p>Nömrənizi daxil edin.</p>
          <input type="tel" placeholder="+994 (__) ___-__-__" />
          <Button className="button">Göndər</Button>
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
