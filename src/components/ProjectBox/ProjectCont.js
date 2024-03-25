import React from 'react';
import './ProjectStyles.css';

function ProjectCont({children}) {
  return (
    <div className='proj-parent-container'>
      <div className="sub-title mar-l-a ">
        <h3 className="outfit-700">Projects:</h3>
        <svg className="sub-title-accent">
          <rect width="60" height="5" />
        </svg>
      </div>
        {children}
    </div>
  )
}

export default ProjectCont