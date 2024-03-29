import React, { useEffect, useState } from "react";

import './ProjectStyles.css'

import projectJson from './Projects.json'

import { FaReact } from "react-icons/fa";


function ProjectTrove({index}) {
    const [evenIndex, setEvenIndex] = useState(false);
  function isEven(n){
    return(n % 2 == 0);
  }

  useEffect(()=>{
    {index !== null &&
     setEvenIndex(isEven(index));
    }
  },[])
  return (
    <div className={`project-component ${evenIndex ? "project-dark-bg" : "project-light-bg"}`}>
      <h2>{projectJson.projects[0].name}</h2>
      <h3>{projectJson.projects[0].date}</h3>
      <p>{projectJson.projects[0].desc}</p>
      <div><div className="icon-cont" ><FaReact className="icon"/></div></div>
      {projectJson.projects[0].URL != ""  &&
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