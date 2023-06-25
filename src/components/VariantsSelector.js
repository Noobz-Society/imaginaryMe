import React, { useState, useEffect } from 'react';
import '../assets/css/VariantsSelector.css';

const VariantsSelector = ({ variants, handleVariantSelect, constructAvatar, setShouldConstructAvatar }) => {
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
    setShouldConstructAvatar(true)
    handleVariantSelect(variantId);
  };

 
  return (
    <div className="variantsSelector_container">
      
      {variants.variations.map(variant => (
        <div className="attribute" key={variant._id} onClick={() => handleClick(variant._id)}>
          <div dangerouslySetInnerHTML={{ __html: variant.svg }} />
        </div>
      ))}
    </div>
  );
};

export default VariantsSelector;
