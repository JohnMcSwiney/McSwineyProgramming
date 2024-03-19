import React, { useEffect, useState } from "react";
import "./aboutstyle.css";
import "../App.css";
import "./responsivetext.css"
import logo from "../assets/Sm_logo_2x.png";
// import pfp from "../assets/pfppixelated.png"
import pfp from "../assets/johnny1.png";

import { FaFigma,FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsPersonRaisedHand } from "react-icons/bs";
import { MdDevices } from "react-icons/md";

// components & context
import { useAppContext } from "../context/AppContext";
import LanguageCont from "./LanguageBox/languageCont";

function About() {
  const appContext = useAppContext();
  const p_mode = appContext.appP_Mode;

  return (
    <div className={`about-container outfit-500 ${p_mode === "POTATO" ? "potato-cont" : "pretty-cont"}`}>
      <div className="app-header">
        <img src={logo} className="app-logo" />
        <h2 className="app-title outfit-700">McSwiney</h2>
        <h2 className="app-title outfit-500">Programming</h2>
      </div>

      <div className="about-top-box mar-bot">
        <section className="about-top-content">
          <div className="about-img">
            <div className="about-img-transition-1">...</div>
            <img src={pfp} />
            <div className="about-img-transition-2">...</div>
          </div>
          <div className="about-text ">
            <h3 className="outfit-300">Frontend-developer</h3>
            <h2>John (Johnny) McSwiney</h2>
            <p className="outfit-400 tablet-indented">
              A great worker who’s personable and tech savvy. A problem
              solver who loves a project, able to find a solution to any problem.
              Works well in groups and enjoys working with a team. Often the group lead in school because of tenacity and conflict
              resolution skills. Highly motivated, professional, and hardworking.
            </p>
          </div>
          <div className="about-buttons">
            <a href="https://drive.google.com/file/d/1ZF4xbiNarg2b9ObI6oUBmemL__5hKg--/view?pli=1" target="_blank">
              <button className="btn btn-primary outfit-600">
                Download Resume
              </button>
            </a>
            
            <a href="https://github.com/JohnMcSwiney" target="_blank">
              <button className="btn btn-secondary outfit-500"><FaGithub />  Github</button>
            </a>
            <button className="btn outfit-500">Contact</button>
          </div>
        </section>

        <div className="about-transition">...</div>
      </div>

      <div className="sub-title mar-l-a ">
        <h3 className="outfit-700">Languages & Frameworks:</h3>
        <svg className="sub-title-accent">
          <rect width="60" height="5" />
        </svg>
      </div>

      <LanguageCont />

      <div className="about-what_i_do mar-bot">
        <div className="sub-title mar-l-a">
          <h3 className="outfit-700">What I Do:</h3>
          <svg className="sub-title-accent">
            <rect width="30" height="5" />
          </svg>
        </div>
        <div className="grid-container-what_i_do">
          <div className="grid-item">
            <div className="grid-icon">
              <FaFigma />
            </div>
            <div className="grid-text">
              <h2 className="outfit-600">Figma Prototyping:</h2>
              <p className="outfit-500">
                Experienced creating Figma Prototypes.Excels at
                creating beautiful designs from ideas quickly.
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-icon">
              <CgWebsite />
            </div>
            <div className="grid-text">
              <h2 className="outfit-600">Web Design:</h2>
              <p className="outfit-500">
                Has a myriad of experience in modern & legacy web
                technologies, with an eye for detail and a history of attractive designs.
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-icon">
              <MdDevices />
            </div>
            <div className="grid-text">
              <h2 className="outfit-600">Responsive Designs:</h2>
              <p className="outfit-500">
                Creates beautiful responsive websites that please the eye and
                are easy to read on every screen size.
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-icon">
              <BsPersonRaisedHand />
              {/* <FaBlackTie /> */}
            </div>
            <div className="grid-text">
              <h2 className="outfit-600">Professional:</h2>
              <p className="outfit-500">
                Shows up on time, completes tasks and meets
                deadlines. A great friendly co-worker, with a healthy sense of humor.
              </p>
              {/* <p className="outfit-500">
                I show up on time, I do my job well and I'm proud of my work. I
                reevaluate often and constantly improve - I complete tasks and
                meet deadlines. I'm friendly and a great co-worker
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
