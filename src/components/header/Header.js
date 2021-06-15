import React from 'react';
import {NavLink} from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import {ReactComponent as FlagNL} from '../../assets/netherlands.svg';
import {ReactComponent as FlagES} from '../../assets/spain.svg';
import content from '../../data/content.json';
import './Header.css';
import {useLanguagePickerContext} from "../../contexts/LanguageContext";

function Header() {

    const {language, setLanguage} = useLanguagePickerContext()

    function switchLanguage() {
        if (language === "nl") {
            setLanguage("es")
            console.log("click")
        }
        if (language === "es") {
            setLanguage("nl")
            console.log("click", language)
        }
    }


    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/about-us">
                                {content[language].header.menuItems.aboutUs}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/all-plants">
                                {content[language].header.menuItems.allPlants}
                            </NavLink>
                        </li>
                        <li className="language-switch" onClick={switchLanguage}>
                            <p>{content[language].header.changeTo}</p>

                          {language === "es" ?<FlagNL/> :  <FlagES/>}




                        </li>
                    </ul>
                </nav>
                <div className="image-container">
                    <img src={headerImage} alt="Header image plants" className="header-image"/>
                    <h1>{content[language].header.title}</h1>
                </div>

            </header>
        </>
    );
}

export default Header;
