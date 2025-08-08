import React from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import Bestuurslid from "../../components/bestuurslid/bestuurslid";
import mateo from "../../images/bestuur/mateo.jpg";
import cassie from "../../images/bestuur/Cassie.jpg";
import ferre from "../../images/bestuur/Ferre.jpg";
import rosalie from "../../images/bestuur/Rosalie.jpg";
import simon from "../../images/bestuur/simon.jpg";
import backer from "../../images/bestuur/backer.jpg";

const Bestuur = () => {
  return (
    <div>
      <Helmet>
        <title>Bestuur KLJ Merkem - Contactgegevens Jeugdbeweging Merkem</title>
        <meta
          name='description'
          content='Leer het bestuur van KLJ Merkem kennen! Contactgegevens van de bestuursleden van jeugdbeweging Merkem. Voorzitter, kassier, secretaris en meer.'
        />
        <meta
          name='keywords'
          content='KLJ Merkem bestuur, bestuur jeugdbeweging Merkem, contact KLJ Merkem, bestuursleden Merkem, voorzitter KLJ Merkem'
        />
        <link rel='canonical' href='https://kljmerkem.be/bestuur' />
        <meta
          property='og:title'
          content='Bestuur KLJ Merkem - Contactgegevens'
        />
        <meta
          property='og:description'
          content='Leer het bestuur van KLJ Merkem kennen! Contactgegevens van de bestuursleden.'
        />
        <meta property='og:url' content='https://kljmerkem.be/bestuur' />
      </Helmet>
      <div>
        <h1 className='text-center'>Bestuur KLJ Merkem</h1>
      </div>
      <div className='bestuursleden flyinleft'>
        <Bestuurslid
          naam='Mateo Gheeraert'
          taken='Voorzitter'
          geboortedatum='23/01/2004'
          telefoon='0478751599'
          foto={mateo}
        ></Bestuurslid>
        <Bestuurslid
          naam='Mathias Debacker'
          taken='Kassier'
          geboortedatum='23/04/2007'
          telefoon='0477841400'
          foto={backer}
        ></Bestuurslid>
        <Bestuurslid
          naam='Michiel Castryck'
          taken='Afdelingsecretaris, Kassier'
          geboortedatum='12/03/2004'
          telefoon='0499623063'
          foto={cassie}
        ></Bestuurslid>
        <Bestuurslid
          naam='Ferre Dewaele'
          taken='PR'
          geboortedatum='12/09/2002'
          telefoon='0471233536'
          foto={ferre}
        ></Bestuurslid>
        <Bestuurslid
          naam='Simon Debergh'
          taken='Gewestbestuurslid, Drank-verantwoordelijke'
          geboortedatum='25/04/2003'
          telefoon='0470432809'
          foto={simon}
        ></Bestuurslid>
        <Bestuurslid
          naam='Rosalie Capoen'
          taken='Lokaal Verantwoordelijke'
          geboortedatum='02/01/2004'
          telefoon='0476447575'
          foto={rosalie}
        ></Bestuurslid>
      </div>
    </div>
  );
};

export default Bestuur;
