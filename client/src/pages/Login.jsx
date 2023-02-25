import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Giriş Yap</h1>
      <form>
        <input type="text" placeholder="kullanıcı adı"></input>
        <input type="password" placeholder="şifre"></input>
        <button>Giriş Yap</button>
        <p>Kullanıcı bulunamadı</p>
        <span>
          Hesabınız yok mu? <Link to="/register">Kayıt ol</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
