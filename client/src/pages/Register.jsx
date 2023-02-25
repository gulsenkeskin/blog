import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BaseUrl } from "../common/constants";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BaseUrl}auth/register`, inputs);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth">
      <h1>Kayıt ol</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="kullanıcı adı"
          onChange={handleChange}
        ></input>
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        ></input>
        <input
          required
          type="password"
          name="password"
          placeholder="şifre"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Giriş Yap</button>
        <p>Kullanıcı bulunamadı</p>
        <span>
          Hesabınız var mı? <Link to="/login">Giriş Yap</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
