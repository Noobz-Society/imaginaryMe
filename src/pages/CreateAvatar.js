import React, { useEffect } from 'react';
import '../assets/css/CreateAvatar.css'
import VariantSelector from '../components/VariantSelector';
import ColorSelector from '../components/ColorSelector';
import Canvas from '../components/Canvas';
import AttributesSelector from '../components/AttributesSelector';
import RandomizeButton from '../assets/img/random.svg'


export default function CreateAvatar() {
  useEffect(() => {
    document.body.classList.add('white-background');

    return () => {
      document.body.classList.remove('white-background');
    
    };
  }, []);
  
  return (
      <div className="createAvatar_container">
        <div className="createAvatar_subcontainer">
          <VariantSelector />
          <Canvas />
          <div className="createAvatar_buttons_container">
            <span className="createAvatar_buttons"><img src={RandomizeButton} alt="randomize-icon"/></span>

            <span className="createAvatar_buttons"><i class="lni lni-checkmark"></i></span>
          </div>
          <ColorSelector />
       </div>
      <AttributesSelector />
    </div>
  );
}
