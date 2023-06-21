import React, { useEffect }from 'react'
import '../assets/css/Profile.css'
import { AvatarCard } from '../components/AvatarCard'
import UserPic from '../assets/img/userPic.svg'


const Profile = () => {
    useEffect(() => {
      document.body.classList.add('profile-background');
  
      return () => {
        document.body.classList.remove('profile-background');
      
      };
    }, []);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="profile_container">

      <div id="user_info">
          <div className="user_pic_container">
            <img src={UserPic} alt="user-profile"/>
          </div>
  
         <div className="user_name_container">
           <p>Admin</p>
         </div>
        <div id="user_edit">
          <p>Avatars: 10</p>
          <p>Likes: 42</p>
          <button><a href="/editUser">Edit user profile</a></button>
        </div>
         <div className="userAvatars_container">
          <div className="userAvatars_subcontainer">
          {
            cards.map((card, index) => (
              <AvatarCard key={index} card={card} />
            ))
          }
          </div>
         </div>
      </div>

    </div>
  )
}

export default Profile
