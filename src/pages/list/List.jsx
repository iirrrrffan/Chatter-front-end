import React from 'react'
import FriendList from '../../components/friedsLsit/FriendList'
import Topbar from '../../components/topbar/Topbar'
import "./list.css"


const List = () => {
  return (
    <div className='mainlist'>
      <Topbar/>
        <FriendList/>
    </div>
  )
}

export default List