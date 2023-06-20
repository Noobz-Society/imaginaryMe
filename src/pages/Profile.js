import React, { useEffect }from 'react'
import '../css/Profile.css'


const Profile = () => {
    useEffect(() => {
      document.body.classList.add('profile-background');
  
      return () => {
        document.body.classList.remove('profile-background');
      
      };
    }, []);

  return (
    <div className="profile_container">

      <div id="user_info">
          <div className="user_avatar_container">
            <img src="#" alt="user-profile"/>
          </div>
  
         <div className="user_name_container">
           <p>Jhon Doe</p>
         </div>
         <span>doe@gmail.com</span>

         <div className="userAvatars_container">

         </div>
      </div>

    </div>
  )
}

export default Profile
