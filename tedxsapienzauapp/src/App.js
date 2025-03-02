import React, { useState, createContext } from "react";
import MainContainer from "./components/MainContainer.js";
import LoadingScreen from "./components/pages/LoadingScreen.jsx";
import LoadingTransition from "./components/pages/LoadingTransition.jsx";
import GetStarted from "./components/pages/GetStarted.jsx";

// Context for language settings
export const LanguageContext = createContext();

const App = () => {
  const [language, setLanguage] = useState("ita");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <MainContainer/>
    </LanguageContext.Provider>
  );
};

export default App;
