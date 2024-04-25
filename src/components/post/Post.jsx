import React from 'react'
import "./post.css"

const Post = () => {
  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
         
            <img
              className="postProfileImg"
             
              alt=""
            />
          
          <span className="postUsername">username</span>
          <span className="postDate">time</span>
        </div>
        <div className="postTopRight">
          
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">post</span>
        <img className="postImg" src='https://i.pinimg.com/736x/8c/b2/2d/8cb22d8ead9b13c226cbff599b35331c.jpg' />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src='https://i.pinimg.com/474x/f8/2b/b1/f82bb1b3bb1df050238910c0f8632491.jpg'
          />
          <img
           src='https://i.pinimg.com/474x/f8/2b/b1/f82bb1b3bb1df050238910c0f8632491.jpg'
          />
          <span className="postLikeCounter">0 people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">0 comments</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post