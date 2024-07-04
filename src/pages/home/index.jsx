import React from "react";
import groepsfoto from "../../images/groepsfoto.jpg";
import groepsfoto2 from "../../images/groepsfoto2.jpg";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={groepsfoto} alt="Los Angeles" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h1>KLJ Merkem</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={groepsfoto2} alt="Chicago" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h1>KLJ Merkem</h1>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div class="over mx-auto flyinleft">
        <h2>Over</h2>
        <p>
          Welkom bij KLJ Merkem!
          <br /> KLJ-Merkem is sinds 1932 the place to be om je vanaf je 16 jaar
          rot te amuseren. KLJ staat voor Katholieke Landelijke Jeugd, onze
          groep is een toonbeeld van openheid, kameraadschap, vriendschap en
          hier en daar ook wel een brigand. Naar de regel komen we tweewekelijks
          samen op de vrijdag voor sport, spel en ontspanning. Via deze site ben
          je altijd in staat om je te informeren over de komende activiteiten,
          de foto’s, ons bestuur, waar je ons kan vinden, onze sponsors en onze
          fuiven.
        </p>
        <p>
          <b>Lidmaatschap</b>
          <br />
          Ben jij toevallig een jongen/meisje, en word je 16 jaar dit jaar of
          ben je ouder, dan ben je zeker welkom in onze KLJ! Inschrijven kan tot
          je 35 jaar bent voor een jaarlijks bedrag van €20. Dit bedrag geldt
          louter als verzekeringsbijdrage. Heb je al een vriend/vriendin of
          kennis in de KLJ? Heb je al van ons gehoord? Of heb je gewoon een
          groot aantal vrijdagen waarop je niets kunt inplannen, NEEM dan maar
          gerust contact op met ons. Dit kan telefonisch via een bestuurslid,
          via het contactformulier of kom gerust maar eens binnen. We
          organiseren alsook een startactiviteit in September, waar een groot
          aantal geïnteresseerden eens langskomen om kennis te maken met ons.{" "}
          <br />
          WIJ HOPEN JE DUS ZEKER TE MOGEN VERWELKOMEN IN ONZE VRIENDENGROEP!!
        </p>
      </div>
    </div>
  );
};

export default Home;
