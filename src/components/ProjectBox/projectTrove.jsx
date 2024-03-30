import React, { useEffect, useState } from "react";

import './ProjectStyles.css'

import projectJson from './Projects.json'

import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

function ProjectTrove({ index }) {
  const [evenIndex, setEvenIndex] = useState(false);
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
        <h3 className="technology-title"> Built using:</h3>
        <div className="technology-icon"><FaReact />React</div>
        <div className="technology-icon"><FaNodeJs /> Node js</div>
        <div className="technology-icon"><BiLogoMongodb />MongoDB</div>
      </div>
      <div className="project-description outfit-300">
        <p>{projectJson.projects[0].desc}</p>
        <br />
        <p>{projectJson.projects[0].desc2}</p>
        <br />
        <p>{projectJson.projects[0].anec}</p>
      </div>

      <div className="Trove-Screenshots">

      </div>

      {/* <BiLogoMongodb /> */}
      {projectJson.projects[0].URL != "" &&
        <a
          href={projectJson.projects[0].URL}
          target="_blank"
        >
          <button className="btn btn-primary outfit-600">
            Visit Site
          </button>
        </a>
      }
    </div>
  )
}

export default ProjectTrove