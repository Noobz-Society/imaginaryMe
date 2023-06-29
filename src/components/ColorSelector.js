import React, { useState } from 'react';
import '../assets/css/VariantsSelector.css'

const ColorSelector = ({ variants, handleColorSelect, constructAvatar, setShouldConstructAvatar, setAvatarSaved }) => {
  const [isSelected, setIsSelected] = useState(null);
  if (!variants || !variants.variations) {
    return (
      <div className="selector_colors">
        
        <div className="color_item"></div>
        <div className="color_item"></div>
        <div className="color_item"></div>
        <div className="color_item"></div>
        <div className="color_item"></div>
        <div className="color_item"></div>


        

    </div>
    )
  }

  const handleClick = (color) => {
    setAvatarSaved(false)
    setShouldConstructAvatar(true)
    handleColorSelect(color); 
    constructAvatar(); 
    setIsSelected(color);
  };

  return (
    <><div className="selector_colors">
      {variants.colors.map(color => (
        <div
          className={`color_item${isSelected === color ? ' active' : ''}`}
          key={color}
          style={{ backgroundColor: color }}
          onClick={event => handleClick(color)}
        ></div>
      ))}
    </div>
    <div className="mobile_selector_colors">
        {variants.colors.map(color => (
          <div
            className={`mobile_color_item${isSelected === color ? ' active' : ''}`}
            key={color}
            style={{ backgroundColor: color }}
            onClick={event => handleClick(color)}
          ></div>
        ))}
      </div></>
  )
}

export default ColorSelector
