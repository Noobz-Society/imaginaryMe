import React, { useState, useEffect } from 'react';
import '../assets/css/AttributesSelector.css'


const AttributesSelector = ({attributesArray, handleAttributeSelect}) => {
 
  



  return (
    <div className="selector">
      {attributesArray.map(attribute => (
        <div className="selector_item" key={attribute._id} onClick={event => handleAttributeSelect(attribute._id)}>
          {attribute.key}
        </div>
      ))}
    </div>
  );
};
export default AttributesSelector
