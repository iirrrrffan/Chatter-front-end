import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import"./post.css"

const Post = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://api.chatterchating.site/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fullPostView">
      <button className="closeButton" onClick={() => navigate(-1)}>X</button>
      <img className="fullPostImage" src={post?.image} alt="Post" />
      <div className="fullPostContent">
      </div>
    </div>
  );
};

export default Post;
