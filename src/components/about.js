import React from 'react'
import "./aboutstyle.css"
import logo from "../assets/Sm_logo_2x.png"
// import pfp from "../assets/pfppixelated.png"
import pfp from "../assets/johnny1.png"

import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

function About() {
  return (
    <div className='about-container outfit-500'>
        <div className='app-header'>
            <img src={logo} className='app-logo'/>
            <h2 className='app-title outfit-700'>McSwiney</h2>
            <h2 className='app-title outfit-500'>Programming</h2>
        </div>
        <div className='app-content'>
            <section className='pg about-content'>
                <div className='about-img'>
                        <img src={pfp}/>
                </div>
                <div className='about-text'>
                    <h3 className='outfit-300'>Frontend-developer</h3>
                    <h2>John (Johnny) McSwiney</h2>
                    <p className='outfit-400'>A great worker who’s personable and incredibly tech savvy. I’m a problem solver who loves a project - I can find a solution to any problem quickly. I work well in groups and enjoy working with a team, in school I was often headed as the group lead because of my tenacity and conflict resolution skills. I am motivated, hardworking, and personable.</p>
                    <div className='about-buttons'>
                        <button className='btn btn-primary outfit-600'>Download Resume</button>
                        <button className='btn outfit-500'>Contact</button>
                    </div>
                    
                </div>
            </section>
        </div>
        <div className='filler-box'>
            <div className='icon'><FaJava />Java
            <div className='icon-description'>3+ Years</div>
            </div>

            <div className='icon'><IoLogoJavascript />Javascript
            <div className='icon-description'>4+ Years</div>
            </div>

            <div className='icon'><FaReact />React
            <div className='icon-description'>3+ Years</div>
            </div>

            <div className='icon'><FaVuejs/>Vue
            <div className='icon-description'>1 Year</div>
            </div>
            <div className='icon'><IoLogoHtml5 />HTML & <IoLogoCss3 />CSS
            <div className='icon-description'>4+ Years</div>
            </div>
            <div className='icon'><FaPython />Python
            <div className='icon-description'>2+ Years</div>
            </div>

            <div className='icon'><SiCplusplus />C++
            <div className='icon-description'>2+ Years</div>
            </div>

            
            <div className='icon'><FaNodeJs />Node JS
            <div className='icon-description'>3+ Years</div>
            </div>

            <div className='icon'><SiMongodb />MongoDB
            <div className='icon-description'>2+ Years</div>
            </div>
            
            <div className='icon'><SiMysql />SQL
            <div className='icon-description'>4+ Years</div>
            </div>
            
        </div>
        <div>
            <h2><FaFigma />Experienced Figma in Prototyping</h2>
        </div>
    </div>
  )
}

export default About