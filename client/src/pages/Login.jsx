import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../common/constants";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Giriş Yap</h1>
      <form>
        <input
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="kullanıcı adı"
        ></input>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="şifre"
        ></input>
        <button onClick={handleSubmit}>Giriş Yap</button>
        {err && <p>{err}</p>}
        <span>
          Hesabınız yok mu? <Link to="/register">Kayıt ol</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
