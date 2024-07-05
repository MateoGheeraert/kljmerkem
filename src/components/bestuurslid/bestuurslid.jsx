import React from "react";
import "./style.css";

const Bestuurslid = ({ naam, taken, geboortedatum, image, telefoon }) => {
  return (
    <div className=" event container mt-4">
      <div></div>
      <div>
        <p>{naam}</p>
      </div>
      <div>
        <p>Functie:</p>
        <p>{taken}</p>
      </div>
      <div>
        <p>Geboortedatum:</p>
        <p>{geboortedatum}</p>
      </div>
      <div>
        <p>telefoon:</p>
        <p>{telefoon}</p>
      </div>
    </div>
  );
};

export default Bestuurslid;
