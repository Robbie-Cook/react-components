// import { Heading, Transition, ThemeContext, DefaultTheme } from "@robbie-cook/react-components";
import {
  Button,
  DefaultSiteContext,
  DefaultTheme,
  Dimensions,
  Heading,
  Link,
  Page,
  SiteContext,
  Text,
  ThemeContext,
  Transition
} from "@robbie-cook/react-components";
// import NavigationBar from "src/navigation/NavigationBar"
import React, { useEffect, useState } from "react";
import "./App.css";

/**
 * The main entry point for the app
 */
function App() {
  // State updated when component painted
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  new Dimensions();

  return (
    <SiteContext.Provider value={DefaultSiteContext}>
      <ThemeContext.Provider value={DefaultTheme}>
        <Page>
          <Transition loaded={loaded}>
            <Heading>My React storyboard</Heading>
            <Text>
              This is a test of the different components in{" "}
              <Link href="https://www.npmjs.com/package/@robbie-cook/react-components">
                @robbie-cook/react-components
              </Link>
            </Text>
            <Button label="Testing button" />

            <Heading type="h2">Testing loader</Heading>
            <Transition loaded={false}>
              <Text>Hidden text</Text>
            </Transition>
          </Transition>
        </Page>
      </ThemeContext.Provider>
    </SiteContext.Provider>
  );
}

export default App;
