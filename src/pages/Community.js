import React, { useState, useEffect }from 'react'
import '../assets/css/Community.css'
import { CommunityCard } from '../components/CommunityCard';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();


const uri = process.env.REACT_APP_URI;

export default function Community() {
  const token = cookies.get("TOKEN");

  const [svg, setSvg] = useState("");
 

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14];

  const getAVatars = () => {

    const configuration = {
      method: "get",
      url: `${uri}/avatar/all`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
  };
  // make the API call
  axios(configuration)
  .then((result) => {
    console.log(result.data)
    //setSvg(result.data)
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
            cards.map((card, index) => (
              <CommunityCard key={index} card={card} />
            ))
          }
      </div>
      </div>
  );
}
