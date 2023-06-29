import React, { useState, useEffect }from 'react'
import '../assets/css/AdminPanel.css';
import { AvatarCard } from '../components/AvatarCard';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();


const uri = process.env.REACT_APP_URI;

const AdminPanel = () => {
       
  const token = cookies.get("TOKEN");
  const [avatarArray, setAvatarArray] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

      
      const getAVatars = () => {
        const cacheBuster = Math.random();

        const configuration = {
          method: "get",
          url: `${uri}/avatar?cache=${cacheBuster}`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
      };
      // make the API call
      axios(configuration)
      .then((result) => {
        setAvatarArray(result.data)
       // console.log(result.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  useEffect(() => {
    document.body.classList.add('onlyWhite-header');
    getAVatars()


    return () => {
      document.body.classList.remove('onlyWhite-header');
    
    };
  }, []);

  useEffect(() => {
    if(isDeleted === true) {
      getAVatars()
      setIsDeleted(false);
    }
  },[isDeleted]);
  return (
    <div className="adminPanelContainer">
      <h2>Admin Panel</h2>
      <div className="adminPanel_subcontainer">

       {
            avatarArray.map((avatar, index) => (
              <AvatarCard key={index} avatar={avatar} setIsDeleted={setIsDeleted} />
            ))
          }
     </div>
    </div>
  )
}

export default AdminPanel
