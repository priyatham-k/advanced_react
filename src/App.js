// src/App.js
import React from 'react';
import './App.css';
import { useRef } from 'react';
function App() {
  // This function returns what will be shown on screen
  const inputRef = useRef(null); // input element pointing variable
  function focusField() {
    inputRef.current.focus(); // DOM method తో focus చేయటం
  }
  return (
    <div className="App">
      <div>
      <input ref={inputRef} /> {/* ref attribute తో DOM కు attach */}
      <button onClick={focusField}>Focus Input</button>
    </div>
    </div>
  );
}

// Export so other files can use this component
export default App;