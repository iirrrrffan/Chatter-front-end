import React from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./post.css"

const Post = () => {
  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <Link to={`/profile`}>
            <img
              className="postProfileImg"
              src="https://i.pinimg.com/564x/1d/f1/43/1df143603c7a9f51f3e8348f0ede6277.jpg"
              alt=""
            />
          </Link>
          <span className="postUsername">edrftgyunm</span>
          <span className="postDate">time</span>
        </div>
        <div className="postTopRight">
          <MoreVertIcon/>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">drftgyu</span>
        <img className="postImg" src="https://i.pinimg.com/474x/c1/86/c8/c186c89ed17db6677ae7d2c1f9592b25.jpg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src="https://i.pinimg.com/474x/8e/c8/51/8ec85163837cfae50c61a82b5db8e35b.jpg"
          
            alt=""
          />
          <img
            className="likeIcon"
            src="https://i.pinimg.com/474x/19/e7/0e/19e70ea80610f8cc651846f68fab9256.jpg"
            alt=""
          />
          <span className="postLikeCounter">people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText"> comments</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post