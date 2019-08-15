import { Heading, Transition, ThemeContext, Colors } from "@robbie-cook/react-components";
import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={Colors}>
          <Transition useState={useState} useEffect={useEffect}>
            <Heading>Storyboard for React Components</Heading>
          </Transition>
        </ThemeContext.Provider> 
      </header>
    </div>
  );
}

export default App;
