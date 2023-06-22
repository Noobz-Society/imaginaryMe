import React from 'react'
import { useEffect } from 'react';
import '../assets/css/EditUser.css'
import Cookies from "universal-cookie";
const cookies = new Cookies();


const EditUser = () => {
    useEffect(() => {
        document.body.classList.add('onlyWhite-header');
    
        return () => {
          document.body.classList.remove('onlyWhite-header');
        
        };
      }, []);

      const token = cookies.get("TOKEN");

      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const userName = tokenData.name;
      const userEmail = tokenData.email;
  
  return (
    <div className="editUser_container">
        <form>
            <label for="name">Name: </label>
            <input type="text" name="name" placeholder={userName}/>
            <label for="email">E-mail: </label>
            <input type="email" name="email" placeholder={userEmail}/>
            <input type="submit" value="update"/>

        </form>

    </div>
  )
}

export default EditUser
