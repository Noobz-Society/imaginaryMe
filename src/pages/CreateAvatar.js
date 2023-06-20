import React, { useEffect } from 'react';
import '../css/CreateAvatar.css'
import VariantSelector from '../components/VariantSelector';
import ColorSelector from '../components/ColorSelector';
import Canvas from '../components/Canvas';
import AttributesSelector from '../components/AttributesSelector';


export default function CreateAvatar() {
  useEffect(() => {
    document.body.classList.add('create-avatar-background');

    return () => {
      document.body.classList.remove('create-avatar-background');
    
    };
  }, []);
  
  return (
      <div className="createAvatar_container">
        <div className="createAvatar_subcontainer">
          <VariantSelector />
          <Canvas />
          <ColorSelector />
       </div>
      <AttributesSelector />
    </div>
  );
}
