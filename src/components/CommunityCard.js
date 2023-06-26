import React, { useState, useEffect } from 'react';
import UserPic from '../assets/img/userPic.svg'
import Like from '../assets/img/like.svg'
import Like_blue from '../assets/img/like_blue.svg'
import Dislike from '../assets/img/dislike.svg'
import Dislike_red from '../assets/img/dislike_red.svg'
import Copy from '../assets/img/copy.svg'
import Customize from '../assets/img/customize.svg'
import axios from 'axios';
const uri = process.env.REACT_APP_URI;



export const CommunityCard = () => {
 
    const [likeImage, setLikeImage] = useState(Like);
    const [dislikeImage, setDislikeImage] = useState(Dislike);
    //const [svg, setSvg] = useState("");
  
  
  
    const handleLike = () => {
      const newLikeImage = likeImage === Like ? Like_blue : Like;
      setLikeImage(newLikeImage);
      
    }
  
    const handleDislike = () => {
      const newDislikeImage = dislikeImage === Dislike ? Dislike_red : Dislike;
      setDislikeImage(newDislikeImage);
  
    }
  
    /*
  
    const getAvatar = () => {
      const configuration = {
        method: "post",
        url: `${uri}/avatar/create`,
        data: [
          {
            variation: avatarAttributes[0].variation,
            color: avatarAttributes[0].color
          },
          {
            variation: avatarAttributes[1].variation,
            color: avatarAttributes[1].color,
          },
          {
            variation: avatarAttributes[2].variation,
            color: avatarAttributes[2].color,
          },
          {
            variation: avatarAttributes[3].variation,
            color: avatarAttributes[3].color,
          },
          {
            variation: avatarAttributes[4].variation,
            color: avatarAttributes[4].color,
          }
        ],
    };
    // make the API call
    axios(configuration)
    .then((result) => {
      setSvg(result.data)
    })
    .catch((error) => {
      console.log(error)
    });
  
          
    }
  
    useEffect(() => {
      getAvatar()
    })
  */
    
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

  
