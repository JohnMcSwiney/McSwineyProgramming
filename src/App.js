import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { useAppContext } from "./context/AppContext";

import About from "./components/about";
import ModeBtn from "./components/ModeBtn/ModeBtn";

function App() {
  const appContext = useAppContext();
  const p_mode = appContext.appP_Mode;
  // const toggle_mode = () => {
  //   console.log(p_mode);
  //   set_p_mode(!p_mode);
  // }
  useEffect(() => {
    console.log("variable changed");
  }, [p_mode]);

  return (
    <div
      className={`bg-base ${
        p_mode == "POTATO" ? "potato-bg" : "pretty-bg"
      } `}
    >
      <ModeBtn />
      <div className="app-container">
        <About p_mode={{}} />
      </div>
    </div>
  );
}

export default App;
