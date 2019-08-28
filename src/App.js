// import { Heading, Transition, ThemeContext, DefaultTheme } from "@robbie-cook/react-components";
import { Button } from "./ui-components/Button"
import { DefaultSiteContext, SiteContext } from "./utilities/SiteContext"
import DefaultThemeObject from "./themes/DefaultThemeObject"
import Dimensions from "./utilities/Dimensions"
import {Heading, Link, Text } from "./utilities/Typography"
import Page from  "./layout/Page"
import ThemeContext from "./themes/ThemeContext"
import Transition from "./animation/Transition"

import React, { useEffect, useState } from "react";

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
      <ThemeContext.Provider value={DefaultThemeObject}>
        <Page next={false}>
          <Transition show={loaded} spinner={true}>
            <Heading>My React storyboard</Heading>
            <Text>
              This is a test of the different components in{" "}
              <Link href="https://www.npmjs.com/package/@robbie-cook/react-components">
                @robbie-cook/react-components
              </Link>
            </Text>
            <Button label="Testing button" />

            <Heading type="h2">Testing loader</Heading>
            <Transition show={false} spinner={true}>
              <Text>Hidden text</Text>
            </Transition>
          </Transition>
        </Page>
      </ThemeContext.Provider>
    </SiteContext.Provider>
  );
}

export default App;
