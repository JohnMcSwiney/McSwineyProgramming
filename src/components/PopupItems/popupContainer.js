import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./popupStyles.css";

import ContactPopup from "./contactPopup";

function PopupContainer({ children }) {
  const appContext = useAppContext();
  const popupTypes = ["NONE", "CONTACT", "EXTERNAL"];
  const POPUP_ACTIVE = appContext.popupActive;
  const POPUP_TYPE = appContext.popupType;
  
  const temp2 = () =>{
    console.log("if 2" + POPUP_TYPE + POPUP_ACTIVE);
  }
  return (
    <div>
      <div
        className={`popup-container ${
          POPUP_ACTIVE === true && POPUP_TYPE !== "NONE"
            ? "popup-visible fade-in"
            : "popup-hidden fade-out"
        }`}
      >
        {POPUP_ACTIVE === true && POPUP_TYPE == !"NONE" ? 
        <div>1{POPUP_TYPE}</div> 
        : 
        <div onClick={temp2}>
        {
          POPUP_TYPE === "CONTACT" &&  (
            <><ContactPopup/></>
          )
        }
        {
          POPUP_TYPE === "EXTERNAL" &&  (
            <>{POPUP_TYPE}</>
          )
        }
        </div>
        }
      </div>
      {children}
    </div>
  );
}

export default PopupContainer;
