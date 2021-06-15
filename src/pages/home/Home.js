import React from 'react';
import content from '../../data/content.json';
import {useLanguagePickerContext} from "../../contexts/LanguageContext";

function Home() {

    const {language} = useLanguagePickerContext()
  return (
    <div className="page-container">
      <h2>{content[language].home.title}</h2>
      <p>{content[language].home.introText}</p>
    </div>
  );
}

export default Home;
