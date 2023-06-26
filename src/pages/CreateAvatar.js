import React, { useState, useEffect, useContext } from 'react';
import '../assets/css/CreateAvatar.css'
import VariantSelector from '../components/VariantsSelector'
import ColorSelector from '../components/ColorSelector'
import Canvas from '../components/Canvas'
import AttributesSelector from '../components/AttributesSelector'
import RandomizeButton from '../assets/img/random.svg'
import axios from 'axios';
import { AuthContext } from '../AuthContext'

import Cookies from "universal-cookie";
const cookies = new Cookies();

const uri = process.env.REACT_APP_URI;



export default function CreateAvatar() {
  const token = cookies.get("TOKEN");
  const { isLoggedIn } = useContext(AuthContext);
  const [avatarSavedText, setAvatarSavedText] = useState("");
  const [svg, setSvg] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [variants, setVariants] = useState();

  const [attributeSelected, setAttributeSelected] = useState("");
  
  const [body_variant, setBody_variant] = useState("64943f502d9bc32598a3706b");
  const [body_color, setBody_color] = useState("#FBE0CF");
  const [eyes_variant, setEyes_variant] = useState("64944b9edea8c6aa848b713a");
  const [eyes_color, setEyes_color] = useState("#00f");
  const [nose_variant, setNose_variant] = useState("64997b7ebcf4edff4f291f5f");
  const [mouth_variant, setMouth_variant] = useState("64997b97bcf4edff4f291f65");
  const [eyebrows_variant, setEyebrows_variant] = useState("64997baabcf4edff4f291f6d");
  const [eyebrows_color, setEyebrows_color] = useState("#FF0");

  const [avatarSaved, setAvatarSaved] = useState(false);
  const [shouldConstructAvatar, setShouldConstructAvatar] = useState(true);
  const [resize, setResize] = useState(false);
  



  const getKeyById = (array, id) => {
    const item = array.find(obj => obj._id === id);
    return item ? item.key : null;
  };

  const handleVariantSelect = (id) => {
        const configuration = {
          method: "get",
          url: `${uri}/attribute`,
          
      };
       if(body_variant && eyes_variant && nose_variant && mouth_variant && eyebrows_variant) {

        

        // make the API call
        axios(configuration)
        .then((result) => {

         let attributeKey = (getKeyById(result.data, attributeSelected));

         if(attributeKey === "body"){
          setBody_variant(id);

         }else if(attributeKey === "eyes") {
          setEyes_variant(id);

         }else if(attributeKey === "nose") {
          setNose_variant(id);
          
         }else if(attributeKey === "mouth") {
          setMouth_variant(id);
          
         }else if(attributeKey === "eyebrows") {
          setEyebrows_variant(id)
          
         }else {

         }
         
        
        })
        
        
        .catch((error) => {
          console.log(error)
        });

      }else {
        
      }
      
  }

  const handleColorSelect = (color) => {
    const configuration = {
      method: "get",
      url: `${uri}/attribute`,
      
  };

    // make the API call
    axios(configuration)
    .then((result) => {
     
     let attributeKey = (getKeyById(result.data, attributeSelected));

     if(attributeKey === "body"){
      setBody_color(color)

     }else if(attributeKey === "eyes") {
      setEyes_color(color)
      
     }else if(attributeKey === "eyebrows") {
      setEyebrows_color(color)
      
     }else {

     }
     
    
    })
    
    
    .catch((error) => {
      console.log(error)
    });
  
}
  

  const getAttributes = () => {

    const configuration = {
      method: "get",
      url: `${uri}/attribute`,
      
  };

  // make the API call
  axios(configuration)
  .then((result) => {
    setAttributes(result.data);
  
  })
  
  
  .catch((error) => {
    console.log(error)
  });

  }

  const getVariants = (attributeId) => {

        const configuration = {
          method: "get",
          url: `${uri}/attribute`,
          
      };

      // make the API call
      axios(configuration)
      .then((result) => {
       
       
         for (const element of result.data) {
           if (element._id === attributeId) {
             setVariants(element);
             break;
           }
          }
      
      })
      
      
      .catch((error) => {
        console.log(error)
      });

  }

  const handleAttributeSelect = (id) => {
    setAttributeSelected(id);
    getVariants(id)

  }

  const constructAvatar = () => {
    if (shouldConstructAvatar) {
    const configuration = {
      method: "post",
      url: `${uri}/avatar/create`,
      data: [
        {
          variation: body_variant,
          color: body_color
        },
        {
          variation: eyes_variant,
          color: eyes_color,
        },
        {
          variation: nose_variant,
          color: null,
          colorless: true
        },
        {
          variation: mouth_variant,
          color: null,
          colorless: true
        },
        {
          variation: eyebrows_variant,
          color: eyebrows_color,
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

}
}

const randomAvatar = () => {
  setShouldConstructAvatar(false);
  const configuration = {
    method: "get",
    url: `${uri}/avatar/create`,
};
// make the API call
axios(configuration)
.then((result) => {
  let attributes = result.data.attributes;

  //set the attributes
  setBody_variant(attributes[0]._id);
  setEyes_variant(attributes[1]._id);
  setNose_variant(attributes[2]._id);
  setMouth_variant(attributes[3]._id);
  setEyebrows_variant(attributes[4]._id);


  setBody_color(attributes[0].color);
  setEyes_color(attributes[1].color);
  setEyebrows_color(attributes[4].color);
  setSvg(result.data.svg)

  console.log(attributes)
  
})
.catch((error) => {
  console.log(error)
});


}

const saveAvatar = () => {
  const  url =  `${uri}/user/save-avatar`;

      const requestBody = {
        name: 'avatar',
        isPublic: true,
        attributes: [
          {
            variation: body_variant,
            color: body_color
          },
          {
            variation: eyes_variant,
            color: eyes_color,
          },
          {
            variation: nose_variant,
            color: null,
          },
          {
            variation: mouth_variant,
            color: null,
          },
          {
            variation: eyebrows_variant,
            color: eyebrows_color,
          }

        ],
      };
    
       
     // make the API call
      axios.post(url, requestBody, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      .then((result) => {
        
       // console.log(result)
      
      })
      
      
      .catch((error) => {
        console.log(error)
      });

 
}


  useEffect(() => {
    document.body.classList.add('createAvatar-background');
    handleAttributeSelect("64943f502d9bc32598a3706a")
    constructAvatar();
    getAttributes();
    return () => {
      document.body.classList.remove('createAvatar-background');
    
    };
  }, []);

 const handleValidate = () => {
  setAvatarSaved(true)
  if(!isLoggedIn) {
    setAvatarSavedText("You are not logged in, your avatar will not be saved")
    

  }else {
    saveAvatar();
    setAvatarSavedText("Avatar saved")
   

  }
  
  /*
  const element = document.createElement("a");
  const file = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  element.href = URL.createObjectURL(file);
  element.download = "avatar.svg";
  element.click();
  setAvatarSaved(true);
  */
};

const download = () => {
  const element = document.createElement("a");
  const file = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  element.href = URL.createObjectURL(file);
  element.download = "avatar.svg";
  element.click();
  setAvatarSaved(true);

}


  
  return (
      <div className="createAvatar_container">
        <div className="createAvatar_subcontainer">
        <AttributesSelector attributesArray={attributes} handleAttributeSelect={handleAttributeSelect} setAvatarSaved={setAvatarSaved} />
          <Canvas imgSrc={svg} />
          <div className="createAvatar_buttons_container">
            <span className="createAvatar_buttons" onClick={() =>randomAvatar()}><img src={RandomizeButton} alt="randomize-icon"/></span>

            <span className="createAvatar_buttons" onClick={handleValidate}><i class="lni lni-checkmark"></i></span>
          </div>
          <ColorSelector variants={variants} handleColorSelect={handleColorSelect} constructAvatar={constructAvatar} setShouldConstructAvatar={setShouldConstructAvatar} setAvatarSaved={setAvatarSaved}/>
       </div>
       {avatarSaved && <div id="saved"><p id="saved_text">{avatarSavedText}</p>
        <button  onClick={() =>download()}>Download avatar</button></div>
       }
       
       <VariantSelector variants={variants} handleVariantSelect={handleVariantSelect} constructAvatar={constructAvatar} setShouldConstructAvatar={setShouldConstructAvatar} setAvatarSaved={setAvatarSaved} resize={resize}/>
    </div>
  );
}
