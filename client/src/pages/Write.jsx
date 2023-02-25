import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Başlık" />
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
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Resim Yükle
          </label>
          <div className="buttons">
            <button>Taslak olarak kaydet</button>
            <button>Yayınla</button>
          </div>
        </div>
        <div className="item">
          <h1>Kategori</h1>
          <div className="cat">
            <input type="radio" name="cat" value="react" id="react" />
            <label htmlFor="react">React.js</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="flutter" id="flutter" />
            <label htmlFor="flutter">Flutter</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="net" id="net" />
            <label htmlFor="net">.Net Core</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="test" id="test" />
            <label htmlFor="test">Test</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="teknoloji" id="teknoloji" />
            <label htmlFor="teknoloji">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="kitap" id="kitap" />
            <label htmlFor="kitap">Kitap</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
