import React from 'react'
import './ModeBtn.css';
import { useAppContext } from '../../context/AppContext';

function ModeBtn() {
  const appContext = useAppContext();
  const p_mode = appContext.appP_Mode;

  const switchPerformanceMode = () => {
    console.log(p_mode + " change requested")
    if(p_mode == "POTATO"){
      appContext.updatePerformanceMode("PRETTY")
    } else if( p_mode == "PRETTY"){
      appContext.updatePerformanceMode("POTATO")
    } else {
      appContext.updatePerformanceMode("POTATO")
    }
  }

  return (
    <div className='mode-switch-cont'>
        {/* <p>Mode:</p> */}
        <button onClick={() => switchPerformanceMode()} className='mode-switch-btn'>
          {p_mode == "POTATO" ? "🥔" : "✨"}
        </button>
      </div>
  )
}

export default ModeBtn