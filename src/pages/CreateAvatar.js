import React, { useState, useEffect } from 'react';
import '../assets/css/CreateAvatar.css'
import VariantSelector from '../components/VariantsSelector'
import ColorSelector from '../components/ColorSelector'
import Canvas from '../components/Canvas'
import AttributesSelector from '../components/AttributesSelector'
import RandomizeButton from '../assets/img/random.svg'
import axios from 'axios';

import Cookies from "universal-cookie";
const cookies = new Cookies();

const uri = process.env.REACT_APP_URI;


export default function CreateAvatar() {
  const [avatarSavedText, setAvatarSavedText] = useState("");
  const [svg, setSvg] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [variants, setVariants] = useState();

  const [attributeSelected, setAttributeSelected] = useState("");
  
  const [body_variant, setBody_variant] = useState("64943f502d9bc32598a3706b");
  const [body_color, setBody_color] = useState("#FBE0CF");
  const [eyes_variant, setEyes_variant] = useState("64944b9edea8c6aa848b713a");
  const [eyes_color, setEyes_color] = useState("#00f");
  const [nose_variant, setNose_variant] = useState("6494513e7c1939556fd695c2");
  const [mouth_variant, setMouth_variant] = useState("64954da228eb0d9386e7507b");
  const [eyebrows_variant, setEyebrows_variant] = useState("6495af47e4f40a2d627b9268");
  const [eyebrows_color, setEyebrows_color] = useState("#FF0");

  const [allParams, setAllParams] = useState(false);
  const [avatarSaved, setAvatarSaved] = useState(false);
  const [shouldConstructAvatar, setShouldConstructAvatar] = useState(true); 



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

        setAllParams(true)

        // make the API call
        axios(configuration)
        .then((result) => {

         let attributeKey = (getKeyById(result.data, attributeSelected));

         if(attributeKey === "corps"){
          setBody_variant(id)

         }else if(attributeKey === "yeux") {
          setEyes_variant(id)

         }else if(attributeKey === "nez") {
          setNose_variant(id)
          
         }else if(attributeKey === "bouche") {
          setMouth_variant(id)
          
         }else if(attributeKey === "sourcils") {
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

     if(attributeKey === "corps"){
      setBody_color(color)

     }else if(attributeKey === "yeux") {
      setEyes_color(color)
      
     }else if(attributeKey === "sourcils") {
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
  setSvg(result.data)
})
.catch((error) => {
  console.log(error)
});


}

const saveAvatar = () => {
  setAvatarSaved(true)
  if(allParams){
      
    /*
        const configuration = {
          method: "post",
          url: `${uri}/user/save-avatar`,
          data: [
            {
              name: "avatar",

            },
             
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
        
        
      
      })
      
      
      .catch((error) => {
        console.log(error)
      });
*/
    
  }
  
}


  useEffect(() => {
    document.body.classList.add('createAvatar-background');
    constructAvatar();
    getAttributes();

    const token = cookies.get("TOKEN");

    if(!token) {
      setAvatarSavedText("avatar downloaded");
    }else {
      setAvatarSavedText("Avatar saved")

    }

    return () => {
      document.body.classList.remove('createAvatar-background');
    
    };
  }, []);

 const download = () => {
  const element = document.createElement("a");
  const file = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  element.href = URL.createObjectURL(file);
  element.download = "avatar.svg";
  element.click();
};


  
  return (
      <div className="createAvatar_container">
        <div className="createAvatar_subcontainer">
        <AttributesSelector attributesArray={attributes} handleAttributeSelect={handleAttributeSelect} />
          <Canvas imgSrc={svg} />
          <div className="createAvatar_buttons_container">
            <span className="createAvatar_buttons" onClick={event => randomAvatar()}><img src={RandomizeButton} alt="randomize-icon"/></span>

            <span className="createAvatar_buttons" onClick={download}><i class="lni lni-checkmark"></i></span>
          </div>
          <ColorSelector variants={variants} handleColorSelect={handleColorSelect} constructAvatar={constructAvatar} setShouldConstructAvatar={setShouldConstructAvatar }/>
       </div>
       {avatarSaved && <p>Avatar saved</p>}
       
       <VariantSelector variants={variants} handleVariantSelect={handleVariantSelect} constructAvatar={constructAvatar} setShouldConstructAvatar={setShouldConstructAvatar}/>
    </div>
  );
}
