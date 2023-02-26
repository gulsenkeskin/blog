import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BaseUrl } from "../common/constants";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseUrl}posts${cat}`);
        setPosts(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                  <button>Daha fazla oku</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
