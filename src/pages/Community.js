import React, { useState, useEffect }from 'react'
import '../assets/css/Community.css'
import { CommunityCard } from '../components/CommunityCard';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();


const uri = process.env.REACT_APP_URI;

export default function Community() {
  const token = cookies.get("TOKEN");

  const [avatarArray, setAvatarArray] = useState([]);
 

  const getAVatars = () => {

    const configuration = {
      method: "get",
      url: `${uri}/avatar`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
  };
  // make the API call
  axios(configuration)
  .then((result) => {
    setAvatarArray(result.data)
    console.log(result.data)
  })
  .catch((error) => {
    console.log(error)
  });

}

useEffect(() => {
  document.body.classList.add('white-background');
  getAVatars();

  return () => {
    document.body.classList.remove('white-background');
  
  };
}, []);


  return (
      <div className="community_container">
        <div className="community_subcontainer">
          {
            avatarArray.map((avatar, index) => (
              <CommunityCard key={index} avatar={avatar} />
            ))
          }
      </div>
      </div>
  );
}
