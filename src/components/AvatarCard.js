import React, { useState } from 'react';
import UserPic from '../assets/img/userPic.svg'
import Like from '../assets/img/like.svg'
import Like_blue from '../assets/img/like_blue.svg'
import Dislike from '../assets/img/dislike.svg'
import Dislike_red from '../assets/img/dislike_red.svg'
import Copy from '../assets/img/copy.svg'
import Customize from '../assets/img/customize.svg'


export const AvatarCard = () => {
  const [likeImage, setLikeImage] = useState(Like);
  const [dislikeImage, setDislikeImage] = useState(Dislike);


  const handleLike = () => {
    const newLikeImage = likeImage === Like ? Like_blue : Like;
    setLikeImage(newLikeImage);
    
  }

  const handleDislike = () => {
    const newDislikeImage = dislikeImage === Dislike ? Dislike_red : Dislike;
    setDislikeImage(newDislikeImage);

  }
  
  return (
    <div className="avatarCard_container">
        <div className="avatar_image">
           <img src={UserPic} alt="user_avatar"/>
        </div>
        <div className="avatar_interactions">
            <span><img src={likeImage} alt="like" onClick={handleLike}/></span>
            <span><img src={dislikeImage} alt="dislike" onClick={handleDislike}/></span>
            <span><img src={Copy} alt="copy"/></span>
            <span><img src={Customize} alt="customize"/></span>
            
        </div>
    </div>
  )
}
