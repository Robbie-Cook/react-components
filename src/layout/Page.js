// Root container for a page

/* Imports */
/* Stylesheets etc. */
import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import DefaultTheme from "../themes/DefaultTheme";
import ThemeContext from "../themes/ThemeContext";
import { Dimensions } from "../utilities";
import MyHelmet from "../headers/MyHelmet";

import NavigationBar from "../navigation/NavigationBar";
import { MobileView } from "../layout/Views";
import Transition from "../animation/Transition";

/* Navigation links, which are passed to navbar.js */

/**
 * Define a React Context for all child components to use
 * Made to make finding DefaultTheme easier
 */

// Main Page component
export default function Page(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Styles for component
  const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${new Dimensions(40, 90, 0, 90)};

    // Mobile styles
    ${new MobileView(`
      flex-direction: column;
      padding: ${new Dimensions(20, 30)}; 
    `)}
  `;

  return (
    <>
      <MyHelmet />
      <Transition loaded={loaded}>
        <NavigationBar />
        <div style={props.style}>
          <StyledPage style={props.style}>{props.children}</StyledPage>
        </div>
      </Transition>
    </>
  );
}
