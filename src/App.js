import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { useAppContext } from "./context/AppContext";

import About from "./components/about";
import ModeBtn from "./components/ModeBtn/ModeBtn";

function App() {
  const appContext = useAppContext();
  const p_mode = appContext.appP_Mode;
  return (
    <div
      className={`bg-base ${
        p_mode == "POTATO" ? "potato-bg" : "pretty-bg"
      } `}
    >
      <ModeBtn />
      <div className="app-container">
        <About/>
      </div>
    </div>
  );
}

export default App;
