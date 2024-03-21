import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  
  // read previous values - or - set defaults
  const [appP_Mode, setAppP_Mode] = useState(
    localStorage.getItem("MCSWINEY_SITE_PERFORMANCE_MODE") || "PRETTY"
  );
  const [popupActive, setPopupActive] = useState(
    localStorage.getItem("MCSWINEY_SITE_POPUP_ACTIVE") || false
  )
  const [popupType, setPopupType] = useState(
    localStorage.getItem("MCSWINEY_SITE_POPUP_TYPE") || "NONE"
  )

  // verify and update variables for global use
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

  const updatePopupActivity = (newActivity) => {
    const activityDefault = false;
    switch(newActivity){
      case false:
        setPopupActive(newActivity);
        break;
      case true:
        setPopupActive(newActivity);
        break;
      default:
        setPopupActive(activityDefault);
    }

  }

  const updatePopupType = (newPopup) => {
    const typeDefault = "NONE"
    switch(newPopup){
      case "NONE":
        setPopupType(newPopup);
        setPopupActive(false);
        break;
      case "CONTACT":
        setPopupType(newPopup);
        setPopupActive(true);
        break;
      case "EXTERNAL":  
        setPopupType(newPopup);
        setPopupActive(true);
        break;
      default:
        console.log("Invalid popup type: " + newPopup + " !");
        console.log("No popup displayed!");
        setPopupType(newPopup);
        setPopupActive(false);

    }

  }

  // update local variables on a change
  useEffect(() => {
    console.log("Setting Performance Mode: " + appP_Mode);
    localStorage.setItem("MCSWINEY_SITE_PERFORMANCE_MODE", appP_Mode);
  }, [appP_Mode]);

  useEffect(()=>{
    console.log("Popup is Active? " + popupActive);
    localStorage.setItem("MCSWINEY_SITE_POPUP_ACTIVE", popupActive);
  }, [popupActive]);

  useEffect(()=>{
    console.log("Popup: " + popupType + " is now active!");
    localStorage.setItem("MCSWINEY_SITE_POPUP_TYPE", popupType);
  }, [popupType]);

  return (
    <AppContext.Provider
      value={{
        appP_Mode,
        popupActive,
        popupType,
        updatePerformanceMode,
        updatePopupActivity,
        updatePopupType
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
