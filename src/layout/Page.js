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
    padding: ${theme.page.padding};

    // Mobile styles
    ${new MobileView(`
      flex-direction: column;
      padding: ${theme.page.mobilePadding}; 
    `)}
  `;

  return (
    <>
      <MyHelmet title={site.sitename} backgroundColor={theme.backgroundColor} />
      {loaded && (
        <>
          {props.next && (
            <NextHelmet
              title={site.sitename}
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
  next: true,
  padding: '',
};
