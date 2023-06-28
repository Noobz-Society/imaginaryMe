import React, { useEffect } from 'react';
import '../assets/css/Canvas.css';

const Canvas = ({ imgSrc }) => {
  if(!imgSrc) {
    return (
      <div className="canvasDefault_container">
       
      </div>
    )
  }
 

  return (
    <div className="canvas_container">
     <div dangerouslySetInnerHTML={{ __html: imgSrc }} />
    </div>
  )
}

export default Canvas;
