import React, { useState, createContext, useContext } from "react";
//#to do
// CreateContext importeren
// Context aanmaken
// Context.Provider om de App heenzetten
// Values doorgeven
// Export context object
// In elk component
// useContext importeren
// context object importeren
// de waardes uit de context halen (in plaats van props)

export const languagePickerContext = createContext({});

export function useLanguagePickerContext() {
    return useContext(languagePickerContext);
}

export default function LanguageContext (props) {
    console.log("PROPS in LanguageContext:", props);
    const [language, setLanguage] = useState("nl")


    return (
        <languagePickerContext.Provider
        value={{
            language: language,
            setLanguage: setLanguage,
        }}
        >
            {props.children}
        </languagePickerContext.Provider>
    )
}