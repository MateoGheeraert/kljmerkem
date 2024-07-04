import React, { useRef, useState } from "react";
import Activiteit from "../../components/activiteit/activiteit";
import "./style.css";

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
    <div className="home-page">
      <header>
        <h1>Onze activiteiten</h1>
        <p>Hier vind je enkele van onze activiteiten terug!</p>
      </header>
      <div
        className="activiteiten"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
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
        {/* Add more Activiteit components as needed */}
      </div>
    </div>
  );
};

export default Activiteiten;
