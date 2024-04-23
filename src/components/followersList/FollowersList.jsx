import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios';


const FollowersList = () => {
    const [user, setUser] = useState(null);
    const [followersList, setFollowersList] = useState([]);

    useEffect(() => {
        const storedUser = window.localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);

      useEffect(()=>{
        const fetchList = async()=>{
            try {
                const res = await axios.get(`http://localhost:3006/api/auth/followingList/${user._id}`)
                setFollowersList(res.data.followingList)
            } catch (error) {
                console.log(error,"fetchingList error");
            }
          }
          fetchList()
      },[user])

  return (
    <div>
<>
      <div className="mainF">
        <Sidebar />
        <div>
            {followersList.map((followers)=>(
            <div key={followers._id} 
              className="friendListF"
              style={{ display: 'flex' }}
            >
              <img
                className="friendListImgF"
               src={followers.profilePicture || 'https://i.pinimg.com/474x/4a/88/91/4a8891e05c016137daca400e23175f58.jpg'}
               alt={followers.username}
              />
              <span className="friendListNameF">{followers.username}</span>
            </div>
            ))}
        </div>
      </div>
    </>

    </div>
  )
}

export default FollowersList