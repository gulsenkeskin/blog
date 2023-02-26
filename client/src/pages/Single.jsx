import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import axios from "axios";
import { BaseUrl, DEFAULT_PROFILE_URL } from "../common/constants";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import Menu from "../components/Menu";

const Single = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseUrl}posts/${postId}`);
        setPost(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${BaseUrl}posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />

        <div className="user">
          {post?.userImg ? (
            <img src={post?.userImg} alt="" />
          ) : (
            <img src={DEFAULT_PROFILE_URL} alt="" />
          )}
          <div className="info">
            <span>{post?.username}</span>
            <p>{moment(post?.date).fromNow()} önce paylaşıldı</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="edit"></img>
              </Link>
              <img src={Delete} onClick={handleDelete} alt="delete"></img>
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        {getText(post?.desc)}
      </div>
      <Menu cat={post?.cat}></Menu>
    </div>
  );
};

export default Single;
