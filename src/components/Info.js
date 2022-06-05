import React from 'react';
import polygonsYo from '../polygons-yo.png';

function Info() {
  return (
    <div>
        <img src={polygonsYo} alt="Le portrait de Yohan formé de polygones." height="400px" className="info--img" />
        <h1 className="info--h1">Yohan Saint-Martin</h1>
        <h2 className="info--h2">Frontend Developer</h2>
        <a  target="_blank" rel="noopener noreferrer" href="https://www.yohan-saint-martin.fr/" className="info--website">www.yohan-saint-martin.fr</a>
    </div>
  );
}

export default Info;