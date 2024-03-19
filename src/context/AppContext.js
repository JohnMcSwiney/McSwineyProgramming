import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [appP_Mode, setAppP_Mode] = useState(
    localStorage.getItem("MCSWINEY_SITE_PERFORMANCE_MODE") || "PRETTY"
  );

  useEffect(() => {
    console.log("Setting Performance Mode " + appP_Mode);
    localStorage.setItem("MCSWINEY_SITE_PERFORMANCE_MODE", appP_Mode);
  }, [appP_Mode]);

  const updatePerformanceMode = (newPMode) => {
    const pModeDefault = "POTATO";
    switch (newPMode) {
      case "POTATO":
        setAppP_Mode(newPMode);
        break;
      case "PRETTY":
        setAppP_Mode(newPMode);
        break;
      default:
        setAppP_Mode(pModeDefault);
    }
  };

  return (
    <AppContext.Provider
      value={{
        appP_Mode,
        updatePerformanceMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext};
