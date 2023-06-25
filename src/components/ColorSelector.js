import React from 'react'
import '../assets/css/VariantsSelector.css'

const ColorSelector = ({ variants, handleColorSelect, constructAvatar, setShouldConstructAvatar }) => {
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
    setShouldConstructAvatar(true)
    handleColorSelect(color); 
    constructAvatar(); 
    
  };
  return (
    <div className="selector_colors">
        {variants.colors.map(color => (
          <div
            className="color_item"
            key={color}
            style={{ backgroundColor: color }}
            onClick={event =>  handleClick(color)}
          ></div>
        ))}

    </div>
  )
}

export default ColorSelector
