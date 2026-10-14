import React from "react";
import { Helmet } from "react-helmet-async";
import Event from "../../components/event/event";
import dollekoe from "../../images/dollekoe.jpg";
import kljcafé from "../../images/kljcafé.jpg";
import barbecue from "../../images/barbecue.jpg";
import "./style.css";

const Evenementen = () => {
  return (
    <div>
      <Helmet>
        <title>
          Evenementen KLJ Merkem - Nacht Van De Dolle Koe | Barbecue | KLJ Café
        </title>
        <meta
          name='description'
          content='Ontdek de evenementen van KLJ Merkem: Nacht Van De Dolle Koe (eerste zaterdag april), jaarlijkse barbecue en KLJ Café. Kom genieten in Merkem!'
        />
        <meta
          name='keywords'
          content='Nacht Van De Dolle Koe, KLJ Merkem evenementen, barbecue Merkem, KLJ Café, fuif Merkem, evenementen Merkem, jeugdbeweging evenementen'
        />
        <link rel='canonical' href='https://kljmerkem.be/evenementen' />
        <meta
          property='og:title'
          content='Evenementen KLJ Merkem - Nacht Van De Dolle Koe'
        />
        <meta
          property='og:description'
          content='Ontdek de evenementen van KLJ Merkem: Nacht Van De Dolle Koe, barbecue en KLJ Café'
        />
        <meta property='og:url' content='https://kljmerkem.be/evenementen' />
      </Helmet>
      <h1 className='text-center'>Evenementen KLJ Merkem</h1>
      <div>
        <Event
          header='Nacht Van De Dolle Koe - KLJ Merkem Fuif'
          body='Sinds 2005 organiseren we elk jaar de spetterende fuif Nacht Van De Dolle Koe op de eerste zaterdag van april. Dit evenement is een hoogtepunt voor zowel onze leden als de hele gemeenschap van Merkem. Het is een avond vol muziek, dans en plezier, waarbij we samen een geweldige tijd beleven.
De opbrengsten van deze fuif gebruiken we om onze activiteiten voor de leden van KLJ Merkem te bekostigen. Dankzij jullie steun kunnen we het hele jaar door sport, spel en ontspanning organiseren voor jongeren vanaf 16 jaar in Merkem. Kom dus zeker langs, geniet van de fantastische sfeer en draag bij aan het mogelijk maken van onze activiteiten.
We kijken ernaar uit je te verwelkomen op de volgende Nacht Van De Dolle Koe!'
          image={dollekoe}
        ></Event>
        <Event
          header='Jaarlijkse Barbecue KLJ Merkem'
          body='Elke tweede zondag van oktober organiseren we onze sfeervolle barbecue in zaal Hubrecht Willem in Merkem, met heerlijk eten verzorgd door traiteur Déline. Dit evenement is een geweldige kans om samen te genieten van een smakelijke maaltijd en elkaars gezelschap.
De opbrengsten van deze barbecue stellen ons in staat om de diverse activiteiten voor onze leden van KLJ Merkem te financieren. Dankzij jullie deelname kunnen we een breed scala aan sportieve en recreatieve evenementen aanbieden voor jongeren vanaf 16 jaar in Merkem. Kom dus gezellig langs, proef de heerlijke gerechten en steun tegelijkertijd onze jeugdbeweging.
We hopen je te mogen verwelkomen op onze jaarlijkse barbecue en samen een onvergetelijke dag te beleven!'
          image={barbecue}
        ></Event>
        <Event
          header='KLJ Café'
          body='Sinds kort organiseren we ons gezellige KLJ Café op de derde vrijdag van mei. Dit jaar hebben we voor het eerst het kampioenschap bierbak werpen geïntroduceerd, wat een groot succes was en zorgde voor veel plezier en competitie.
Het KLJ Café is een perfecte gelegenheid om samen te komen, bij te praten en te genieten van een ontspannen avond met heerlijke drankjes en een gezellige sfeer. Het evenement biedt leden en niet-leden de kans om de unieke gemeenschap van KLJ Merkem te ervaren.
De opbrengsten van deze avond helpen ons om onze activiteiten en evenementen voor jongeren vanaf 16 jaar te financieren. Of je nu een vaste bezoeker bent of gewoon nieuwsgierig, je bent altijd welkom om langs te komen en deel uit te maken van onze gemeenschap.
We hopen je te mogen verwelkomen op de volgende editie van het KLJ Café en samen een geweldige avond te beleven!'
          image={kljcafé}
        ></Event>
      </div>
    </div>
  );
};

export default Evenementen;
