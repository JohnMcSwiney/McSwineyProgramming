import React, { useEffect, useState } from "react";

import './ProjectStyles.css'



function Project({ projectInfo, index }) {
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
      <h2>{projectInfo.name}</h2>
      <p>{projectInfo.desc}</p>
      {projectInfo.URL != ""  &&
       <a
       href={projectInfo.URL} 
       target="_blank"
     >
       <button className="btn btn-primary outfit-600">
         Visit Site
       </button>
     </a>
     }
    </div>
  );
}

export default Project;
