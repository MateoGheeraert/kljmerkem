import React, { useRef, useState } from "react";
import Activiteit from "../../components/activiteit/activiteit";
import "./style.css";
import bierfietsen from "../../images/activiteiten/bierfietsen.jpg";
import bowling from "../../images/activiteiten/bowling.jpg";
import muurklimmen from "../../images/activiteiten/muurklimmen.jpg";
import tafelvoetbal from "../../images/activiteiten/tafelvoetbal.jpg";
import paintball from "../../images/activiteiten/paintball.jpg";
import schieting from "../../images/groepsfotos/groepsfoto.jpg";

const Activiteiten = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - scrollRef.current.offsetLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft -= walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className='home-page'>
      <header>
        <h1>Onze activiteiten</h1>
        <p>Hier vind je enkele van onze activiteiten terug!</p>
      </header>
      <div
        className='activiteiten'
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Activiteit
          header='Karten'
          body='Samen racen we vol adrenaline over het circuit. Karten versterkt onze vriendschap en zorgt altijd voor veel gelach en gezonde competitie.'
          foto={muurklimmen}
        />
        <Activiteit
          header='Paintball'
          body='Tijdens het paintballen beleven we spannende avonturen en werken we als een hecht team samen. Dit is een van onze favoriete activiteiten om onze banden te versterken.'
          foto={paintball}
        />
        <Activiteit
          header='Muurklimmen'
          body='Samen trotseren we hoogtes en ondersteunen we elkaar bij elke stap. Muurklimmen brengt ons dichter bij elkaar terwijl we onze grenzen verleggen.'
          foto={muurklimmen}
        />
        <Activiteit
          header='Levend Tafelvoetbal'
          body='Met levend tafelvoetbal beleven we hilarische momenten. Het versterkt onze teamgeest en zorgt altijd voor een geweldige tijd vol plezier.'
          foto={tafelvoetbal}
        />
        <Activiteit
          header='Bowling'
          body='Bowlen met de groep is altijd een schot in de roos! We genieten van de competitie en het samen zijn, wat onze vriendschappen versterkt.'
          foto={bowling}
        />
        <Activiteit
          header='Bierfietsen'
          body='Op de bierfiets genieten we van heerlijke drankjes en nog betere gesprekken. Deze activiteit is perfect voor het versterken van onze hechte band.'
          foto={bierfietsen}
        />
        <Activiteit
          header='Schieting'
          body='Tijdens de schieting hebben we onze precisie en concentratie getest. Het was een geweldige gelegenheid om onze focus te verbeteren en te genieten van een spannende uitdaging. Elk schot bracht een gevoel van voldoening en plezier, en het was een unieke ervaring die ons allemaal bij zal blijven.'
          foto={schieting} // Zorg ervoor dat je een afbeelding toevoegt die bij deze activiteit past
        />
      </div>
    </div>
  );
};

export default Activiteiten;
