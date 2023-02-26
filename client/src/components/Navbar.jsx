import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Categories } from "../common/constants";
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
          {Object.values(Categories).map((category) => {
            return (
              <Link className="link" to={`/?cat=${category.value}`}>
                <h6>{category.text}</h6>
              </Link>
            );
          })}

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
