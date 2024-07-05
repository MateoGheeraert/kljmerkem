import React from "react";
import Event from "../../components/event/event";
import dollekoe from "../../images/dollekoe.jpg";
import kljcafé from "../../images/kljcafé.jpg";
import barbecue from "../../images/barbecue.jpg";
import "./style.css";

const Evenementen = () => {
  return (
    <div>
      <h1 className="text-center">Evenementen</h1>
      <div>
        <Event
          header="Nacht van de dolle koe"
          body="Elk jaar geven we een fuif..."
          image={dollekoe}
        ></Event>
        <Event
          header="Jaarlijkse barbecue"
          body="Elk jaar geven we een barbecue."
          image={barbecue}
        ></Event>
        <Event
          header="KLJ Café"
          body="Elk jaar geven we een fuif..."
          image={kljcafé}
        ></Event>
      </div>
    </div>
  );
};

export default Evenementen;
