import React, { useState, useEffect } from 'react';
import UserPic from '../assets/img/userPic.svg'
import Like from '../assets/img/like.svg'
import Like_blue from '../assets/img/like_blue.svg'
import Dislike from '../assets/img/dislike.svg'
import Dislike_red from '../assets/img/dislike_red.svg'
import Copy from '../assets/img/copy.svg'
import Customize from '../assets/img/customize.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Cookies from "universal-cookie";
const cookies = new Cookies();



const uri = process.env.REACT_APP_URI;



export const CommunityCard = ({ avatar }) => {

    const token = cookies.get("TOKEN");

    const navigate = useNavigate();
 
    const [likeImage, setLikeImage] = useState(Like);
    const [dislikeImage, setDislikeImage] = useState(Dislike);
    const [svg, setSvg] = useState("");

    const [likes, setLikes]  = useState(null);
  
  
    const handleLike = (id) => {
      const newLikeImage = likeImage === Like ? Like_blue : Like;
      setLikeImage(newLikeImage);

    
    const  url =  `${uri}/avatar/${id}/like`;
 

    const requestBody = {
      name: 'avatar',
      value: 1,
      
    };
  
     
   // make the API call
    axios.post(url, requestBody, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    .then((result) => {
      
    
    })
    
    
    .catch((error) => {
      console.log(error)
    });

      
    }
  
    const handleDislike = () => {
      const newDislikeImage = dislikeImage === Dislike ? Dislike_red : Dislike;
      setDislikeImage(newDislikeImage);
  
    }

    const avatarAttributes = avatar.attributes;

    const bodyVariant = avatarAttributes[0].variation;
    const bodyColor = avatarAttributes[0].color;
    const eyesVariant = avatarAttributes[1].variation;
    const eyesColor = avatarAttributes[1].color;
    const noseVariant = avatarAttributes[2].variation;
    const mouthVariant = avatarAttributes[3].variation;
    const eyebrowsVariant = avatarAttributes[4].variation;
    const eyebrowsColor = avatarAttributes[4].color;
    const clotheVariant = avatarAttributes[5].variation;
    const clotheColor = avatarAttributes[5].color;
    const hairVariant = avatarAttributes[6].variation;
    const hairColor = avatarAttributes[6].color;
    
  
    const getAvatar = () => {
      const configuration = {
        method: "get",
        url: `${uri}/avatar/${avatar._id}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
    };
    // make the API call
    axios(configuration)
    .then((result) => {
      setSvg(result.data.svg)
    })
    .catch((error) => {
      console.log(error)
    });
  
          
    }
  
    useEffect(() => {
       getAvatar();
       setLikes(avatar.likes)
      console.log(avatar)
     
    },[])

  

    const download = () => {
    
      const element = document.createElement("a");
      const file = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
      element.href = URL.createObjectURL(file);
      element.download = "avatar.svg";
      element.click();
      
    }

    const handleCustomize = () => {
    
      const queryParams = new URLSearchParams();
      queryParams.append('bodyVariant', bodyVariant);
      queryParams.append('bodyColor', bodyColor);
      queryParams.append('eyesVariant', eyesVariant);
      queryParams.append('eyesColor', eyesColor);
      queryParams.append('noseVariant', noseVariant);
      queryParams.append('mouthVariant', mouthVariant);
      queryParams.append('eyebrowsVariant', eyebrowsVariant);
      queryParams.append('eyebrowsColor', eyebrowsColor);
      queryParams.append('hairVariant', clotheVariant);
      queryParams.append('hairColor', clotheColor);
      queryParams.append('hairVariant', hairVariant);
      queryParams.append('hairColor', hairColor);
      
      
      navigate(`/create?${queryParams.toString()}`);
  
    }

    if (!avatar) {
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
  
    
      return (
        <div className="avatarCard_container">
            <div className="avatar_image">
             <div dangerouslySetInnerHTML={{ __html: svg }} />
            </div>
            <div className="avatar_interactions">
                <span className="review_value"><div id="like_container">{likes}</div><img src={likeImage} alt="like" onClick={() => handleLike(avatar._id)}/></span>
                <span><img src={dislikeImage} alt="dislike" onClick={handleDislike}/></span>
                <span onClick={download}><img src={Copy} alt="copy"/></span>
                <span onClick={handleCustomize}><img src={Customize} alt="customize"/></span>
                
            </div>
        </div>
      )
    }

  
