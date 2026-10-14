import React from "react";
import "./style.css";

const Event = ({ header, body, image }) => {
  return (
    <div className=' event container mt-4 flyinleft'>
      <div className='row'>
        <div className='col-md-4'>
          <img
            src={image}
            className='img-fluid'
            alt={`${header} - KLJ Merkem evenement`}
          />
        </div>
        <div className='col-md-8'>
          <h2>{header}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
