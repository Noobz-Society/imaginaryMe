import React, { useState, useEffect } from 'react';
import '../assets/css/VariantsSelector.css';

const VariantsSelector = ({ variants, handleVariantSelect, constructAvatar, setShouldConstructAvatar, setAvatarSaved, resize }) => {
  const [isSelected, setIsSelected] = useState(null);

  useEffect(() => {
    constructAvatar();
    
  }, [constructAvatar, handleVariantSelect]); 


  if (!variants || !variants.variations) {
    return (
      <div className="variantsSelector_container">
    
        <div className="attribute"></div>
        <div className="attribute"></div>
        <div className="attribute"></div>
        <div className="attribute"></div>
        <div className="attribute"></div>
        <div className="attribute"></div>

        </div>
   
    )
  }

  

  const handleClick = (variantId) => {
    setAvatarSaved(false);
    setShouldConstructAvatar(true);
    handleVariantSelect(variantId);
    setIsSelected(variantId);
    
  };

 
  return (
    <div className="variantsSelector_container">
      
      {variants.variations.map(variant => (
        
        <div
        className={`attribute${isSelected === variant._id ? ' active' : ''}`}
        key={variant._id}
        onClick={() => handleClick(variant._id)}
        ><div  className={`svg${resize === true ? 'resized' : ''}`} dangerouslySetInnerHTML={{ __html: variant.svg }} /></div>
      ))}
    </div>
  );
};

export default VariantsSelector;
