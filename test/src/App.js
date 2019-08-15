import { Heading, Transition, ThemeContext, Colors } from "@robbie-cook/react-components";
import React, { useEffect, useState } from 'react';
import './App.css';

/**
 * The main entry point for the app
 */
function App() {
  // State updated when component painted
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {setLoaded(true)}, [])

  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={Colors}>
          <Transition loaded={loaded}>
            <Heading>Storyboard for React Components</Heading>
          </Transition>
        </ThemeContext.Provider> 
      </header>
    </div>
  );
}

export default App;
