import React, { useEffect } from 'react';
import '../assets/css/Canvas.css';

const Canvas = ({ imgSrc }) => {
 

  return (
    <div className="canvas_container">
     <div dangerouslySetInnerHTML={{ __html: imgSrc }} />
    </div>
  )
}

export default Canvas;
