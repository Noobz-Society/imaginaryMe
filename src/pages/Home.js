import React, { useState, useEffect } from 'react';
import '../assets/css/Home.css'
import BottomElipse from '../assets/img/bottomElipse.svg'
import BottomCircle from '../assets/img/bottomCircle.svg'
import axios from 'axios';

const uri = process.env.REACT_APP_URI;



const Home = () => {
  const [svg, setSvg] = useState("");

  const randomAvatar = () => {
        const configuration = {
          method: "get",
          url: `${uri}/avatar/create`,
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
    
      randomAvatar();
  }, [])

  
  
  return (
    <div id="home_container">
      <div className="flex_container">
          <div id="home_left_section">
            <div id="circle"></div>
             <div id="example_container"><div dangerouslySetInnerHTML={{ __html: svg }} /></div>
          </div>
          <div id="home_right_section">
            <p>Create personalized avatars effortlessly! Our website offers a diverse range of customization options for unique and stunning avatar creations. Try it now!</p>
            <div className="centered_button">
            <a href="/create"><button className="white-button" id="started_button">Get Started !</button></a>
            </div>
          </div>
      </div>
      <img src={BottomElipse} alt="bottomElipse" id="bottom_elipse"/>
      <img src={BottomCircle} alt="bottomElipse" id="bottom_circle"/>

      
    </div>
  )
}

export default Home
