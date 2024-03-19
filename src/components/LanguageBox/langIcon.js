import React from 'react'

function LangIcon({children, title}) {
    // console.log(title)
    return (
    <div className='icon-cont'>
        <div className="icon">{children}</div>
        <h2>{title}</h2>
    </div>
  )
}

export default LangIcon