import React, { useState } from 'react';
import UseState from './component/UseState';
import './App.css';

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(prevState => !prevState);
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseState />
    </ToggleTheme.Provider>
  );
}

export default App;
