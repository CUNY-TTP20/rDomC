import React from 'react';
import ColorSelector from "./Components/colorSelector";

function App() {
  return (
    <div className="App">
      <ColorSelector
        Red="20"
        Green="100"
        Blue="20"
        Alpha="23"
      />
    </div>
  );
}

export default App;
