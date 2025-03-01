import React, { useState, createContext } from "react";
import MainContainer from "./components/MainContainer.js";

// Context for language settings
export const LanguageContext = createContext();

const App = () => {
  const [language, setLanguage] = useState("ita");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <MainContainer />
    </LanguageContext.Provider>
    
  );
};

export default App;
