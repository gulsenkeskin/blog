import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Kayıt ol</h1>
      <form>
        <input type="text" placeholder="kullanıcı adı"></input>
        <input type="password" placeholder="şifre"></input>
        <button>Giriş Yap</button>
        <p>Kullanıcı bulunamadı</p>
        <span>
          Hesabınız var mı? <Link to="/login">Giriş Yap</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
