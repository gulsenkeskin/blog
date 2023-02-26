import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BaseUrl } from "../common/constants";

const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${BaseUrl}upload`, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`${BaseUrl}posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`${BaseUrl}posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Başlık"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Yayınla</h1>
          <span>
            <b>Durum: </b> Taslak
          </span>
          <span>
            <b>Görünürlük: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Resim Yükle
          </label>
          <div className="buttons">
            <button>Taslak olarak kaydet</button>
            <button onClick={handleClick}>Yayınla</button>
          </div>
        </div>
        <div className="item">
          <h1>Kategori</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "react"}
              name="cat"
              value="react"
              id="react"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="react">React.js</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "flutter"}
              name="cat"
              value="flutter"
              id="flutter"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="flutter">Flutter</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={cat === "net"}
              value="net"
              id="net"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="net">.Net Core</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="test"
              checked={cat === "test"}
              id="test"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="test">Test</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={cat === "teknoloji"}
              value="teknoloji"
              id="teknoloji"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="teknoloji">Teknoloji</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={cat === "kitap"}
              value="kitap"
              id="kitap"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="kitap">Kitap</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
