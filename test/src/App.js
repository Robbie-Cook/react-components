// import { Heading, Transition, ThemeContext, DefaultTheme } from "@robbie-cook/react-components";
import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Heading,
  Dimensions,
  Text,
  Link,
  Button,
  Transition,
  NavigationBar,
  DefaultTheme,
  ThemeContext,
  SiteContext,
  DefaultSiteContext,
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
          </Transition>

          <Heading type="h2">Testing loader</Heading>
          <Transition loaded={false}>
            <Text>Hidden text</Text>
          </Transition>
        </Page>
      </ThemeContext.Provider>
    </SiteContext.Provider>
  );
}

export default App;
