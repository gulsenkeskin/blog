import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../common/constants";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BaseUrl}auth/register`, inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
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
        {err && <p>{err}</p>}
        <span>
          Hesabınız var mı? <Link to="/login">Giriş Yapın</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
