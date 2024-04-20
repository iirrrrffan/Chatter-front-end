import React from 'react'
import FriendList from '../../components/friedsLsit/FriendList'
import Topbar from '../../components/topbar/Topbar'
import "./list.css"


const List = () => {
  return (
    <div>
      <Topbar/>
        <FriendList/>
    </div>
  )
}

export default List