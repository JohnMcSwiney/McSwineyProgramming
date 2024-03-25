import React, {useEffect} from 'react';
import './ProjectStyles.css';
// decided to go for a more customizable approach
// import Project from './Project';

import projectsJson from "./Projects.json";

import ProjectTrove from './ProjectTrove';

function ProjectCont() {
  let projectArray = projectsJson.projects 
  useEffect(()=>{
    console.log(projectsJson.projects);
    console.log("variable: " + projectArray[0].name)
  },[projectsJson]);
  
  return (
    <div 
    className='proj-parent-container'
    >
      <h1 className='wip-header'> ***** CURRENTLY W.I.P. *****</h1>
      <div className="sub-title mar-l-a ">
        <h3 className="outfit-700">Projects:</h3>
        <svg className="sub-title-accent">
          <rect width="60" height="5" />
        </svg>
      </div>
      <ProjectTrove index={0}/>
      {/* {projectsJson ? (
        <div>
          {projectsJson.projects.map((item,i, key)=> {
            return <Project projectInfo={item} index={i} key={key}/>
          })
          }
          </div>
      ) :
      (
        <div><h1>Issue loading content</h1></div>
      )}*/}
    </div> 
  )
}

export default ProjectCont