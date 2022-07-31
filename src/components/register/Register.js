import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import Navbar from "../navbar/Navbar";
import "./Register.css";

function Register() {
  const naviagte = useNavigate();

  const handleHome = () => {
    naviagte("/");
  };

  const handleLogin = () => {
    naviagte("/login");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="register--info">
        <div>
          <h1>Qeydiyyat</h1>
          <div>
            <p
              onClick={() => {
                handleHome();
              }}
            >
              Ana səhifə
            </p>
            <span>•</span>
            <span>Qeydiyyat</span>
          </div>
        </div>
      </div>
      <div className="register">
        <form className="form">
          <h2>Qeydiyyat</h2>
          <p>İstifadəçi məlumatlarınızı daxil edin.</p>
          <input type="tel" placeholder="+994 (__) ___-__-__" />
          <input type="password" placeholder="Şifrə" />
          <span className="agreement">
            Qeydiyyatdan keçərək istfadəçi qaydaları və şərtləri ilə razılaşmış
            olursunuz
          </span>
          <Button className="button">Qeydiyyatdan keç</Button>
          <span>
            Hesabınız var?
            <span
              onClick={() => {
                handleLogin();
              }}
            >
              Daxil olun
            </span>
          </span>
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
