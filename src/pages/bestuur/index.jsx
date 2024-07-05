import React from "react";
import "./style.css";
import Bestuurslid from "../../components/bestuurslid/bestuurslid";

const Bestuur = () => {
  return (
    <div>
      <h1 className="text-center">Bestuur</h1>
      <Bestuurslid
        naam="Mateo Gheeraert"
        taken="voorzitter"
        geboortedatum="23/01/2004"
        telefoon="0478751599"
      ></Bestuurslid>
      <Bestuurslid
        naam="Ferre Dewaele"
        taken="Kassier"
        geboortedatum="23/01/2024"
        telefoon="2024"
      ></Bestuurslid>
      <Bestuurslid
        naam="Simon Debergh"
        taken="gewestbestuurslid"
        geboortedatum="23/01/2024"
        telefoon="2024"
      ></Bestuurslid>
      <Bestuurslid
        naam="Michiel Castryck"
        taken="gewestbestuurslid"
        geboortedatum="23/01/2024"
        telefoon="2024"
      ></Bestuurslid>
      <Bestuurslid
        naam="Kelly Dezwarte"
        taken="gewestbestuurslid"
        geboortedatum="23/01/2024"
        telefoon="2024"
      ></Bestuurslid>
      <Bestuurslid
        naam="Rosalie Capoen"
        taken="gewestbestuurslid"
        geboortedatum="23/01/2024"
        telefoon="2024"
      ></Bestuurslid>
    </div>
  );
};

export default Bestuur;
