// Root container for a page

/* Imports */
/* Stylesheets etc. */
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import MyHelmet from "../headers/MyHelmet";
import NextHelmet from "../headers/NextHelmet";
import { MobileView } from "../layout/Views";
import NavigationBar from "../navigation/NavigationBar";
import ThemeContext from "../themes/ThemeContext";
import { Dimensions } from "../utilities";
import { SiteContext } from "../utilities/SiteContext";
import MyHelmet from "../headers/MyHelmet";

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

  const theme = useContext(ThemeContext);
  const site = useContext(SiteContext);

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
      <MyHelmet title={site.name} backgroundColor={theme.backgroundColor} />
      {loaded && (
        <>
          {props.next && (
            <NextHelmet
              title={site.name}
              backgroundColor={theme.backgroundColor}
            />
          )}
          <NavigationBar title={theme.navbar.title} links={site.links}/>
          <div style={props.style}>
            {/* Only display contents if loaded */}
            <StyledPage style={props.style}>{props.children}</StyledPage>
          </div>
        </>
      )}
    </>
  );
}
Page.defaultProps = {
  next: true
};
