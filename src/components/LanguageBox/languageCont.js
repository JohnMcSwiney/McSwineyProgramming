import React from "react";
import "../aboutstyle.css";
import "./languageCont.css"
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

import LangIcon from "./langIcon";

function LanguageCont() {

  return (
    <div className="language-box mar-bot">
      <LangIcon title='Java'>
      <FaJava />
      </LangIcon>

      <LangIcon title='JS'>
      <IoLogoJavascript />
      </LangIcon>

      <LangIcon title='React'>
      <FaReact />
      </LangIcon>

      <LangIcon title='Python'>
      <FaPython />
      </LangIcon>

      <LangIcon title='Node JS'>
      <FaNodeJs />
      </LangIcon>

      <LangIcon title='MongoDB'>
      <SiMongodb />
      </LangIcon>

      <LangIcon title='SQL'>
      <SiMysql />
      </LangIcon>

      {/* <div className="icon">
        <SiCplusplus />
        C++
      </div> */}

    </div>
  );
}

export default LanguageCont;
