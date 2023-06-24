import React from 'react';
import '../assets/css/VariantsSelector.css';

const VariantsSelector = ({ variants, handleVariantSelect, constructAvatar }) => {
  if (!variants || !variants.variations) {
    return (
      <div className="variantsSelector_container">
    
        </div>
   
    )
  }

  
  const handleClick = (variantId) => {
    handleVariantSelect(variantId); // Execute the first function
    constructAvatar(); // Execute the second function
  };

  return (
    <div className="variantsSelector_container">
      
      {variants.variations.map(variant => (
        <div className="attribute" key={variant._id} onClick={event => handleClick(variant._id)}>
          <div dangerouslySetInnerHTML={{ __html: variant.svg }} />
        </div>
      ))}
    </div>
  );
};

export default VariantsSelector;
