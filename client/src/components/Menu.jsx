import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../common/constants";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseUrl}posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Beğenebileceğiniz diğer gönderiler</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt=""></img>
          <h2>{post.title}</h2>
          <button>Daha Fazla</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
