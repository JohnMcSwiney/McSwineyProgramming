import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { useAppContext } from "./context/AppContext";

import PopupContainer from "./components/PopupItems/popupContainer";
import About from "./components/about";
import ModeBtn from "./components/ModeBtn/ModeBtn";

function App() {
  const appContext = useAppContext();
  const P_MODE = appContext.appP_Mode;

  return (
    <div
      className={`bg-base ${P_MODE == "POTATO" ? "potato-bg" : "pretty-bg"} `}
    >
      <ModeBtn />
      <PopupContainer>
        <div className="app-container">
          <About />
        </div>
      </PopupContainer>
    </div>
  );
}

export default App;
