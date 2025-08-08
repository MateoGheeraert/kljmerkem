import React from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";

const Geschiedenis = () => {
  return (
    <div className='timeline-container flyinleft'>
      <Helmet>
        <title>Geschiedenis KLJ Merkem - Van BJB tot KLJ sinds 1932</title>
        <meta
          name='description'
          content='Ontdek de rijke geschiedenis van KLJ Merkem sinds 1932. Van BoerenJeugdBond tot Katholieke Landelijke Jeugd, 90+ jaar jeugdbeweging in Merkem.'
        />
        <meta
          name='keywords'
          content='KLJ Merkem geschiedenis, BJB Merkem, Katholieke Landelijke Jeugd historie, BoerenJeugdBond, 1932 Merkem, 90 jaar KLJ'
        />
        <link rel='canonical' href='https://kljmerkem.be/#/geschiedenis' />
        <meta
          property='og:title'
          content='Geschiedenis KLJ Merkem - 90+ jaar jeugdbeweging'
        />
        <meta
          property='og:description'
          content='Ontdek de rijke geschiedenis van KLJ Merkem sinds 1932'
        />
        <meta property='og:url' content='https://kljmerkem.be/#/geschiedenis' />
      </Helmet>
      <h1 className='text-center'>Geschiedenis KLJ Merkem</h1>
      <ul class='timeline'>
        <li>
          <div class='direction-r'>
            <div class='flag-wrapper'>
              <span class='hexa'></span>
              <span class='flag'>Oprichting BJB</span>
              <span class='time-wrapper'>
                <span class='time'>1932</span>
              </span>
            </div>
            <div class='desc'>
              In 1932 wordt de BoerenJeugdBond Merkem opgericht.
            </div>
          </div>
        </li>

        <li>
          <div class='direction-l'>
            <div class='flag-wrapper'>
              <span class='hexa'></span>
              <span class='flag'>BJB wordt KLJ</span>
              <span class='time-wrapper'>
                <span class='time'>1965</span>
              </span>
            </div>
            <div class='desc'>
              Onze naam verandert naar Katholieke Landelijke Jeugd (KLJ) Merkem.
            </div>
          </div>
        </li>

        <li>
          <div class='direction-r'>
            <div class='flag-wrapper'>
              <span class='hexa'></span>
              <span class='flag'>Nacht Van De Dolle Koe</span>
              <span class='time-wrapper'>
                <span class='time'>2005</span>
              </span>
            </div>
            <div class='desc'>
              Voor het eerst wordt onze fuif Nacht van De Dolle Koe gegeven op
              de eerste zaterdag van April.
            </div>
          </div>
        </li>
        <li>
          <div class='direction-l'>
            <div class='flag-wrapper'>
              <span class='hexa'></span>
              <span class='flag'>Inhuldiging nieuw lokaal</span>
              <span class='time-wrapper'>
                <span class='time'>2016</span>
              </span>
            </div>
            <div class='desc'>
              Door de vele inspanningen van de leden en met behulp van het
              gemeente Bestuur wordt ons nieuwe lokaal ingehuldigt.
            </div>
          </div>
        </li>
        <li>
          <div class='direction-r'>
            <div class='flag-wrapper'>
              <span class='hexa'></span>
              <span class='flag'>Feestweekend KLJ Merkem 90 jaar</span>
              <span class='time-wrapper'>
                <span class='time'>2022</span>
              </span>
            </div>
            <div class='desc'>
              KLJ Merkem bestaat 90 jaar en geeft hiervoor een groot
              feestweekend.
            </div>
          </div>
        </li>
        <li>
          <div class='direction-l'>
            <div class='flag-wrapper'>
              <span class='hexa'></span>
              <span class='flag'>20 jaar Nacht Van De Dolle Koe</span>
              <span class='time-wrapper'>
                <span class='time'>2025</span>
              </span>
            </div>
            <div class='desc'>
              Dit jaar bestaat onze fuif Nacht van De Dolle Koe 20 jaar. Dit
              vieren we met tal van acties zo lieten we een special guest komen
              maar gaven ook vaten bier weg.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Geschiedenis;
