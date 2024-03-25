import React, { useEffect, useState } from "react";

import './ProjectStyles.css'

import projectJson from './Projects.json'

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
      <p>{projectJson.projects[0].desc}</p>
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