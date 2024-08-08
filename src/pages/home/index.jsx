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
        <h2>Over Ons</h2>
        <p>
          Welkom bij KLJ Merkem! Sinds 1932 zijn wij de ideale plek voor
          jongeren vanaf 16 jaar om zich te vermaken en nieuwe vrienden te
          maken. KLJ, wat staat voor Katholieke Landelijke Jeugd, is een plek
          waar openheid, kameraadschap en plezier centraal staan. Elke twee
          weken komen we op vrijdag samen voor sport, spel en ontspanning. Via
          onze website blijf je altijd op de hoogte van de komende activiteiten,
          foto’s, ons bestuur, locatie, sponsors en onze fuiven.
        </p>
        <p>
          <strong>Lidmaatschap</strong>
          <br />
          Ben jij 16 jaar of ouder? Dan ben je van harte welkom bij KLJ Merkem!
          Het lidmaatschap kost slechts €20 per jaar, wat enkel dient als
          verzekeringsbijdrage. Of je nu al vrienden bij ons hebt, eerder van
          ons hebt gehoord, of gewoon nieuwsgierig bent, je bent altijd welkom
          om langs te komen tijdens een van onze activiteiten. Je kunt ons
          bereiken via een bestuurslid, het contactformulier, of gewoon spontaan
          binnenwandelen. We organiseren ook een startactiviteit in september,
          waar je de kans krijgt om kennis te maken met onze groep.
          <br />
          We hopen je snel te mogen verwelkomen in onze gezellige vriendenkring!
        </p>
      </div>
    </div>
  );
};

export default Home;
