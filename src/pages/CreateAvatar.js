import React, { useState, useEffect } from 'react';
import '../assets/css/CreateAvatar.css'
import VariantSelector from '../components/VariantsSelector'
import ColorSelector from '../components/ColorSelector'
import Canvas from '../components/Canvas'
import AttributesSelector from '../components/AttributesSelector'
import RandomizeButton from '../assets/img/random.svg'
import axios from 'axios';

const uri = process.env.REACT_APP_URI;


export default function CreateAvatar() {
  const [svg, setSvg] = useState("");
  useEffect(() => {

    const configuration = {
      method: "post",
      url: `${uri}/avatar/create`,
      data: [
        {
          variation: "64943f502d9bc32598a3706b",
          color: "#fbe0cf"
        },
        {
          variation: '64944b9edea8c6aa848b713a',
          color: '#00f',
        },
        {
          variation: "6494513e7c1939556fd695c2",
          color: null,
          colorless: true
        },
        {
          variation: "64954da228eb0d9386e7507b",
          color: null,
          colorless: true
        }

      ],
    };

  // make the API call
  axios(configuration)
  .then((result) => {
    setSvg(result.data)
  
  })
  
  
  .catch((error) => {
    console.log(error)
  });


  }, [])

  useEffect(() => {
    document.body.classList.add('createAvatar-background');

    return () => {
      document.body.classList.remove('createAvatar-background');
    
    };
  }, []);
  
  return (
      <div className="createAvatar_container">
        <div className="createAvatar_subcontainer">
        <AttributesSelector />
          <Canvas imgSrc={svg} />
          <div className="createAvatar_buttons_container">
            <span className="createAvatar_buttons"><img src={RandomizeButton} alt="randomize-icon"/></span>

            <span className="createAvatar_buttons"><i class="lni lni-checkmark"></i></span>
          </div>
          <ColorSelector />
       </div>
       <VariantSelector />
    </div>
  );
}
