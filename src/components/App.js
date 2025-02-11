import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setFlag(true);  
  }
  return (
    <div className="App" id="main">
      <p id="para" className={flag ? "show" : "hide" }>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button onClick={handleClick} id="click">Click</button>
    </div>
  );
}

export default App
