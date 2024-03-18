import React, { useEffect, useState } from 'react'
import "./aboutstyle.css"
import "../App.css"
import logo from "../assets/Sm_logo_2x.png"
// import pfp from "../assets/pfppixelated.png"
import pfp from "../assets/johnny1.png"

import { FaFigma} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsPersonRaisedHand } from "react-icons/bs";
import { MdDevices } from "react-icons/md";

// components
import LanguageCont from './languageCont'

function About({context}) {
    // getting the global state variable without importing context
    const [aboutPMode,setAboutPMode] = useState("")
    useEffect(()=> {
     if(context){
        const temp = context.appP_Mode
        setAboutPMode(temp);
     }
    },[])

    return (
    <div className='about-container outfit-500 pretty-cont' >
        <div className='app-header'>
            <img src={logo} className='app-logo'/>
            <h2 className='app-title outfit-700'>McSwiney</h2>
            <h2 className='app-title outfit-500'>Programming</h2>
        </div>
        <div className='app-content mar-bot'>
            <section className='about-content'>
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
            <div className='about-transition'>
                ...
            </div>
        </div>
        <div className='sub-title mar-l-a'>
            <h3 className='outfit-700'>Languages & Frameworks:</h3>
            <svg className='sub-title-accent'>
                <rect width="60" height="5" />
            </svg>
            </div>
            <LanguageCont/>
        
        <div className='about-what_i_do mar-bot'>
            <div className='sub-title'>
            <h3 className='outfit-700'>What I Do:</h3>
            <svg className='sub-title-accent'>
                <rect width="30" height="5" />
            </svg>
            </div>
            <div className='grid-container-what_i_do'>
                <div className="grid-item">
                    <div className='grid-icon'>
                        <FaFigma />
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Figma Prototyping:</h2>
                        <p className='outfit-500'>I’m experienced in creating Figma Prototypes. I excel at creating beautiful designs from ideas quickly. </p>
                    </div>
                </div>
                
                <div className="grid-item">
                    <div className='grid-icon'>
                        <CgWebsite />
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Web Design:</h2>
                        <p className='outfit-500'>I have a myriad of experience in modern and legacy web development technologies. I have an eye for detail and won’t stop until I’m proud of my work.</p>
                    </div>
                </div>

                <div className="grid-item">
                    <div className='grid-icon'>
                    <MdDevices />
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Responsive Designs:</h2>
                        <p className='outfit-500'> I create beautiful responsive websites that please the eye and are easy to read on every screen size.</p>
                    </div>
                </div>

                <div className="grid-item">
                    <div className='grid-icon'>
                    <BsPersonRaisedHand />
                    {/* <FaBlackTie /> */}
                    </div>
                    <div className='grid-text'>
                        <h2 className='outfit-600'>Professional:</h2>
                        <p className='outfit-500'>I show up on time, I do my job well and I'm proud of my work. I reevaluate often and constantly improve - I complete tasks and meet deadlines. I'm friendly and a great co-worker </p>
                    </div>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default About