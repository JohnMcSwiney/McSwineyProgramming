import React from "react";
import "./aboutstyle.css";

import {
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaFigma,
  FaBlackTie,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { SiTailwindcss, SiMysql, SiCplusplus, SiMongodb } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
function LanguageCont() {
  return (
    <div className="language-box mar-bot">
      <div className="icon">
        <FaJava />
        Java
      </div>

      <div className="icon">
        <IoLogoJavascript />
        Javascript
      </div>

      <div className="icon">
        <FaReact />
        React
      </div>

      <div className="icon">
        <FaVuejs />
        Vue
      </div>
      <div className="icon">
        <FaPython />
        Python
      </div>

      <div className="icon">
        <SiCplusplus />
        C++
      </div>

      <div className="icon">
        <FaNodeJs />
        Node JS
      </div>

      <div className="icon">
        <SiMongodb />
        MongoDB
      </div>

      <div className="icon">
        <SiMysql />
        SQL
      </div>
    </div>
  );
}

export default LanguageCont;
