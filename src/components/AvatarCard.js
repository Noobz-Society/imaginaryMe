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


export const AvatarCard = ({ avatar }) => {
  const token = cookies.get("TOKEN");


  const navigate = useNavigate();

  const [svg, setSvg] = useState("");



  

  const avatarAttributes = avatar.attributes;

  const bodyVariant = avatarAttributes[0].variation;
  const bodyColor = avatarAttributes[0].color;
  const eyesVariant = avatarAttributes[1].variation;
  const eyesColor = avatarAttributes[1].color;
  const noseVariant = avatarAttributes[2].variation;
  const mouthVariant = avatarAttributes[3].variation;
  const eyebrowsVariant = avatarAttributes[4].variation;
  const eyebrowsColor = avatarAttributes[4].color;
  const hairVariant = avatarAttributes[5].variation;
  const hairColor = avatarAttributes[5].color;
  const clotheVariant = avatarAttributes[5].variation;
  const clotheColor = avatarAttributes[5].color;
  
  

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
    console.log(result.data)
    setSvg(result.data.svg)
  })
  .catch((error) => {
    console.log(error)
  });

  }

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
    queryParams.append('hairVariant', hairVariant);
    queryParams.append('hairColor', hairColor);
    queryParams.append('clotheVariant', clotheVariant);
    queryParams.append('clotheColor', clotheColor);
    
    navigate(`/create?${queryParams.toString()}`);

  }

  useEffect(() => {
    getAvatar()
  })

  if (!avatar) {
    return (
      <div className="avatarCard_container">
          <div className="avatar_image">
             <img src={UserPic} alt="user_avatar"/>
          </div>
          <div className="avatar_interactions">
              <span onClick={download}><img src={Copy} alt="copy"/></span>
              <span onClick={handleCustomize}><img src={Customize} alt="customize"/></span>
              
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
              <span onClick={download}><img src={Copy} alt="copy"/></span>
              <span onClick={handleCustomize}><img src={Customize} alt="customize"/></span>
            
        </div>
    </div>
  )
}
