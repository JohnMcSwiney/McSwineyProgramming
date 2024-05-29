import React, { useEffect, useState } from "react";

import './ProjectStyles.css'

import 'react-tooltip/dist/react-tooltip.css'

import projectJson from './Projects.json'

import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

function ProjectTrove({ index }) {
  const [evenIndex, setEvenIndex] = useState(false);
  const [showingMore, setShowingMore] = useState(false);

  function isEven(n) {
    return (n % 2 == 0);
  }

  useEffect(() => {
    {
      index !== null &&
      setEvenIndex(isEven(index));
    }
  }, [])
  return (
    <div className={`project-component ${evenIndex ? "project-dark-bg" : "project-light-bg"}`}>
      <div className="project-title">
        {/* <h2>{projectJson.projects[0].name}</h2> */}
        <h2><strong>Trove</strong>Music</h2>
        <h3>{projectJson.projects[0].date}</h3>
      </div>

      <div className="technology-cont" >
        <p className="technology-title"> Built using:</p>
        <div className="technology-icon"><FaReact />React</div>
        <div className="technology-icon"><FaNodeJs /> Node js</div>
        <div className="technology-icon"><BiLogoMongodb />MongoDB</div>
      </div>
      <div className="site-hyperlink" data-tooltip-id="my-tooltip" data-tooltip-content="Redirecting to an external site">
      
      {projectJson.projects[0].URL != "" &&
      
        <a
          href={projectJson.projects[0].URL}
          target="_blank"
        >
          <Tooltip id="my-tooltip" />
          <button className="btn btn-primary outfit-600">
            Visit Site
          </button>
        </a>
      }
      </div>
      <div className="project-description outfit-300">
        <p>{projectJson.projects[0].desc}</p>
        
        <div className={showingMore == true ? "showing " : "not-showing "}>
        {/* <br /> */}
        <p >{projectJson.projects[0].desc2}</p>
        {/* <br/> */}
        <p>{projectJson.projects[0].anec}</p>
        </div>
        <a className="show-more--anchor" onClick={() => setShowingMore(!showingMore)}>{showingMore ? "Show Less" : "Show More..." }</a>
      </div>

      <div className="Trove-Screenshots">

      </div>

      {/* <BiLogoMongodb /> */}
      
      
    </div>
  )
}

export default ProjectTrove