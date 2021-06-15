import React from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';

import { useLanguagePickerContext} from "../../contexts/LanguageContext";

function AboutUs() {

    const {language} = useLanguagePickerContext()

  return (
    <div className="page-container">
      <h2>{content[language].aboutUs.title}</h2>
      <p>Dit is je profielpagina!</p>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{content[language].aboutUs.writers}</p>
    </div>
  );
}

export default AboutUs;
