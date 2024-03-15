import logo from './logo.svg';
import './App.css';

import About from './components/about';
import { useEffect, useState } from 'react';

function App() {
  const [p_mode, set_p_mode] = useState(true);
  // const toggle_mode = () => {
  //   console.log(p_mode);
  //   set_p_mode(!p_mode);
  // }
  useEffect(()=> {
    console.log('variable changed')
  },[p_mode])

  return (
    <div className={`bg-base ${p_mode ? "performance-bg" :"pretty-bg"} `}>
      <div className='mode-switch-cont'>
        {/* <p>Mode:</p> */}
        <button onClick={() => set_p_mode(!p_mode)} className='mode-switch-btn'>
          {p_mode ? "💪" : "✨"}
        </button>
      </div>
      
      <div className="app-container">
        <About p_mode={{}}/>
      </div>
    </div>
  );
}

export default App;
