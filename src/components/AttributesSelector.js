import React, { useState } from 'react';
import '../assets/css/AttributesSelector.css'


const AttributesSelector = ({attributesArray, handleAttributeSelect, setAvatarSaved}) => {
  const [isSelected, setIsSelected] = useState(null);

  
 
  const handleClick = (id) => {
    setAvatarSaved(false);
    handleAttributeSelect(id);
    setIsSelected(id)

  }



  return (
    <div className="selector">
      {attributesArray.map(attribute => (
        <div
          className={`selector_item${isSelected === attribute._id ? ' active' : ''}`}
          key={attribute._id}
          onClick={() => handleClick(attribute._id)}
        >
          <p>{attribute.key}</p>
        </div>
      ))}
    </div>
  );
};
export default AttributesSelector
