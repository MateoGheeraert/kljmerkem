import React from "react";
import "./style.css";

const Activiteit = ({ header, body, foto }) => {
  return (
    <div className='card'>
      <img
        className='card-img-top'
        alt={`${header} - KLJ Merkem activiteit jeugdbeweging Merkem`}
        src={foto}
      />
      <div className='card-header'>{header}</div>
      <div className='card-body'>
        <p className='card-text'>{body}</p>
      </div>
    </div>
  );
};

export default Activiteit;
