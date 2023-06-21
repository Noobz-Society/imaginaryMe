import React from 'react'
import UserPic from '../assets/img/userPic.svg'
import Like from '../assets/img/like.svg'
import Dislike from '../assets/img/dislike.svg'
import Copy from '../assets/img/copy.svg'
import Customize from '../assets/img/customize.svg'


export const AvatarCard = () => {
  return (
    <div className="avatarCard_container">
        <div className="avatar_image">
           <img src={UserPic} alt="user_avatar"/>
        </div>
        <div className="avatar_interactions">
            <span><img src={Like} alt=""/></span>
            <span><img src={Dislike} alt=""/></span>
            <span><img src={Copy} alt=""/></span>
            <span><img src={Customize} alt=""/></span>
            
        </div>
    </div>
  )
}
