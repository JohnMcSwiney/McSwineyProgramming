import React from 'react'
import "./aboutstyle.css"
import "../App.css"
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
import { CgWebsite } from "react-icons/cg";
import { BsPersonRaisedHand } from "react-icons/bs";
import { MdDevices } from "react-icons/md";

function About() {
  return (
    <div className='about-container outfit-500 pretty-cont' >
        <div className='app-header mar-bot'>
            <img src={logo} className='app-logo'/>
            <h2 className='app-title outfit-700'>McSwiney</h2>
            <h2 className='app-title outfit-500'>Programming</h2>
        </div>
        <div className='app-content mar-bot'>
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
        <div className='sub-title mar-l-a'>
            <h3 className='outfit-700'>Languages & Frameworks:</h3>
            <svg className='sub-title-accent'>
                <rect width="60" height="5" />
            </svg>
            </div>
        <div className='filler-box mar-bot'>
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
        <div className='about-what_i_do mar-bot'>
            <div className='sub-title'>
            <h3 className='outfit-700'>What I Do:</h3>
            <svg className='sub-title-accent'>
                <rect width="30" height="5" />
            </svg>
            </div>
            <div className='grid-container-what_i_do'>
                <div class="grid-item">
                    <div className='grid-icon'>
                        <FaFigma />
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Figma Prototyping:</h2>
                        <p className='outfit-500'>I’m experienced in creating Figma Prototypes. I excel at creating beautiful designs from ideas quickly. </p>
                    </div>
                </div>
                
                <div class="grid-item">
                    <div className='grid-icon'>
                        <CgWebsite />
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Web Design:</h2>
                        <p className='outfit-500'>I have a myriad of experience in modern and legacy web development technologies. I have an eye for detail and won’t stop until I’m proud of my work.</p>
                    </div>
                </div>

                <div class="grid-item">
                    <div className='grid-icon'>
                    <MdDevices />
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Responsive Designs:</h2>
                        <p className='outfit-500'> I create beautiful responsive websites that please the eye and are easy to read on every screen size.</p>
                    </div>
                </div>

                <div class="grid-item">
                    <div className='grid-icon'>
                    <BsPersonRaisedHand />
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Personable:</h2>
                        <p className='outfit-500'>I’m a personable guy who’s great with clients. I’m good at building a professional relationship with clients.</p>
                    </div>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default About