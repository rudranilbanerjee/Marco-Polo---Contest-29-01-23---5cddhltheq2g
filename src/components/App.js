import React from 'react'
import '../styles/App.css';
const App = () => {
  
  return (
    <div id="main">
   <h1 id="marco-polo">{marcoPolo}</h1>
      <button id="marco-polo-toggler" onClick={toggleMarcoPolo}>{marcoPoloToggler}</button>
    </div>
  )
}


export default App;
