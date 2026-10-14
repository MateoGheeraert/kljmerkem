import React from "react";
import "./style.css";

const Bestuurslid = ({ naam, taken, geboortedatum, telefoon, foto }) => {
  return (
    <div className='bestuurslid'>
      <div className='profile-wrapper'>
        <img
          className='profielfoto'
          src={foto}
          alt={`${naam} - Bestuurslid KLJ Merkem jeugdbeweging Merkem`}
        />
        <div className='profile-info'>
          <h3>{naam}</h3>
          <p className='titel'>Functie:</p>
          <p className='waarde'>{taken}</p>
          <p className='titel'>Geboortedatum:</p>
          <p className='waarde'>{geboortedatum}</p>
          <p className='titel'>Telefoon:</p>
          <p className='waarde'>{telefoon}</p>
        </div>
      </div>
    </div>
  );
};

export default Bestuurslid;
