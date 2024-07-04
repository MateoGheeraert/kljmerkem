import React from "react";

import "./style.css";
import groepsfoto from "../../images/groepsfoto.jpg";

const Activiteit = ({ header, body }) => {
  return (
    <div className="card">
      <img className="card-img-top" alt="KLJ Merkem" src={groepsfoto} />
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
    </div>
  );
};

export default Activiteit;
