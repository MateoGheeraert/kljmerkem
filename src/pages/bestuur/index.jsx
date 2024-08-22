import React from "react";
import "./style.css";
import Bestuurslid from "../../components/bestuurslid/bestuurslid";
import mateo from "../../images/bestuur/mateo.jpg";
import cassie from "../../images/bestuur/Cassie.jpg";
import ferre from "../../images/bestuur/Ferre.jpg";
import kelly from "../../images/bestuur/Kelly.jpg";
import rosalie from "../../images/bestuur/Rosalie.jpg";
import simon from "../../images/bestuur/simon.jpg";

const Bestuur = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Bestuur</h1>
      </div>
      <div className="bestuursleden flyinleft">
        <Bestuurslid
          naam="Mateo Gheeraert"
          taken="Voorzitter"
          geboortedatum="23/01/2004"
          telefoon="0478751599"
          foto={mateo}
        ></Bestuurslid>
        <Bestuurslid
          naam="Ferre Dewaele"
          taken="Kassier"
          geboortedatum="12/09/2002"
          telefoon="0471233536"
          foto={ferre}
        ></Bestuurslid>
        <Bestuurslid
          naam="Simon Debergh"
          taken="gewestbestuurslid"
          geboortedatum="25/04/2003"
          telefoon="0470432809"
          foto={simon}
        ></Bestuurslid>
        <Bestuurslid
          naam="Michiel Castryck"
          taken="Secretaris"
          geboortedatum="12/03/2004"
          telefoon="0499623063"
          foto={cassie}
        ></Bestuurslid>
        <Bestuurslid
          naam="Kelly Dezwarte"
          taken="PR"
          geboortedatum="07/09/2004"
          telefoon="0472594699"
          foto={kelly}
        ></Bestuurslid>
        <Bestuurslid
          naam="Rosalie Capoen"
          taken="Lokaal Verantwoordelijke"
          geboortedatum="02/01/2004"
          telefoon="0476447575"
          foto={rosalie}
        ></Bestuurslid>
      </div>
    </div>
  );
};

export default Bestuur;
