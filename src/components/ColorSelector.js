import React from 'react'
import '../assets/css/VariantsSelector.css'

const ColorSelector = ({ variants, handleColorSelect, constructAvatar}) => {
  if (!variants || !variants.variations) {
    return (
      <div className="selector_colors">
        
        <div className="selector_item"></div>
        <div className="selector_item"></div>
        <div className="selector_item"></div>
        <div className="selector_item"></div>
        <div className="selector_item"></div>
        <div className="selector_item"></div>


        

    </div>
    )
  }

  const handleClick = (color) => {
    handleColorSelect(color); // Execute the first function
    constructAvatar(); // Execute the second function
  };
  return (
    <div className="selector_colors">
        {variants.colors.map(color => (
          <div
            className="selector_item"
            key={color}
            style={{ backgroundColor: color }}
            onClick={event =>  handleClick(color)}
          ></div>
        ))}

    </div>
  )
}

export default ColorSelector
