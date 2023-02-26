import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=react">
            <h6>REACT.JS</h6>
          </Link>
          <Link className="link" to="/?cat=flutter">
            <h6>FLUTTER</h6>
          </Link>
          <Link className="link" to="/?cat=net">
            <h6>.NET CORE</h6>
          </Link>
          <Link className="link" to="/?cat=test">
            <h6>TEST</h6>
          </Link>
          <Link className="link" to="/?cat=teknoloji">
            <h6>TEKNOLOJİ</h6>
          </Link>
          <Link className="link" to="/?cat=kitap">
            <h6>KİTAP</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Çıkış Yap</span>
          ) : (
            <Link className="link" to="/login">
              Giriş Yap
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              YAZ
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
