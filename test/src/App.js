// import { Heading, Transition, ThemeContext, DefaultTheme } from "@robbie-cook/react-components";
import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Heading,
  Dimensions,
  Text,
  Link,
  Button
  Page
} from "@robbie-cook/react-components";

/**
 * The main entry point for the app
 */
function App() {
  // State updated when component painted
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  new Dimensions();

  return (
    <div className="App">
      <header className="App-header">
        {/* <NavigationBar /> */}
        <Heading>My React storyboard</Heading>
        <Text>
          This is a test of the different components in{" "}
          <Link href="https://www.npmjs.com/package/@robbie-cook/react-components">
            @robbie-cook/react-components
          </Link>
        </Text>
        <Button label="Testing button" />
      </header>
    </div>
  );
}

export default App;
