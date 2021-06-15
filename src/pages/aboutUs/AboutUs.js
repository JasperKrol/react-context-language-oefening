import React from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import { useContext } from "react"
import LanguageContext from "../../contexts/LanguageContext";

function AboutUs() {

    const {location, setLocation} = useContext(LanguageContext)

  return (
    <div className="page-container">
      <h2>{content.nl.aboutUs.title}</h2>
      <p>Dit is je profielpagina!</p>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{content.nl.aboutUs.writers}</p>
    </div>
  );
}

export default AboutUs;
