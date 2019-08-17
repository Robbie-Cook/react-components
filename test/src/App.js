<<<<<<< develop
import {
  Heading,
  Transition,
  ThemeContext,
  Colors,
  NavigationBar
} from "@robbie-cook/react-components";
import React, { useEffect, useState } from "react";
import "./App.css";
=======
// import { Heading, Transition, ThemeContext, Colors } from "@robbie-cook/react-components";
import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Heading,
  Dimensions,
  Text,
  Link,
  Button
} from "@robbie-cook/react-components";
>>>>>>> Cleaning up circular dependencies

/**
 * The main entry point for the app
 */
function App() {
  // State updated when component painted
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="App">
      <ThemeContext.Provider value={Colors}>
        <NavigationBar />
        {/* <header className="App-header">
          <Transition loaded={loaded}>
            <Heading>Storyboard for React Components</Heading>
          </Transition>
        </header> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
