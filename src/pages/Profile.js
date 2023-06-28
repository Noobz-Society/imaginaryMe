import React, { useEffect, useState }from 'react'
import axios from 'axios';
import '../assets/css/Profile.css'
import { AvatarCard } from '../components/AvatarCard'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const uri = process.env.REACT_APP_URI;


const Profile = () => {


  const [avatarArray, setAvatarArray] = useState([]);
  const [svg, setSvg] = useState("");
  const token = cookies.get("TOKEN");
  const [firstAvatar, setFirstAvatar] = useState(null);
  const [likes, setLikes] = useState(null);
  
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  const userName = tokenData.name;
  const userEmail = tokenData.email;
  const userId = tokenData.id;

  const getUserAvatars = () => {
    
    const configuration = {
      method: "get",
      url: `${uri}/user/${userId}/avatars`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      
  };
  

    // make the API call
    axios(configuration)
    .then((result) => {
     
      setAvatarArray(result.data);
      //console.log(result.data)
      
      if (result.data.length > 0) {
        setFirstAvatar(result.data[0]);
      }
      
      const likesCount = result.data.reduce((totalLikes, avatar) => {
        return totalLikes + avatar.review.length;
      }, 0);

      setLikes(likesCount);

    
    })
    
    
    .catch((error) => {
      console.log(error)
    });

  
  }
    
   

    const getAvatar = () => {
      if (firstAvatar) {
          const configuration = {
            method: "get",
            url: `${uri}/avatar/${firstAvatar._id}`,
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
          
  }

  
  useEffect(() => {
    getUserAvatars();
    document.body.classList.add('profile-background');

    return () => {
      document.body.classList.remove('profile-background');
    
    };
  }, []);

  
  useEffect(() => {
    getAvatar();
  }, [firstAvatar]);
 

  return (
    <div className="profile_container">

      <div id="user_info">
          <div className="user_pic_container">
            <div dangerouslySetInnerHTML={{ __html: svg }} />
          </div>
  
         <div className="user_name_container">
           <p>{userName}</p>
         </div>
         <p>{userEmail}</p>
        <div id="user_edit">
          <p>Avatars: {avatarArray.length}</p>
          <p>Reviews: {likes}</p>
          <button><a href="/editUser">Edit user profile</a></button>
        </div>
         <div className="userAvatars_container">
          <div className="userAvatars_subcontainer">
          {
            avatarArray.map((avatar, index) => (
              <AvatarCard key={index} avatar={avatar} />
            ))
          }
          </div>
         </div>
      </div>

    </div>
  )
}

export default Profile
