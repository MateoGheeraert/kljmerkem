import React from "react";
import Activiteit from "../../components/activiteit/activiteit";
import "./style.css";

const Activiteiten = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Onze activiteiten</h1>
        <p>Hier vind je enkele van onze activiteiten terug!</p>
      </header>
      <div className="activiteiten">
        <Activiteit header="karten" body="We zijn gaan karten." />
        <Activiteit header="paintball" body="We zijn gaan paintballen." />
        <Activiteit
          header="muurklimmen"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        />
        <Activiteit header="muurklimmen" body="We zijn gaan muurklimmen." />
        <Activiteit header="muurklimmen" body="We zijn gaan muurklimmen." />
        <Activiteit header="muurklimmen" body="We zijn gaan muurklimmen." />
        <Activiteit header="muurklimmen" body="We zijn gaan muurklimmen." />
        <Activiteit header="muurklimmen" body="We zijn gaan muurklimmen." />
        <Activiteit header="muurklimmen" body="We zijn gaan muurklimmen." />
        <Activiteit header="muurklimmen" body="We zijn gaan muurklimmen." />
      </div>
    </div>
  );
};

export default Activiteiten;
