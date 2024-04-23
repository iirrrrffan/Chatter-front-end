import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import "./followingList.css"

const FollowingList = () => {
  

  return (
    <div>
        <>
      <div className="mainF">
        <Sidebar />
        <div>
            <div
              className="friendListF"
              style={{ display: 'flex' }}
            >
              <img
                className="friendListImgF"
               src='https://i.pinimg.com/474x/86/68/64/866864e81fdf004999e673ce333eeadb.jpg'
              />
              <span className="friendListNameF">name</span>
            </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default FollowingList